import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import BusinessConsultingServices from "./components/BusinessConsultingServices";
import Digitalmarketingservices from "./components/digitalmarketingservices";
import TechDevServices from "./components/technologiaclservices";
import VideoTiles from "./components/videotiles";
import Hiring from "./pages/hiring";
import Jobs from "./pages/jobs";
import Internship from "./pages/internship";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/about";
import Contact from "./pages/contact";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="mt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consulting" element={<BusinessConsultingServices />} />
          <Route path="/digital-marketing" element={<Digitalmarketingservices />} />
          <Route path="/tech-development" element={<TechDevServices />} />
          <Route path="/video-ad" element={<VideoTiles />} />
          <Route path="/hiring" element={<Hiring />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
