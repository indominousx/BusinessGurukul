import BusinessConsultingServices from "../components/BusinessConsultingServices";
import TechnologiaclServices from "../components/technologiaclservices";
import VideoAdServices from "../components/videotiles";
import DigitalMarketingServices from "../components/digitalmarketingservices";
import ClientTestimonials from "../components/ClientTestimonials";
import Footer from "../components/footer";
import { useState } from "react";

const services = [
  {
    name: "Business Consulting",
    id: "business-consulting",
    component: <BusinessConsultingServices />
  },
  {
    name: "Tech Development Services",
    id: "tech-development",
    component: <TechnologiaclServices />
  },
  {
    name: "Video / Ad Services",
    id: "video-ad",
    component: <VideoAdServices />
  },
  {
    name: "Digital Marketing Services",
    id: "digital-marketing",
    component: <DigitalMarketingServices />
  },
];

export default function AllServices() {
  const [showServices, setShowServices] = useState(false);

  // Smooth scroll handler
  const handleServiceClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setShowServices(false);
  };

  return (
    <div className="w-full bg-purple-50">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 py-16 px-4 text-left flex flex-col items-start pl-4 md:pl-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
          Get More Leads.<br />
          Close More Sales.<br />
          Grow Your Business.
        </h1>
        <div className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">
          India's Trusted Marketing Partner for Mid-Segment Businesses.
        </div>
        <div className="text-lg md:text-xl text-white max-w-2xl">
          From digital dominance to operational efficiency — explore our 360° solutions across marketing, technology, media, and business consulting.
        </div>
      </div>
      <div className="w-full py-0 px-4 pl-4 md:pl-12 mt-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between max-w-6xl">
          <p className="text-lg text-gray-800 mb-8 max-w-3xl text-left md:mb-0">
            At Business Gurukull, we go beyond offering isolated services — we build integrated growth systems tailored to your business. Whether you're looking to generate high-quality leads, craft compelling video content, implement smart technology, or streamline your internal processes, our expert-led services are designed to deliver measurable results. With deep industry insight and a focus on outcomes, we empower small and mid-sized businesses to scale smarter, faster, and more profitably — all under one roof.
          </p>
          <div className="flex flex-col gap-3 ml-0 md:ml-8 mt-4 md:mt-0">
            <button
              className="bg-orange-100 text-orange-600 font-bold px-6 py-3 rounded-lg shadow hover:bg-orange-200 transition mb-2 flex items-center justify-between"
              onClick={() => setShowServices((open) => !open)}
            >
              Explore Our Services
              <svg className={`ml-2 w-5 h-5 transform transition-transform duration-200 ${showServices ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {showServices && (
              <div className="flex flex-col gap-2">
                {services.map((service) => (
                  <a
                    key={service.id}
                    href={`#${service.id}`}
                    className="bg-orange-100 text-orange-600 font-bold px-6 py-2 rounded-lg shadow hover:bg-orange-200 transition text-center"
                    style={{ minWidth: '200px' }}
                    onClick={e => handleServiceClick(e, service.id)}
                  >
                    {service.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        {services.map((service) => (
          <div key={service.id} id={service.id} className="scroll-mt-24 mt-8">
            <div className="text-gray-600 text-base mt-1 ml-2">{service.desc}</div>
            <div className="mt-4">
              {service.component}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full px-4 py-12">
        <ClientTestimonials />
      </div>
      <Footer />
    </div>
  );
}
