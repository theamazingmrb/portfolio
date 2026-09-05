import Link from "next/link";
import { ArrowDown, ArrowUpRight, Asterisk } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="studio-hero studio-container" aria-labelledby="hero-title">
      <div className="hero-eyebrow">
        <span className="eyebrow">Independent thinking. Full-stack building.</span>
        <Link href="/contact" className="availability"><span /> Open to the right opportunity</Link>
      </div>
      <div className="hero-composition">
        <div className="hero-heading">
          <h1 id="hero-title">Good code.<br />Real <span className="serif-word">impact.</span></h1>
          <div className="hero-intro">
            <span className="small-cross" aria-hidden="true">+</span>
            <p>I’m Billie Heidelberg. An engineer, builder, and educator turning complex problems into thoughtful digital experiences.</p>
          </div>
          <div className="hero-actions">
            <Link href="#work" className="studio-button">Explore my work <ArrowDown size={17} aria-hidden="true" /></Link>
            <Link href="#writing" className="text-link">Read my writing <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-coordinate art-coordinate-top">FIG. 01 — ALWAYS IN THE MAKING</div>
          <div className="orbit-grid" />
          <div className="orbit-sculpture">
            {Array.from({ length: 13 }, (_, index) => (
              <span key={index} style={{ transform: `rotate(${index * 14}deg)` }} />
            ))}
            <div className="orbit-center"><Asterisk strokeWidth={1} /></div>
          </div>
          <div className="art-caption"><span>Curiosity → craft → impact</span><span>↗</span></div>
          <div className="floating-note"><span className="note-dot" /><span>Built to make a difference.<br /><span className="note-muted">Not just to ship.</span></span></div>
        </div>
      </div>
      <div className="hero-bottom">
        <span>ENGINEER BY TRADE. CURIOUS BY DEFAULT.</span>
        <span>Web / Mobile / AI / Education</span>
        <a href="#work" aria-label="Scroll to selected work"><ArrowDown size={18} aria-hidden="true" /></a>
      </div>
    </section>
  );
}
