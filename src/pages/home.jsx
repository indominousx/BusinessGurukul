import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";
import HeroSection from "../components/hero_section";
import MoreHero from "../components/morehero";
import ClientShowcase from "../components/clientshowcase";
import ProblemSolutionSection from "../components/ProblemSolutionSection";
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
import ServiceCardsGrid from "../components/ServiceCardsGrid";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HeroSection />
      <MoreHero />
      <ClientShowcase />
      <ProblemSolutionSection />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          360° Degree Digital Marketing Services for Companies of All Kinds
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          As your value-driven digital marketing agency in India, we are here to
          meet all your brand's advertising needs with our expert-level
          services. Our extensive services for your digital marketing website
          will allow you to grow your business immensely.
        </p>
        <ServiceCardsGrid />
      </div>
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
