import React from "react";

export default function Header({ planRef }) {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-transparent backdrop-blur-md">
      <h1 className="text-xl font-bold text-white">MoodMap</h1>

      <nav className="hidden md:flex gap-52 font-bold text-white bg-orange-400/20 p-6 rounded-full">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">My Trip</a>
        <a href="#">Blog</a>
      </nav>

      <button 
         onClick={() => {
            planRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
      className="px-5 py-2 bg-green-500 rounded-full hover:scale-105 transition">
        Get Your Plan
      </button>
    </header>
  );
}