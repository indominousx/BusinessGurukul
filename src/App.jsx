import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import ConsultingPage from "./pages/consulting";
import DigitalMarketingPage from "./pages/digital-marketing";
import TechDevelopmentPage from "./pages/tech-development";
import VideoAdPage from "./pages/video-ad";
import Hiring from "./pages/hiring";
import Jobs from "./pages/jobs";
import Internship from "./pages/internship";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/about";
import Contact from "./pages/contact";
import FAQPage from "./pages/faq";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="mt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consulting" element={<ConsultingPage />} />
          <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/tech-development" element={<TechDevelopmentPage />} />
          <Route path="/video-ad" element={<VideoAdPage />} />
          <Route path="/hiring" element={<Hiring />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
