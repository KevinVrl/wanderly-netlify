"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    fetch("/", {
      method: "POST",
      body: formData,
    }).then(() => {
      setSubmitted(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">📩 Contact Us</h1>
      <p className="text-lg text-gray-600 mb-6 text-center max-w-2xl">
        Have a question or feedback? Fill out the form below, and we’ll get back to you as soon as possible.
      </p>

      {submitted ? (
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-green-600">✅ Message Sent!</h2>
          <p className="text-gray-700">We'll respond shortly. Redirecting to home...</p>
        </div>
      ) : (
        <form 
          method="POST" 
          data-netlify="true"
          name="contact-form"
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg"
        >
          <input type="hidden" name="form-name" value="contact-form" />

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Your Name</label>
            <input 
              type="text" 
              name="name"
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Your Email</label>
            <input 
              type="email" 
              name="email"
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea 
              name="message"
              rows={4}
              required
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg w-full hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      )}

      {/* ✅ Bouton Retour */}
      <Link href="/">
        <button className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition">
          ← Back to Home
        </button>
      </Link>
    </div>
  );
}
