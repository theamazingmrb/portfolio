#!/usr/bin/env python3
"""
Build the chatbot knowledge index by extracting content from the portfolio
and generating embeddings via Ollama's nomic-embed-text model.

Usage: python3 scripts/build-chatbot-index.py
"""

import json
import os
import re
import sys
from pathlib import Path

import urllib.request

OLLAMA_HOST = os.environ.get("OLLAMA_HOST", "http://localhost:11434")
CHUNK_SIZE = 800
CHUNK_OVERLAP = 100


def ollama_embed(text: str) -> list:
    data = json.dumps({"model": "nomic-embed-text", "prompt": text}).encode()
    req = urllib.request.Request(
        f"{OLLAMA_HOST}/api/embeddings",
        data=data,
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    with urllib.request.urlopen(req) as resp:
        result = json.loads(resp.read().decode())
    return result["embedding"]


def chunk_text(text: str, source: str, chunk_size: int = CHUNK_SIZE, overlap: int = CHUNK_OVERLAP) -> list:
    normalized = re.sub(r"\s+", " ", text).strip()
    if not normalized:
        return []

    chunks = []
    start = 0
    idx = 0

    while start < len(normalized):
        end = min(start + chunk_size, len(normalized))

        if end == len(normalized):
            # Last chunk: take remaining text and exit
            chunk = normalized[start:].strip()
            if len(chunk) > 30:
                chunks.append({
                    "id": f"{source}-{idx}",
                    "text": chunk,
                    "source": source,
                })
            break

        # Find a break point before the hard end
        search_start = max(start + chunk_size - 80, start)
        sentence_match = normalized.rfind(". ", search_start, end)
        if sentence_match > search_start:
            break_point = sentence_match + 1
        else:
            word_match = normalized.rfind(" ", search_start, end)
            break_point = word_match if word_match > search_start else end

        chunk = normalized[start:break_point].strip()
        if len(chunk) > 30:
            chunks.append({
                "id": f"{source}-{idx}",
                "text": chunk,
                "source": source,
            })

        # Advance with overlap
        start = break_point - overlap
        if start >= break_point or start <= 0:
            start = break_point
        idx += 1

    return chunks


def extract_blogs() -> list:
    blogs_dir = Path.cwd() / "blogs"
    chunks = []
    for file in sorted(blogs_dir.glob("*.md")):
        content = file.read_text()
        # Strip frontmatter
        parts = content.split("---")
        without_frontmatter = "---".join(parts[2:]) if len(parts) >= 3 else content
        source = f"blog/{file.stem}"
        file_chunks = chunk_text(without_frontmatter, source)
        for c in file_chunks:
            c["sourceUrl"] = f"/blog/{file.stem}"
        chunks.extend(file_chunks)
    return chunks


def extract_projects() -> list:
    """Extract project data from data/projects.ts into rich chunks."""
    file_path = Path.cwd() / "data" / "projects.ts"
    content = file_path.read_text()
    chunks = []

    # Split by project blocks (id: "...")
    parts = content.split('id: "')
    project_names = []
    
    for i in range(1, len(parts)):
        part = parts[i]
        id_end = part.find('"')
        if id_end == -1:
            continue
        proj_id = part[:id_end]
        project_names.append(proj_id)

        id_idx = content.find(f'id: "{proj_id}"')
        next_project = content.find('id: "', id_idx + 1)
        block_end = next_project if next_project > -1 else len(content)
        block = content[id_idx:block_end]

        # Extract all fields
        title_match = re.search(r'title:\s*"([^"]+)"', block)
        desc_match = re.search(r'description:\s*"([^"]+)"', block)
        details_match = re.search(r'details:\s*[`"]([\s\S]*?)[`"],?\s*(?:url|githubUrl|techStack|features|metrics)', block)
        impact_match = re.search(r'businessImpact:\s*"([^"]+)"', block)
        
        # Tech stack
        tech_stack = re.findall(r'techStack:\s*\[([\s\S]*?)\]', block)
        tech_items = []
        if tech_stack:
            tech_items = re.findall(r'"([^"]+)"', tech_stack[0])
        
        # Features
        features_match = re.search(r'features:\s*\[([\s\S]*?)\]', block)
        feature_texts = []
        if features_match:
            feature_texts = re.findall(r'"([^"]+)"', features_match.group(1))
        
        # Metrics
        metrics_match = re.search(r'metrics:\s*\[([\s\S]*?)\]', block)
        metrics_texts = []
        if metrics_match:
            metrics_texts = re.findall(r'"([^"]+)"', metrics_match.group(1))

        # Build rich text
        text_parts = []
        if title_match:
            text_parts.append(f"Project: {title_match.group(1)}.")
        if desc_match:
            text_parts.append(desc_match.group(1))
        if details_match:
            text_parts.append(details_match.group(1))
        if tech_items:
            text_parts.append(f"Tech stack: {', '.join(tech_items)}.")
        if feature_texts:
            text_parts.append(f"Features: {'. '.join(feature_texts)}.")
        if metrics_texts:
            text_parts.append(f"Metrics: {'. '.join(metrics_texts)}.")
        if impact_match:
            text_parts.append(impact_match.group(1))

        text = " ".join(text_parts).replace("\\n", " ")
        text = re.sub(r"\s+", " ", text).strip()

        if len(text) > 50:
            pc = chunk_text(text, f"project/{proj_id}", CHUNK_SIZE, CHUNK_OVERLAP)
            for c in pc:
                c["sourceUrl"] = f"/projects/{proj_id}"
            chunks.extend(pc)
    
    # Add a project overview chunk for broad queries
    # Get titles instead of IDs for readable overview
    titles = []
    for i in range(1, len(parts)):
        part = parts[i]
        id_end = part.find('"')
        if id_end == -1:
            continue
        proj_id = part[:id_end]
        
        id_idx = content.find(f'id: "{proj_id}"')
        next_project = content.find('id: "', id_idx + 1)
        block_end = next_project if next_project > -1 else len(content)
        block = content[id_idx:block_end]
        
        title_match = re.search(r'title:\s*"([^"]+)"', block)
        if title_match:
            titles.append(title_match.group(1))
    
    if titles:
        overview = f"My projects include: {', '.join(titles)}. Ask me about any specific project for details."
        chunks.append({
            "id": "project-overview-0",
            "text": overview,
            "source": "project/overview",
            "sourceUrl": "/projects",
        })

    return chunks


def extract_skills() -> list:
    """Extract skills data from data/skills.ts."""
    file_path = Path.cwd() / "data" / "skills.ts"
    if not file_path.exists():
        return []
    
    content = file_path.read_text()
    chunks = []
    
    # Extract each category block
    category_pattern = r'category:\s*"([^"]+)"[\s\S]*?items:\s*\[([\s\S]*?)\]'
    for m in re.finditer(category_pattern, content):
        category = m.group(1)
        items_block = m.group(2)
        items = re.findall(r'"([^"]+)"', items_block)
        
        if items:
            text = f"Skills — {category}: " + "; ".join(items)
            text = re.sub(r"\s+", " ", text).strip()
            chunks.append({
                "id": f"skills-{category.lower().replace(' ', '-').replace('&', 'and')}-0",
                "text": text,
                "source": f"skills/{category.lower().replace(' ', '-').replace('&', 'and')}",
                "sourceUrl": "/about",
            })
    
    # Add overall skills summary
    all_items = re.findall(r'"([^"]+)"', content)
    if all_items:
        # Get just the skill names (before the em dash)
        skill_names = [item.split("—")[0].strip() for item in all_items if "—" in item]
        if skill_names:
            summary = f"My technical skills include: {', '.join(skill_names[:15])} and more. Ask about any specific technology or project."
            chunks.append({
                "id": "skills-summary-0",
                "text": summary,
                "source": "skills/summary",
                "sourceUrl": "/about",
            })
    
    return chunks


def extract_resume() -> list:
    """Extract resume text from data/resume.txt if present."""
    file_path = Path.cwd() / "data" / "resume.txt"
    if not file_path.exists():
        return []
    
    text = file_path.read_text()
    # Clean up common PDF extraction artifacts
    text = re.sub(r"\n\s*\n", "\n", text)
    text = re.sub(r"\s+", " ", text).strip()
    
    if len(text) < 50:
        return []
    
    pc = chunk_text(text, "resume", CHUNK_SIZE, CHUNK_OVERLAP)
    for c in pc:
        c["sourceUrl"] = "/about"
    return pc


def extract_extended_knowledge() -> list:
    """Extract extended knowledge from data/extended-knowledge.md."""
    file_path = Path.cwd() / "data" / "extended-knowledge.md"
    if not file_path.exists():
        return []
    
    content = file_path.read_text()
    chunks = []
    
    # Split by ## headers
    sections = re.split(r'\n##\s+', content)
    
    for section in sections:
        section = section.strip()
        if not section:
            continue
            
        # Extract section name if present
        lines = section.split('\n')
        section_name = lines[0].strip().lower().replace(' ', '-')
        body = '\n'.join(lines[1:]).strip()
        
        if not body:
            continue
            
        # Chunk each section
        pc = chunk_text(body, f"extended/{section_name}", CHUNK_SIZE, CHUNK_OVERLAP)
        for c in pc:
            c["sourceUrl"] = "/about"
        chunks.extend(pc)
    
    return chunks


def extract_experience() -> list:
    file_path = Path.cwd() / "data" / "experience.ts"
    content = file_path.read_text()
    chunks = []

    entry_pattern = (
        r'\{\s*title:\s*"([^"]+)"[\s\S]*?company:\s*"([^"]+)"[\s\S]*?'
        r'period:\s*"([^"]+)"[\s\S]*?description:\s*"([^"]+)"[\s\S]*?'
        r'achievements:\s*\[([\s\S]*?)\]'
    )
    for m in re.finditer(entry_pattern, content):
        title, company, period, description, achievements_raw = m.groups()
        achievements = re.findall(r'"([^"]+)"', achievements_raw)

        text = f"Work Experience: {title} at {company}. Period: {period}. {description} "
        if achievements:
            text += "Key achievements: " + ". ".join(achievements) + "."
        text = re.sub(r"\s+", " ", text).strip()

        if len(text) > 50:
            chunks.extend(chunk_text(text, f"experience/{company.lower().replace(' ', '-').replace('.', '')}"))

    return chunks


def extract_about() -> list:
    about_path = Path.cwd() / "app" / "about" / "page.tsx"
    if not about_path.exists():
        return []

    content = about_path.read_text()
    text_matches = re.findall(r'>([^<]+)<', content)
    text = " ".join(text_matches)
    text = re.sub(r"\s+", " ", text).strip()

    if len(text) > 50:
        return chunk_text(text, "about")
    return []


def main():
    print("Building chatbot knowledge index...\n")

    all_chunks = (
        extract_blogs() + 
        extract_projects() + 
        extract_resume() + 
        extract_extended_knowledge() + 
        extract_experience() + 
        extract_skills() + 
        extract_about()
    )

    print(f"Extracted {len(all_chunks)} raw chunks from:")
    print("  - Blogs")
    print("  - Projects")
    print("  - Resume")
    print("  - Extended Knowledge")
    print("  - Experience")
    print("  - Skills")
    print("  - About")

    embedded = []
    total = len(all_chunks)

    for i, chunk in enumerate(all_chunks):
        try:
            embedding = ollama_embed(chunk["text"])
            chunk["embedding"] = embedding
            embedded.append(chunk)
            if (i + 1) % 10 == 0 or i == total - 1:
                print(f"  Embedded {i + 1}/{total}")
        except Exception as e:
            print(f"  Failed to embed chunk {chunk['id']}: {e}")

    output_dir = Path.cwd() / "public" / "chatbot"
    output_dir.mkdir(parents=True, exist_ok=True)
    output_file = output_dir / "index.json"
    output_file.write_text(json.dumps(embedded, indent=2))
    print(f"\nSaved {len(embedded)} indexed chunks to {output_file}")


if __name__ == "__main__":
    main()
