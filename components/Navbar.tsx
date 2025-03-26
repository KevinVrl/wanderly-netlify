"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Ajoute un effet lorsque l'utilisateur fait défiler la page
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all ${isScrolled ? "bg-white shadow-lg text-gray-800" : "bg-transparent text-white"} backdrop-blur-md`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img src="/images/logo.png?v=2" alt="Wanderly Logo" className="h-12 w-auto" />
        </Link>

        {/* MENU CENTRÉ */}
        <ul className="hidden md:flex space-x-8 font-semibold">
          <li><Link href="#features" className="hover:text-blue-400 transition">Features</Link></li>
          <li><Link href="#testimonials" className="hover:text-blue-400 transition">Testimonials</Link></li>
          <li><Link href="#contact" className="hover:text-blue-400 transition">Contact</Link></li>
        </ul>

        {/* BOUTONS À DROITE */}
        <div className="flex space-x-4">
          {/* ✅ Bouton App Preview Stylisé */}
          <Link href="/app-preview">
            <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition transform">
              🚀 App Preview
            </button>
          </Link>

          {/* ✅ Bouton Download */}
          <Link href="/coming-soon">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition">
              Download
            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
}
