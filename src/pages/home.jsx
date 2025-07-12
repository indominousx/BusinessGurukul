import { useState } from "react";
import HeroSection from "../components/Hero/HeroSection";
import CoreServicesGrid from "../components/CoreServices/CoreServicesGrid";
import TrustSection from "../components/TrustSection/TrustSection";
import MoreHero from "../components/morehero";
import ClientShowcase from "../components/clientshowcase";
import ProblemSolutionSection from "../components/ProblemSolutionSection";
import Projects from "../components/projects";
import Digitalmarketingservices from "../components/digitalmarketingservices";
import YourBusiness from "../components/yourbusiness";
import Footer from "../components/footer";
import IndustriesSection from "../components/industries";
import Roadmap from "../components/roadmap";
import DigitalPresenceCTA from "../components/reachus";
import ClientTestimonials from "../components/ClientTestimonials";
import VideoAdsServices from "../components/VideoAdsServices";
import Technologyservices from "../components/technologyservices";
import Businessservices from "../components/businessservices";
  
export default function Home() {
  return (
    <div>
      <HeroSection />
      <CoreServicesGrid />
      <TrustSection />
      <ClientTestimonials />
      <MoreHero />
      <ClientShowcase />
      <ProblemSolutionSection />
      <YourBusiness />
      <VideoAdsServices />
      <Technologyservices />
      <Businessservices />
      <IndustriesSection />
      <Roadmap />
      <DigitalPresenceCTA />
      <Footer />
    </div>
  );
}
