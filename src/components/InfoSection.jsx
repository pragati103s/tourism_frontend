import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useRef  } from "react";
import axios from "axios";

export default function InfoSection({ planRef }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    mood: "",
    destination: "",
    days: 1,
  });

  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:5000/api/plan", form);

    // 👉 redirect with data
    navigate("/map", { state: res.data });
  };

  return (
    <section ref={planRef}
     className="py-16 px-6 w-full xl:w-[70%] mx-auto">
      <div className="bg-white/10 p-6 rounded-xl text-white">
        <h3 className=" mb-4">Plan Your Trip</h3>
        <input
        placeholder="Destination"
        onChange={(e) =>
          setForm({ ...form, destination: e.target.value })
        }
      />

      <select
        onChange={(e) =>
          setForm({ ...form, mood: e.target.value })
        }
      >
        <option>Adventurous</option>
        <option>Relaxing</option>
      </select>

      <button onClick={handleSubmit}>
        Generate Itinerary
      </button>
      </div>
      {/* <div className="bg-white/10 p-6 rounded-xl">
        <h3 className="text-white">Chatbot</h3>
        <p className="text-gray-300">Hi! How can I help?</p>
      </div> */}
    </section>
  );
}
