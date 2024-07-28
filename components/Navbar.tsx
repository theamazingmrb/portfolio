"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Billie<span className="text-blue-400">P</span>Heidelberg
        </Link>

        <div className="hidden md:flex space-x-6">
          <NavLink href="/">Home</NavLink>
          {/* <NavLink href="/notes">Notes</NavLink>
          <NavLink href="/articles">Articles</NavLink> */}
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/about">About Me</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>

        <button
          className="md:hidden w-10 h-10 relative focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-8 h-1 bg-white absolute left-1 transition-all duration-300 ease-in-out ${
              isOpen ? "top-4 rotate-45" : "top-3"
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-white absolute left-1 top-5 transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-8 h-1 bg-white absolute left-1 transition-all duration-300 ease-in-out ${
              isOpen ? "top-4 -rotate-45" : "top-7"
            }`}
          ></span>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/notes">Notes</NavLink>
          <NavLink href="/articles">Articles</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/about">About Me</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href} className="block hover:text-blue-400 transition-colors">
    {children}
  </Link>
);

export default Navbar;
