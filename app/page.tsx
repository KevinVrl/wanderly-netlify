"use client";

import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

export default function WanderlyLanding() {
  useEffect(() => {
    document.title = "Wanderly | Travel without the stress";
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans">
<Navbar /> {/* ✅ On affiche la navbar ici */}

      {/* Hero Section avec fond image corrigé */}
      <section
  className="relative min-h-screen flex flex-col justify-center items-center text-center px-4"
>
  {/* ✅ Overlay sombre pour améliorer la lisibilité */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/images/hero.jpg?v=1')" }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>

  {/* ✅ Texte et boutons bien centrés */}
  <div className="relative z-10 flex flex-col items-center">
    <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl mb-4">
      Your journey, tailored for you.
    </h1>
    <p className="text-lg md:text-xl text-white mb-6 max-w-xl">
      Wanderly creates a custom itinerary powered by AI based on your preferences, dates, and travel style.
    </p>
    <div className="flex gap-4">
      <a href="/coming-soon">
        <Button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-xl">
          Download on the App Store
        </Button>
      </a>
      <a href="/coming-soon">
        <Button className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-xl">
          Get it on Google Play
        </Button>
      </a>
    </div>
  </div>
</section>

      {/* Why Wanderly */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-10">Why Wanderly?</h2>
        <div className="grid md:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
          {[
            { icon: "🧠", text: "Smart, personalized AI" },
            { icon: "📍", text: "Local or tourist-friendly activities" },
            { icon: "📆", text: "Flexible trip durations" },
            { icon: "🚆", text: "Includes transport and landmarks" },
          ].map((item, index) => (
            <Card key={index} className="p-6">
              <CardContent>
                <div className="text-4xl mb-4">{item.icon}</div>
                <p>{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Itinerary Example */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">AI Itinerary Example</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white shadow-xl rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-2">3 Days in Rome</h3>
            <ul className="list-disc pl-6 text-left">
              <li>Day 1: Colosseum, Palatine Hill, Trastevere</li>
              <li>Day 2: Vatican Museums, sunset at Pincian Hill</li>
              <li>Day 3: Local shopping and street food in Testaccio</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-100 text-center px-6">
        <h2 className="text-3xl font-semibold mb-10 text-gray-800">Wanderly Travelers Love It</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              quote: "Wanderly saved me hours of planning!",
              author: "Emma, Solo Traveler",
              image: "/images/user1.jpg",
            },
            {
              quote: "Simple yet powerful. Loved my trip to Lisbon!",
              author: "Lucas, Adventure Seeker",
              image: "/images/user2.jpg",
            },
            {
              quote: "I travel last-minute a lot. This app is perfect for me!",
              author: "Sophie, Business Traveler",
              image: "/images/user3.jpg",
            },
          ].map((testimonial, index) => (
            <div 
              key={index} 
              className="relative bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              {/* Avatar Image */}
              <div className="flex justify-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full border-4 border-blue-600 shadow-md object-cover object-top"
                />
              </div>

              {/* Quote */}
              <p className="italic text-gray-700 text-lg mt-4">“{testimonial.quote}”</p>

              {/* Author */}
              <p className="font-semibold text-blue-600 mt-4">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Final Call to Action */}
      <section className="py-20 text-center bg-blue-50">
        <h2 className="text-3xl font-semibold mb-4">Ready to travel stress-free?</h2>
        <p className="mb-6">Let Wanderly handle your planning.</p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="/coming-soon">
            <Button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-xl w-full md:w-auto">
              Download on the App Store
            </Button>
          </a>
          <a href="/coming-soon">
            <Button className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-xl w-full md:w-auto">
              Get it on Google Play
            </Button>
          </a>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {/* Colonne 1 : Logo + Slogan */}
          <div>
            <h2 className="text-2xl font-semibold text-white">Wanderly</h2>
            <p className="mt-2 text-gray-400">Your journey, tailored for you.</p>
          </div>

          {/* Colonne 2 : Liens */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Press</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Resources</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#" className="hover:text-blue-400 transition">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Travel Tips</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Destination Guide</a></li>
                <li><a href="#" className="hover:text-blue-400 transition">Community</a></li>
              </ul>
            </div>
          </div>

          {/* Colonne 3 : Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <p className="mt-2 text-gray-400">Have questions or feedback? We'd love to hear from you.</p>
            <p className="mt-2">
              <a href="mailto:hello@wanderly.com" className="text-blue-400 hover:underline">hello@wanderly.com</a>
            </p>
          </div>
        </div>

        {/* Ligne séparatrice */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© 2025 Wanderly. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
