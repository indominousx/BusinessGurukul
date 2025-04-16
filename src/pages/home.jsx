import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";
import HeroSection from "../components/hero_section";
import MoreHero from "../components/morehero";
import ClientShowcase from "../components/clientshowcase";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HeroSection />
      <MoreHero />
      <ClientShowcase />
    </div>
  );
}
