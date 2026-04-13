import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center text-white px-4">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Plan Your Perfect Trip by Mood
      </motion.h1>
      <p className="mt-4 max-w-xl text-gray-300">
        Discover, Explore, Experience your itinerary in 3D.
      </p>
      <button className="mt-6 px-6 py-3 bg-green-500 rounded-full hover:scale-105 transition">
        Start Your Adventure
      </button>
    </section>
  );
}