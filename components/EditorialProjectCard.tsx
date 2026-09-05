import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

interface EditorialProjectCardProps {
  project: Project;
  index: number;
}

export default function EditorialProjectCard({ project, index }: EditorialProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className={`editorial-project project-${project.id}`}>
      <div className="project-visual">
        <div className="project-visual-top"><span>{project.projectType || "Independent project"}</span><span>{String(index + 1).padStart(2, "0")}</span></div>
        <div className="project-image-frame">
          {project.id === "thataisle" ? (
            <div className="project-phone-group">{[2, 1, 3].map((screen, index) => <div key={screen}><Image src={`/projects/that_aisle/TA_App Screens_6.5 Display_Frame_${screen}.png`} alt={index === 1 ? "That Aisle mobile app" : ""} fill sizes="(max-width: 767px) 24vw, 13vw" /></div>)}</div>
          ) : (
            <Image src={project.image} alt={`${project.title} application preview`} fill sizes="(max-width: 767px) 90vw, 44vw" className="project-preview" />
          )}
        </div>
        <span className="project-open" aria-label="View case study"><ArrowUpRight size={23} aria-hidden="true" /></span>
      </div>
      <div className="project-caption">
        <div><h3>{project.id === "thataisle" ? "That Aisle" : project.title}</h3><p>{project.description}</p></div>
        <ArrowUpRight size={22} aria-hidden="true" />
      </div>
      <div className="project-technologies">{project.techStack.slice(0, 3).map(tech => <span key={tech}>{tech}</span>)}</div>
    </Link>
  );
}
