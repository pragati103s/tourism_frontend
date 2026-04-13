import { useLocation } from "react-router-dom";
import dummyPlan from "../data/dummyPlan";
import { useState } from "react";
import { motion } from "framer-motion";


export default function MapPage() {
//   const { state } = useLocation(); // API data
 
//   const plan = state?.plan;

const [activeIndex, setActiveIndex] = useState(0);
const [activeDay, setActiveDay] = useState(0);
const [activePlace, setActivePlace] = useState(0);

  return (
    <div className="h-screen flex bg-[#0b1c2c] text-white">

      {/* LEFT TIMELINE */}
      <div className="w-[30%] p-6 overflow-y-auto border-r border-white/20">

  <h2 className="text-2xl mb-6">Your Journey</h2>

  {dummyPlan.map((dayData, dayIndex) => (

    <div key={dayIndex} className="mb-6">

      {/* Day Header */}
      <div
        onClick={() => {
          setActiveDay(dayIndex);
          setActivePlace(0);
        }}
        className={`cursor-pointer text-lg font-bold mb-3 ${
          activeDay === dayIndex ? "text-green-400" : ""
        }`}
      >
        Day {dayData.day}
      </div>

      {/* Places (only active day open) */}
      {activeDay === dayIndex && (

        <div className="relative ml-4">

          {/* vertical line */}
          <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-green-400"></div>

          {dayData.places.map((place, i) => (
            <div
              key={i}
              onClick={() => setActivePlace(i)}
              className={`mb-6 flex ${
                i % 2 === 0 ? "justify-start ml-8" : "justify-end mr-8"
                }`}
            >
              {/* dot */}
              <div className="absolute left-0 w-3 h-3 bg-green-400 rounded-full"></div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`p-4 rounded-xl ${
                  activePlace === i
                    ? "bg-green-500/20 border border-green-400"
                    : "bg-white/10"
                }`}
              >
                <h3 className="font-bold">{place.name}</h3>
                <p className="text-sm text-gray-300">
                  {place.description}
                </p>
              </motion.div>
            </div>
          ))}

        </div>
      )}
    </div>
  ))}
</div>

      {/* RIGHT MAP */}
      <div className="w-[70%] relative">

        {/* MAP PLACEHOLDER */}
        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
          <h2 className="text-xl">Map will render here</h2>
        </div>

        {/* BOTTOM IMAGE STRIP */}
       <div className="absolute bottom-4 left-4 flex gap-3">
        {dummyPlan[activeDay].places.map((place, i) => (
            <motion.img
            key={i}
            src={place.image}
            onClick={() => setActivePlace(i)}
            whileHover={{ scale: 1.1 }}
            className={`w-28 h-20 rounded-lg cursor-pointer border-2 ${
                activePlace === i
                ? "border-green-400 scale-110"
                : "border-transparent"
            }`}
            />
        ))}
        </div>

      </div>
    </div>
  );
}