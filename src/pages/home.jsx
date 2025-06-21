import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";
import HeroSection from "../components/hero_section";
import MoreHero from "../components/morehero";
import ClientShowcase from "../components/clientshowcase";
import MarketingServices from "../components/marketingServices";
import Projects from "../components/projects";
import Digitalmarketingservices from "../components/digitalmarketingservices";
import YourBusiness from "../components/yourbusiness";
import Footer from "../components/footer";
import IndustriesSection from "../components/industries";
import Roadmap from "../components/roadmap";
import FAQ from "../components/faq";
import WhyUs from "../components/whyus";
import DigitalPresenceCTA from "../components/reachus";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HeroSection />
      <MoreHero />
      <ClientShowcase />
      <MarketingServices />
      <Projects />
      <Digitalmarketingservices />
      <YourBusiness />
      <IndustriesSection />
      <Roadmap />
      <DigitalPresenceCTA />
      <WhyUs />
      <FAQ />
      <Footer />
    </div>
  );
}
