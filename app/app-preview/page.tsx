"use client";

import Link from "next/link";

export default function AppPreview() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">Wanderly App Preview</h1>
      <p className="text-lg text-gray-600 mb-6 text-center">Check out our app on the App Store!</p>

      {/* Image avec une taille bien ajustée */}
      <div className="w-full max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <img 
          src="/images/app-screenshot.jpg" 
          alt="Wanderly App Screenshot" 
          className="w-full h-auto"
        />
      </div>

      {/* Bouton Retour */}
      <Link href="/">
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
