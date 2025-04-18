import React from "react";
import jeans from "../assets/images/Jeans-Restaurant-Supply@2x.png";
import ojas from "../assets/images/Ojas-Vegan@2x.png";
import Union from "../assets/images/Union-Home-Furniture@2x.png";
import building from "../assets/images/Building-Digital-Presence-for-the-Canadian-Food-Brand-Ojas-Vegan@2x.png";
import Search from "../assets/images/Search-Engine-Optimization-of-a-Leading-Restaurant-Supply-Store@2x.png";
import SEO from "../assets/images/SEO-for-USA-Based-Home-Decor-Brand-to-Secure-Revenue-Drive-Conversion@2x.png";

export default function Projects() {
  return (
    <section className="bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-white text-center mb-12">
          Explore The Projects of Our Digital Marketing Agency
        </h2>
      </div>

      {/* Full width scrollable box */}
      <div className="rounded-2xl p-8 h-[500px] overflow-y-auto space-y-10 w-full px-6 md:px-16 shadow-lg bg-white/10 backdrop-blur-md">
        {/* <!-- Project 1 --> */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* <!-- Left --> */}
          <div className="md:w-1/2">
            <img
              src={Union}
              alt="Logo 1"
              className="h-12 mb-6 bg-white rounded-2xl shadow-md"
            />
            <h3 className="text-2xl font-bold text-white mb-4">
              SEO for USA-Based Home Decor Brand to Secure Revenue & Drive
              Conversion
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Union Home Furniture brings you the latest styles in furniture,
              priced right, so you can create spaces that reflect your
              personality. Built on the values of modern design with a
              contemporary touch, Union Home Furniture offers home furnishings
              for your bedroom, living room, and office spaces at affordable
              pricing. They have a strong offline presence and were looking to
              improve their digital presence with SEO. Business Gurukull was the
              perfect digital marketing service provider for their business
              expansion on the digital front.
            </p>
            <a
              href="#"
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full font-semibold transition duration-300"
            >
              View Case Study
            </a>
          </div>

          {/* <!-- Right --> */}
          <div className="md:w-1/2">
            <img
              src={SEO}
              alt="Project 1"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* <!-- Project 2 --> */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* <!-- Left --> */}
          <div className="md:w-1/2">
            <img
              src={jeans}
              alt="Logo 2"
              className="h-12 mb-6 bg-white rounded-2xl shadow-md"
            />
            <h3 className="text-2xl font-bold text-white mb-4">
              Search Engine Optimization of a Leading Restaurant Supply Store
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Jean’s Restaurant Supply is the leading restaurant supply store in
              the USA. It distributes a wide array of food service and
              industrial products, including equipment, foodstuffs, and
              industrial packaging. The client was looking to grow its website
              organic traffic and conversion rate. Business Gurukull partnered
              with them to achieve their business growth goals.
            </p>
            <a
              href="#"
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full font-semibold transition duration-300"
            >
              View Case Study
            </a>
          </div>

          {/* <!-- Right --> */}
          <div className="md:w-1/2">
            <img
              src={Search}
              alt="Project 2"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* <!-- Additional Projects --> */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* <!-- Left --> */}
          <div className="md:w-1/2">
            <img
              src={ojas}
              alt="Logo 3"
              className="h-12 mb-6 bg-white rounded-2xl shadow-md"
            />
            <h3 className="text-2xl font-bold text-white mb-4">
              Building Digital Presence for the Canadian Food Brand Ojas Vegan
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Ojas Vegan is proud to present their unique feel-good plant-based
              products made with Non-GMO Project Verified ingredients. The brand
              wanted to change the way people think of healthy snacks. We
              revamped their website to meet current market trends and target
              Canadian consumers effectively.
            </p>
            <a
              href="#"
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full font-semibold transition duration-300"
            >
              View Case Study
            </a>
          </div>

          {/* <!-- Right --> */}
          <div className="md:w-1/2">
            <img
              src={building}
              alt="Project 3"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
