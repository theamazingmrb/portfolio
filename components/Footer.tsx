import Link from "next/link";
import { ArrowUpRight, Asterisk } from "lucide-react";

export default function Footer() {
  return (
    <footer className="studio-footer">
      <div className="studio-container">
        {/* About */}
        <div className="footer-invitation">
          <div><span className="eyebrow">Have something in mind?</span><h2>Let’s make<br /><span className="serif-word">it matter.</span><Asterisk aria-hidden="true" /></h2></div>
          <div className="footer-contact"><p>A product to build. A problem to solve.<br />A conversation worth having.</p><Link href="/contact" className="studio-button">Let’s talk <ArrowUpRight size={19} aria-hidden="true" /></Link><a href="mailto:billie@houseofheidelberg.com">billie@houseofheidelberg.com</a></div>
        </div>
        <div className="footer-links">
          <Link href="/" className="brand-lockup"><span className="brand-symbol">bh<span>.</span></span><span>Billie Heidelberg<br /><span className="brand-subtitle">Engineer. Builder. Educator.</span></span></Link>
          {/* Quick Links */}
          <nav aria-label="Footer"><Link href="/projects">Work</Link><Link href="/blog">Writing</Link><Link href="/about">About</Link></nav>
          {/* Contact */}
          <div><a href="https://github.com/theamazingmrb" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a><a href="https://www.linkedin.com/in/bheidelberg/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a><a href="/documents/Billie_Heidelberg_Resume_Senior_Full_Stack_Engineer.pdf" target="_blank" rel="noopener noreferrer">Résumé <ArrowUpRight size={14} aria-hidden="true" /></a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Billie P Heidelberg</span><span>Built with intention. Always a work in progress.</span><div><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div>
      </div>
    </footer>
  );
}
