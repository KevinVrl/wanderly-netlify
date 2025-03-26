"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all ${isScrolled ? "bg-white shadow-lg text-gray-800" : "bg-transparent text-white"} backdrop-blur-md`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img src="/images/logo.png?v=2" alt="Wanderly Logo" className="h-12 w-auto" />
        </Link>

        {/* ✅ MENU CENTRÉ - CACHÉ SUR MOBILE */}
        <ul className="hidden md:flex space-x-8 font-semibold">
          <li><Link href="#features" className="hover:text-blue-400 transition">Features</Link></li>
          <li><Link href="#testimonials" className="hover:text-blue-400 transition">Testimonials</Link></li>
          <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
        </ul>

        {/* ✅ Bouton App Preview toujours visible */}
        <div className="hidden md:block">
          <Link href="/app-preview">
            <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition transform">
              🚀 App Preview
            </button>
          </Link>
        </div>

        {/* ✅ MENU BURGER SUR MOBILE */}
        <button className="md:hidden text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* ✅ MENU OUVERT SUR MOBILE */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
          <ul className="flex flex-col text-center py-4 space-y-4 text-gray-800 font-semibold">
            <li><Link href="#features" className="hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Features</Link></li>
            <li><Link href="#testimonials" className="hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Testimonials</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400 transition" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            <li>
              <Link href="/app-preview">
                <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
                  🚀 App Preview
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
