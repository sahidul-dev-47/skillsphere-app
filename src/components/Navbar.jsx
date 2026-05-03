"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import image from "@/assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="border-b px-2 bg-[#050B2B]">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">

        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src={image}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg text-purple-500">
            Pro Coder BD
          </h3>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-5 text-sm text-purple-700">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/courses">Courses</Link>
          </li>

          <li>
            <Link href="/my-profile">My Profile</Link>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-purple-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 text-purple-700 text-sm pb-4">
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/courses" onClick={() => setMenuOpen(false)}>
              Courses
            </Link>
          </li>

          <li>
            <Link href="/my-profile" onClick={() => setMenuOpen(false)}>
              My Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;