import React from "react";
import worldmap from "../assets/images/61772.jpg";
import eicher from "../assets/images/eicher.png";
import haldirams from "../assets/images/haldiram.png";
import jeans from "../assets/images/Jeans-Restaurant-Supply.png";
import hero from "../assets/images/hero.png";
import tiplur from "../assets/images/tiplur.png";
import partap from "../assets/images/pratap.png";
import morphy from "../assets/images/morphy.png";
import pvr from "../assets/images/pvr.png";
import OjasVegan from "../assets/images/Ojas-Vegan.png";
import pernodrichards from "../assets/images/pernodrichard.png";
import relaxo from "../assets/images/relaxo.png";
import Resustainability from "../assets/images/Resustainability.png";
import gorwscaled from "../assets/images/grow-scaled-1.jpg";

export default function ClientShowcase() {
  const logos = [
    eicher,
    haldirams,
    jeans,
    hero,
    tiplur,
    partap,
    morphy,
    pvr,
    OjasVegan,
    pernodrichards,
    relaxo,
    Resustainability,
  ];
  return (
    <div
      className="bg-gradient-to-b from-gray-100 to-white py-16"
      style={{
        backgroundImage: `url(${worldmap})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: "0.95",
        filter: "brightness(110%)",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-black">
          Some of Our Clients
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-15 items-center justify-items-center">
          {logos.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Client Logo"
              className="max-h-12 object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center py-16">
        {/* Left Section */}
        <div className="md:w-2/3 p-10 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Be found, grow, and accelerate business digitally—extensively!
          </h2>
          <p className="text-gray-700 mb-4">
            At Business Gurukull, we are committed to empowering businesses with
            a full spectrum of growth-oriented services. Whether you're aiming
            to build a strong digital presence, produce compelling video
            content, develop cutting-edge technology, or streamline your
            business operations, our services are designed to fuel your success.
          </p>
        </div>

        {/* Right Section (Form) */}
        <div className="md:w-1/3 bg-white text-black rounded-lg shadow-2xl  m-4 md:m-6 transform hover:scale-105 transition-transform duration-300">
          <img src={gorwscaled} alt="" className="w-full h-auto rounded-2xl" />{" "}
          {/* removed rounded class */}
        </div>
      </div>
    </div>
  );
}
