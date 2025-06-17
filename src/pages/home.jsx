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
import VideoTiles from "../components/videotiles";
import TechDevServices from "../components/technologiaclservices";
import BusinessConsultingServices from "../components/BusinessConsultingServices";
import ClientTestimonials from "../components/ClientTestimonials";
import LatestInsights from "../components/LatestInsights";
import ProblemSolutionSection from "../components/ProblemSolutionSection";
import SubheadlineHook from "../components/SubheadlineHook";
import YourBusinessMore from "../components/yourbusinessmore";


export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HeroSection />
      {/* <SubheadlineHook /> */}
      <MoreHero />
      <ClientShowcase />
      <ProblemSolutionSection />
      <MarketingServices />
      <VideoTiles />
      <TechDevServices />
      <BusinessConsultingServices />
      <Projects />
      <Digitalmarketingservices />
      <YourBusiness />
      <IndustriesSection />
      <YourBusinessMore />
      <Roadmap />
      <DigitalPresenceCTA />
      <WhyUs />
      <LatestInsights />
      <FAQ />
      <ClientTestimonials />
      
      <Footer />
    </div>
  );
}
