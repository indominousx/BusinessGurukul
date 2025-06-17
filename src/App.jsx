import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import ServicesOverview from "./pages/ServicesOverview";
import BusinessConsultingServices from "./components/BusinessConsultingServices";
import TechnologiaclServices from "./components/technologiaclservices";
import VideoAdServices from "./components/videotiles";
import DigitalMarketingServices from "./components/digitalmarketingservices";
import AllServices from "./pages/AllServices";
import Hiring from "./pages/hiring";
import Jobs from "./pages/jobs";
import Internship from "./pages/internship";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="mt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/services/business-consulting" element={<BusinessConsultingServices />} />
          <Route path="/services/tech-development" element={<TechnologiaclServices />} />
          <Route path="/services/video-ad" element={<VideoAdServices />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingServices />} />
          <Route path="/all-services" element={<AllServices />} />
          <Route path="/hiring" element={<Hiring />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/internship" element={<Internship />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
