"use client";

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Billie<span className="text-blue-400">P</span>Heidelberg
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <NavLink href="/latest">Latest</NavLink>
          <div className="relative group">
            <NavLink href="/posts">Posts</NavLink>
            <span className="ml-1">▼</span>
            <div className="absolute hidden group-hover:block bg-gray-700 p-2 rounded-md">
              <NavLink href="/posts/category1">Category 1</NavLink>
              <NavLink href="/posts/category2">Category 2</NavLink>
            </div>
          </div>
          <NavLink href="/goodies">Goodies</NavLink>
          <NavLink href="/courses">Courses</NavLink>
        </div>
        
        <div className="flex space-x-4 items-center">
          <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">
            🌙
          </button>
          <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">
            🔊
          </button>
          <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">
            📡
          </button>
        </div>

        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <NavLink href="/latest">Latest</NavLink>
          <NavLink href="/posts">Posts</NavLink>
          <NavLink href="/goodies">Goodies</NavLink>
          <NavLink href="/courses">Courses</NavLink>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="hover:text-blue-400 transition-colors">
    {children}
  </Link>
);

export default Navbar;