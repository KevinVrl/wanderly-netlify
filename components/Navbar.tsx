"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* ✅ Logo */}
        <a href="#" className="flex items-center">
        <img src="/images/logo.png" alt="Wanderly Logo" className="h-10 w-auto" />
        </a>

        {/* ✅ Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-blue-600 transition">Home</a>
          <a href="#why" className="hover:text-blue-600 transition">Why Wanderly?</a>
          <a href="#itinerary" className="hover:text-blue-600 transition">Itinerary</a>
          <a href="#testimonials" className="hover:text-blue-600 transition">Testimonials</a>
          <a href="#download" className="hover:text-blue-600 transition">Download</a>
        </div>

        {/* ✅ Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-full left-0 w-full text-center">
          <a href="#hero" className="block py-3 border-b" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#why" className="block py-3 border-b" onClick={() => setIsOpen(false)}>Why Wanderly?</a>
          <a href="#itinerary" className="block py-3 border-b" onClick={() => setIsOpen(false)}>Itinerary</a>
          <a href="#testimonials" className="block py-3 border-b" onClick={() => setIsOpen(false)}>Testimonials</a>
          <a href="#download" className="block py-3" onClick={() => setIsOpen(false)}>Download</a>
        </div>
      )}
    </nav>
  );
}
