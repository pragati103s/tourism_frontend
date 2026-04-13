import React, { useEffect, useState , useRef} from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import u1 from "../assets/images/1.jpg";
import u2 from "../assets/images/2.jpg";
import u3 from "../assets/images/3.jpg";
import u4 from "../assets/images/4.jpg";
import Ayodhya from "../assets/images/Ayodhya.jpg";
import banaras from "../assets/images/banaras.jpg";
import fest2 from "../assets/images/fest2.jpg";
import festival from "../assets/images/festival.jpg";
import food1 from "../assets/images/food1.jpg";
import food2 from "../assets/images/food2.jpg";
import food3 from "../assets/images/food3.jpg";
import food4 from "../assets/images/food4.jpg";
import imambara from "../assets/images/imambara.jpg";
import Mathura from "../assets/images/Mathura.jpg";
import tajmahal from "../assets/images/tajmahal.jpg";

const images = [
  { src: u1, title: "Explore" },
  { src: u2, title: "Nature" },
  { src: u3, title: "Adventure" },
  { src: u4, title: "Travel" },
  { src: Ayodhya, title: "Ayodhya" },
  { src: banaras, title: "Banaras" },
  { src: fest2, title: "Festival" },
  { src: festival, title: "Culture" },
  { src: food1, title: "Food" },
  { src: food2, title: "Cuisine" },
  { src: food3, title: "Street Food" },
  { src: food4, title: "Delights" },
  { src: imambara, title: "Imambara" },
  { src: Mathura, title: "Mathura" },
  { src: tajmahal, title: "Taj Mahal" }
];
export default function Gallery() {
  const sliderRef = useRef(null);

  // continuous infinite scroll
  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrame;

    const scroll = () => {
      if (slider) {
        slider.scrollLeft += 1.5; // 🔥 speed increase here

        // infinite loop reset
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // duplicate images for seamless loop
  const loopImages = [...images, ...images];

  return (
    <section>
      {/* 🔴 Top Red Section */}
      <div className="bg-yellow-500 py-16 text-center">
        <h2 className="text-5xl font-bold text-white">
          Gallery
        </h2>
        {/* <p className="text-white mt-2">
          of timeless tradition
        </p> */}
      </div>

      {/* ⚪ Bottom Light Section */}
      <div className=" py-16 bg-cyan-50 inset-shadow-sm">
        <div className="w-full xl:w-[90%] mx-auto px-6">
          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-hidden"
          >
            {loopImages.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="min-w-[250px] my-5 bg-white rounded-xl overflow-hidden shadow-xl"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-red-500 font-semibold">
                    Category
                  </p>
                  <h3 className="text-lg font-bold">
                    {img.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}