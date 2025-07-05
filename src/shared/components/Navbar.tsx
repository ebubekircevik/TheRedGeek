"use client";
import Link from "next/link";
import { useState } from "react";
import TheRedGeekIcon from "../icons/TheRedGeekIcon";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blogs", label: "Blogs" },
  {
    href: "/roadmap",
    label: "Roadmap",
    icon: <img src="/rocket.svg" alt="Rocket" className="w-5 h-5" />,
  },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full flex items-center justify-between py-4 px-8 border-b border-red-800 bg-red-900/95 backdrop-blur z-50 shadow-lg">
      <Link
        href="/"
        className="flex items-center gap-3 text-xl font-bold text-white hover:text-red-100 transition-colors"
      >
        <TheRedGeekIcon className="w-10 h-10" />

        <div className="flex flex-col">
          <span className="text-xl font-bold">TheRedGeek</span>
          <span className="text-xs text-red-200 font-medium -mt-1">
            Tech Blog
          </span>
        </div>
      </Link>
      <div className="hidden md:flex gap-6">
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="text-white hover:text-red-100 font-medium transition-colors flex items-center gap-2"
          >
            {link.icon}
            {link.label}
          </Link>
        ))}
      </div>
      {/* Hamburger icon */}
      <button
        className="md:hidden flex flex-col gap-1.5 group"
        onClick={() => setOpen(v => !v)}
        aria-label="Toggle Menu"
      >
        <span
          className={`block w-7 h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`}
        ></span>
        <span
          className={`block w-7 h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`block w-7 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}
        ></span>
      </button>
      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full right-4 mt-2 w-40 bg-white border border-red-200 rounded shadow-lg flex flex-col md:hidden animate-fade-in z-50">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-700 font-medium transition-colors flex items-center gap-2"
              onClick={() => setOpen(false)}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
