

import React from "react";
import { motion } from "framer-motion";

// 👇 import your images
import hotel from "../assets/images/hotel.jpg";
import transport from "../assets/images/transport.jpg";
import resturant from "../assets/images/resturant.jpg";
import Gangaarti from "../assets/images/Gangaarti.jpg";

// 👇 make it object instead of simple array
const services = [
  {
    title: "Near by Hotel",
    img: hotel,
    desc: "Explore thrilling destinations and exciting activities."
  },
  {
    title: "Transportation",
    img: transport,
    desc: "Unwind at peaceful beaches and calm resorts.Unwind at peaceful beaches and calm resorts"
  },
  {
    title: "Resturant",
    img: resturant,
    desc: "Discover heritage, traditions and local experiences."
  },
  {
    title: "Tourism",
    img: Gangaarti,
    desc: "Enjoy trips full of fun activities for all ages."
  }
];

export default function Services() {
  return (
    <section className="py-16 px-6">
        <div className="w-full xl:w-[70%] mx-auto">
      <h2 className="text-2xl text-white mb-8">
        Explore Based on Your Mood
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden cursor-pointer"
          >
            {/* Image */}
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-82 object-cover"
            />

            {/* Content */}
            <div className="p-4 text-center">
              <h3 className="text-white font-semibold">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm mt-2">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}