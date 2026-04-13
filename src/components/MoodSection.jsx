import React from "react";
import { motion } from "framer-motion";

// 👇 import your images
import adventure from "../assets/images/adventure.jpg";
import relax from "../assets/images/relax.jpg";
import cultural from "../assets/images/cultural.jpg";
import family from "../assets/images/family.jpg";

// 👇 make it object instead of simple array
const moods = [
  {
    title: "Adventurous",
    img: adventure,
    desc: "Explore thrilling destinations and exciting activities."
  },
  {
    title: "Relaxing",
    img: relax,
    desc: "Unwind at peaceful beaches and calm resorts.Unwind at peaceful beaches and calm resorts"
  },
  {
    title: "Cultural",
    img: cultural,
    desc: "Discover heritage, traditions and local experiences."
  },
  {
    title: "Family Fun",
    img: family,
    desc: "Enjoy trips full of fun activities for all ages."
  }
];

export default function MoodSection() {
  return (
    <section className="py-16 px-6 bg-white">
        <div className="w-full xl:w-[70%] mx-auto">
      <h2 className="text-4xl font-bold text-indigo-800 mb-8">
        Explore Based on Your Mood
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {moods.map((mood, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <img
              src={mood.img}
              alt={mood.title}
              className="w-full h-82 object-cover"
            />

            {/* Content */}
            <div className="p-4 text-center">
              <h3 className="text-gray-600 font-semibold">
                {mood.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {mood.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}