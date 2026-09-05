"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollProgress from "@/components/ScrollProgress";

const links = [{ href: "/projects", label: "Work" }, { href: "/blog", label: "Writing" }, { href: "/about", label: "About" }];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstFocusableRef = useRef<HTMLAnchorElement>(null);
  const lastFocusableRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => { if (desktop.matches) setIsOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Focus trap for mobile menu
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === "Escape") {
      setIsOpen(false);
      menuButtonRef.current?.focus();
    }
    if (e.key === "Tab") {
      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstFocusableRef.current) {
          e.preventDefault();
          menuButtonRef.current?.focus();
        } else if (document.activeElement === menuButtonRef.current) {
          e.preventDefault();
          lastFocusableRef.current?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastFocusableRef.current) {
          e.preventDefault();
          menuButtonRef.current?.focus();
        } else if (document.activeElement === menuButtonRef.current) {
          e.preventDefault();
          firstFocusableRef.current?.focus();
        }
      }
    }
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Focus first item when menu opens
  useEffect(() => {
    if (isOpen) firstFocusableRef.current?.focus();
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <ScrollProgress />
      <nav className={`studio-nav ${scrolled ? "is-scrolled" : ""}`} aria-label="Main navigation">
        <div className="studio-container nav-inner">
          <Link href="/" className="brand-lockup" aria-label="Billie Heidelberg home"><span className="brand-symbol">bh<span>.</span></span><span>Billie Heidelberg<span className="brand-subtitle nav-brand-subtitle">Engineer. Builder. Educator.</span></span></Link>
          <div className="desktop-nav">{links.map(link => <Link key={link.href} href={link.href} aria-current={isActive(link.href) ? "page" : undefined}>{link.label}</Link>)}<span className="nav-divider" /></div>
          <div className="nav-controls"><ThemeToggle /><Link href="/contact" className="nav-contact">Let’s talk <ArrowUpRight size={16} aria-hidden="true" /></Link><button ref={menuButtonRef} onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} aria-controls="mobile-menu">{isOpen ? <X size={23} /> : <Menu size={23} />}</button></div>
        </div>
        {/* Mobile menu with slide animation */}
        <div id="mobile-menu" className="studio-mobile-menu" hidden={!isOpen}>
          <div className="studio-container" onClick={() => setIsOpen(false)}>
            <Link href="/" ref={firstFocusableRef}>Home</Link>
            {links.map(link => <Link key={link.href} href={link.href} aria-current={isActive(link.href) ? "page" : undefined}>{link.label}<ArrowUpRight size={24} aria-hidden="true" /></Link>)}
            <Link href="/contact">Let’s talk <ArrowUpRight size={24} aria-hidden="true" /></Link>
            <div className="mobile-socials"><a href="https://github.com/theamazingmrb" target="_blank" rel="noopener noreferrer">GitHub</a><a ref={lastFocusableRef} href="https://www.linkedin.com/in/bheidelberg/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
