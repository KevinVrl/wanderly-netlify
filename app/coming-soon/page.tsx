"use client";

import { useState } from "react";
import Link from "next/link";

export default function ComingSoon() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-4">🚀 Coming Soon</h1>
      <p className="text-lg mb-6 max-w-lg">
        Be the first to know when Wanderly launches! Enter your email below.
      </p>

      {/* ✅ Formulaire Netlify (Correction) */}
      <form 
        method="POST" 
        data-netlify="true"
        name="subscribe-form"
        className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4"
      >
        {/* ✅ Champ caché obligatoire pour Netlify */}
        <input type="hidden" name="form-name" value="subscribe-form" />

        <input 
          type="email" 
          name="email"
          placeholder="Enter your email" 
          required
          className="p-3 rounded-md border border-gray-300 focus:outline-none text-gray-800"
        />
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition"
        >
          Notify Me
        </button>
      </form>

      {/* ✅ Bouton Retour */}
      <Link href="/">
        <button className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition">
          ← Back to Home
        </button>
      </Link>

    </div>
  );
}
