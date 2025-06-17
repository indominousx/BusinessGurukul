import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import HorizontalRoadmap from "../components/horizontalroadmap";
const bgImage = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"; // Placeholder

export default function About() {
  return (
    <div className="bg-purple-50 min-h-screen w-full">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-purple-700 to-orange-400 py-16 px-4 md:px-16 flex items-center" style={{minHeight: '350px'}}>
        <div className="max-w-3xl text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">About Us</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Empowering Businesses Globally with Smart Marketing, Technology, and Consulting Solutions
          </p>
          <Link
            to="/contact"
            style={{ color: 'white' }}
            className="inline-block bg-orange-500 hover:bg-orange-600 font-bold px-8 py-4 rounded-full shadow transition text-lg"
          >
            Let's Collaborate
          </Link>
        </div>
      </div>

        {/* Vision Section */}
        <section className="w-full py-12 px-4 md:px-12 bg-purple-50">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Our Vision</h2>
        <p className="text-lg text-gray-800">
          To be the most trusted partner for businesses seeking growth, innovation, and digital transformation.<br /><br />
          We envision a world where every business, regardless of size or industry, can harness the power of technology and smart marketing to achieve sustainable success. Our vision is to lead the way in digital transformation by providing innovative solutions, fostering a culture of continuous learning, and building long-lasting relationships with our clients. We strive to empower organizations to adapt, evolve, and thrive in an ever-changing digital landscape, making a positive impact on communities and industries worldwide.
        </p>
      </section>

        {/* Testimonial/Quote with Background Image */}
      <div
        className="w-full flex items-center justify-start py-20 px-4 md:px-16 relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '350px',
        }}
      >
        <div className="bg-white bg-opacity-95 rounded-2xl shadow-2xl p-10 max-w-2xl ml-0 md:ml-12">
          <p className="text-xl text-gray-900 mb-6">
            Our passionate and pragmatic approach has enabled our clients to digitally transform their businesses with cutting-edge technology. Our journey since conception has followed our vision to collaborate with companies worldwide, whilst helping them experience the strength of technology in leading the evolution of the industrial landscape.
          </p>
          <p className="text-xl font-bold text-orange-500 mt-4">
            — Your Name, CEO, Business Gurukull
          </p>
        </div>
      </div>

       {/* Testimonial-style Leadership Block */}
<div className="bg-black w-full text-white py-16 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between">
  <div className="flex-1">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
      Over the last two decades,<br />
      we have helped our clients ship products for multiple platforms
    </h2>
    <p className="text-lg mb-4">
      "Business Gurukull helped us dramatically improve our operations by integrating smart
      onboarding and automation strategies tailored for our logistics platform — one of the fastest-growing networks in India.
    </p>
    <p className="text-lg mb-4">
      Their DIY onboarding system enabled faster expansion, seamless user experience, and quicker customer activation. We were able to scale to new markets with confidence and clarity."
    </p>
    <p className="text-lg font-semibold text-orange-400">
      Head Name,<br />
      Position Name , Company Name 
    </p>
  </div>
  <div className="mt-8 md:mt-0 md:ml-12 flex-shrink-0">
    <img
      src="https://images.unsplash.com/photo-1603415526960-f8fbd376b3c1?auto=format&fit=crop&w=300&q=80"
      alt="Sangram Hota"
      className="rounded-xl w-64 h-64 object-cover"
    />
  </div>
</div>


      {/* Mission Section */}
      <section className="w-full py-12 px-4 md:px-12 bg-orange-50">
        <h2 className="text-4xl font-bold text-orange-500 mb-4">Our Mission</h2>
        <p className="text-2xl text-gray-800">
          To empower organizations with cutting-edge marketing, technology, and business consulting services that create real, sustainable impact.
        </p>
      </section>

      {/* Horizontal Roadmap Section */}
      <HorizontalRoadmap />
 {/* What We Do – Core Services Section */}
 <section className="w-full py-16 px-4 md:px-16 bg-white flex flex-col items-center" id="core-services">
        <h2 className="text-4xl font-extrabold text-purple-700 mb-6 text-center">What We Do – Core Services</h2>
        <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl">
          We help you grow with a full spectrum of digital, creative, technology, and consulting solutions tailored for your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-10">
          {/* Digital Marketing */}
          <div className="flex flex-col items-center bg-purple-50 rounded-2xl p-8 shadow">
            <div className="text-4xl mb-2">🚀</div>
            <h3 className="text-2xl font-bold text-purple-700 mb-2">Digital Marketing</h3>
            <p className="text-gray-700 mb-4 text-center">SEO, Social Media, Paid Ads, and more to boost your online presence and leads.</p>
            <a href="/digital-marketing" 
            style={{ color: 'white' }}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-full transition">Explore Digital Marketing</a>
          </div>
          {/* Video & Ad Creation */}
          <div className="flex flex-col items-center bg-purple-50 rounded-2xl p-8 shadow">
            <div className="text-4xl mb-2">🎥</div>
            <h3 className="text-2xl font-bold text-purple-700 mb-2">Video & Ad Creation</h3>
            <p className="text-gray-700 mb-4 text-center">Engaging videos and ad creatives to tell your brand story and drive conversions.</p>
            <a href="/video-ad" 
            style={{ color: 'white' }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-full transition">Explore Video & Ad Creation</a>
          </div>
          {/* Technology Development */}
          <div className="flex flex-col items-center bg-purple-50 rounded-2xl p-8 shadow">
            <div className="text-4xl mb-2">🛠️</div>
            <h3 className="text-2xl font-bold text-purple-700 mb-2">Technology Development</h3>
            <p className="text-gray-700 mb-4 text-center">Websites, apps, automation, and custom tech to power your business growth.</p>
            <a href="/tech-development" 
            style={{ color: 'white' }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-full transition">Explore Technology Development</a>
          </div>
          {/* Business Consulting */}
          <div className="flex flex-col items-center bg-purple-50 rounded-2xl p-8 shadow">
            <div className="text-4xl mb-2">🎯</div>
            <h3 className="text-2xl font-bold text-purple-700 mb-2">Business Consulting</h3>
            <p className="text-gray-700 mb-4 text-center">Strategy, operations, and growth consulting to unlock your business potential.</p>
            <a href="/consulting" 
            style={{ color: 'white' }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-full transition">Explore Business Consulting</a>
          </div>
        </div>
      </section>

      {/* Company Stats Section */}
      <section className="w-full py-16 px-4 md:px-16 bg-white flex flex-col items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-6xl text-center">
          {/* Years in Market */}
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-4 text-black">📅</span>
            <span className="text-4xl font-extrabold mb-2 text-black">21+</span>
            <span className="text-lg text-gray-700">Years in Market</span>
          </div>
          {/* Tech Professionals */}
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-4 text-black">👥</span>
            <span className="text-4xl font-extrabold mb-2 text-black">400+</span>
            <span className="text-lg text-gray-700">Tech Professionals</span>
          </div>
          {/* Projects Delivered */}
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-4 text-black">🚀</span>
            <span className="text-4xl font-extrabold mb-2 text-black">1500+</span>
            <span className="text-lg text-gray-700">Projects Delivered</span>
          </div>
          {/* Domains Served */}
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-4 text-black">🤝</span>
            <span className="text-4xl font-extrabold mb-2 text-black">20+</span>
            <span className="text-lg text-gray-700">Domains Served</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 