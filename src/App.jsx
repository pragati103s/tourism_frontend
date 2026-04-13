import { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MoodSection from "./components/MoodSection";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";

export default function App() {
  const planRef = useRef(null);
  return (
    <div className="bg-gradient-to-b from-red-00  via-purple-700 to-black min-h-screen">
      <Header planRef={planRef} />
      <Hero />
      <MoodSection />
      <Services />
      <Gallery />
      <InfoSection planRef={planRef} />
      <Footer />
    </div>
  );
}