"use client";

import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function WanderlyLanding() {
  useEffect(() => {
    document.title = "Wanderly | Travel without the stress";
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen bg-[url('/hero.jpg')] bg-cover bg-center flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-xl mb-4">
          Your journey, tailored for you
        </h1>
        <p className="text-white text-lg md:text-xl mb-6 max-w-xl">
          Wanderly creates a custom itinerary powered by AI based on your preferences, dates, and travel style.
        </p>
        <div className="flex gap-4">
          <Button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-xl">Download on the App Store</Button>
          <Button className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-xl">Get it on Google Play</Button>
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
          className="bg-white shadow-xl rounded-2xl p-6"
        >
          <h3 className="text-xl font-bold mb-2">3 Days in Rome</h3>
          <ul className="list-disc pl-6 text-left">
            <li>Day 1: Colosseum, Palatine Hill, Trastevere</li>
            <li>Day 2: Vatican Museums, sunset at Pincian Hill</li>
            <li>Day 3: Local shopping and street food in Testaccio</li>
          </ul>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 text-center px-6">
        <h2 className="text-3xl font-semibold mb-10">Wanderly Travelers Love It</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Wanderly saved me hours of planning!",
            "Simple yet powerful. Loved my trip to Lisbon!",
            "I travel last-minute a lot. This app is perfect for me!",
          ].map((quote, index) => (
            <Card key={index} className="p-4">
              <CardContent>
                <p className="italic">“{quote}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 text-center bg-blue-50">
        <h2 className="text-3xl font-semibold mb-4">Ready to travel stress-free?</h2>
        <p className="mb-6">Let Wanderly handle your planning.</p>
        <div className="flex justify-center gap-4">
          <Button className="bg-blue-600 text-white px-6 py-3 rounded-xl">Download on the App Store</Button>
          <Button className="bg-green-600 text-white px-6 py-3 rounded-xl">Get it on Google Play</Button>
        </div>
      </section>
    </div>
  );
}
