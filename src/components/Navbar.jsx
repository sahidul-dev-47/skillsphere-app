"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import image from "@/assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="border-b px-4 bg-[#050B2B] sticky top-0 z-50">
      <nav className="relative flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        
        <div className="flex gap-2 items-center z-10">
          <Image
            src={image}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg text-purple-500">Pro Coder BD</h3>
        </div>

        <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
          <ul className="flex items-center gap-8 text-sm font-medium text-white pointer-events-auto">
            <li className="hover:text-purple-500 transition-colors">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-purple-500 transition-colors">
              <Link href="/courses">Courses</Link>
            </li>
            <li className="hover:text-purple-500 transition-colors">
              <Link href="/my-profile">My Profile</Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center gap-6 z-10">
          <Link 
            href="/signin" 
            className="text-sm bg-purple-700 px-5 py-2 rounded-full text-white font-semibold hover:bg-purple-900 transition-all"
          >
            Sign In
          </Link>
          <Link 
            href="/register" 
            className="bg-purple-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-purple-700 transition-all"
          >
            Register
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-purple-500 z-10"
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-5 text-white text-base px-2">
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/courses" onClick={() => setMenuOpen(false)}>Courses</Link></li>
          <li><Link href="/my-profile" onClick={() => setMenuOpen(false)}>My Profile</Link></li>
          <div className="pt-4 flex flex-col gap-6 border-t border-purple-900/50">
            <li><Link href="/signin" className="text-sm bg-purple-700 px-5 py-2 rounded-full text-white font-semibold hover:bg-purple-900 transition-all" onClick={() => setMenuOpen(false)}>Sign In</Link></li>
            <li>
              <Link 
                href="/register" 
                className="text-sm bg-purple-700 px-5 py-2 rounded-full text-white font-semibold hover:bg-purple-900 transition-all" 
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;