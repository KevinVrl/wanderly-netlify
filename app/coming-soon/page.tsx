"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      {/* ✅ Titre */}
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Coming Soon 🚀</h1>
      <p className="text-lg md:text-xl mb-6 max-w-xl">
        Wanderly will soon be available on the App Store and Google Play. Be the first to know when we launch!
      </p>

      {/* ✅ Formulaire d'inscription */}
      {!submitted ? (
        <form onSubmit={handleSubmit} className="bg-white text-gray-800 p-4 md:p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-3 rounded-md border border-gray-300 focus:outline-none flex-grow"
          />
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md w-full md:w-auto">
            Notify Me
          </button>
        </form>
      ) : (
        <p className="text-lg font-semibold mt-4">✅ Thank you! We'll notify you when Wanderly is available.</p>
      )}

      {/* ✅ Retour vers la page d'accueil */}
      <div className="mt-6">
        <a href="/" className="text-white underline">Go back to homepage</a>
      </div>
    </div>
  );
}
