"use client";

import {
  Bars3Icon,
  DocumentTextIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#About" },
  { label: "Work", href: "#Experiences" },
  { label: "Skills", href: "#Skills" },
  { label: "Contact", href: "#Contact" },
];

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShadow(window.scrollY > 12);

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        shadow
          ? "border-b border-[#161513]/10 bg-[#f7f4ee]/88 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 text-[#161513] sm:px-10 lg:px-20">
        <a
          href="#home"
          aria-label="Alvin home"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#161513]/10 bg-white/75 shadow-sm transition hover:-translate-y-0.5 hover:border-[#315c50] focus:outline-none focus:ring-4 focus:ring-[#315c50]/20"
        >
          <Image src="/Alvin.png" alt="" width={22} height={22} priority />
        </a>

        <button
          type="button"
          onClick={() => setIsMenuOpen((value) => !value)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#161513]/10 bg-white/75 shadow-sm transition hover:border-[#315c50] focus:outline-none focus:ring-4 focus:ring-[#315c50]/20 sm:hidden"
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </button>

        <div
          className={`absolute left-4 right-4 top-24 flex-col gap-2 rounded-3xl border border-[#161513]/10 bg-[#fffaf0]/95 p-3 shadow-xl shadow-black/10 backdrop-blur-xl sm:static sm:flex sm:flex-row sm:items-center sm:gap-1 sm:rounded-full sm:bg-white/55 sm:p-1 sm:shadow-sm ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="rounded-full px-4 py-3 text-sm font-bold text-[#4c4943] transition hover:bg-[#315c50] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#315c50]/20 sm:py-2"
            >
              {item.label}
            </a>
          ))}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1vnSzIhsd2XeyyROGCJXFGMGDVBUhdUD7/view?usp=sharing"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#161513] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#315c50] focus:outline-none focus:ring-4 focus:ring-[#315c50]/20 sm:py-2"
          >
            Resume
            <DocumentTextIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
