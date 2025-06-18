import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import HorizontalRoadmap from "../components/horizontalroadmap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import MoreHero from "../components/morehero";
import ClientShowcase from "../components/clientshowcase";
import {
  Users,
  Settings,
  Layers,
  MessageSquare,
  BarChart3,
  Handshake
} from "lucide-react";

const bgImage = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"; // Placeholder

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

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
        <section className="w-full py-20 px-6 sm:px-12 bg-white">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
    <div className="md:w-1/2">
      <h3 className="text-3xl text-gray-800 font-medium mb-3">Our Vision</h3>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-orange-600 leading-tight">
        To become a trusted partner for businesses worldwide,
        recognized for excellence, innovation, and the impact we create.
      </h2>
    </div>
    <div className="md:w-1/2">
      <p className="text-lg text-gray-700 mt-2">
      At Business Gurukull, we are dedicated to empowering businesses by providing a
comprehensive suite of services designed to foster growth, innovation, and operational
excellence. Founded in 2019 and headquartered in Pune, Maharashtra, our privately held
company has grown into a team of 11-50 professionals, each bringing a wealth of experience in
business consulting, project management, marketing management, sales management, system
and process development, and technology development.

      </p>
    </div>
  </div>
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
        <p className="text-2xl font-bold text-gray-800">
        Empowering businesses to achieve sustainable growth through innovation, expertise, and personalized service.
        </p>
        <p className="py-4 text-lg font-semibold text-gray-800">
        We are committed to delivering measurable results, building long-term partnerships,
        and driving positive change across industries.
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


      {/* Why Choose Us Section */}
      <section className="w-full py-16 px-4 md:px-16 bg-blue-900 flex flex-col items-center">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Core Values Heading + Mission Paragraph */}
          <div>
            <h2 className="text-4xl font-extrabold text-orange-400 mb-8 text-left">Core Values</h2>
            <p className="text-white text-base md:text-lg leading-relaxed mb-0">
              Our mission is to serve as a catalyst for transformation, guiding businesses through the complexities of the modern market landscape. We understand that each organization faces unique challenges and opportunities; therefore, we tailor our strategies and solutions to meet the specific needs of our clients. Our approach combines deep industry knowledge with innovative methodologies to deliver results that are not only effective but also sustainable.<br /><br />
              At Business Gurukull, we believe in building lasting partnerships. Our commitment to integrity, excellence, and customer-centricity drives us to go beyond conventional consulting. We immerse ourselves in our clients' businesses, working collaboratively to identify opportunities, overcome challenges, and implement strategies that lead to measurable success.<br /><br />
              As a forward-thinking organization, we stay abreast of emerging trends and technologies, ensuring that our clients are equipped with the tools and insights necessary to stay competitive in a rapidly evolving marketplace. Whether it's through enhancing digital presence, streamlining operations, or developing innovative products and services, Business Gurukull is dedicated to helping businesses achieve their full potential.
            </p>
          </div>
          {/* Right: Perks List */}
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <Users className="w-8 h-8 text-orange-400 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Experienced Team</h3>
                <p className="text-white/80">Our experts bring years of hands-on experience across industries and technologies.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Settings className="w-8 h-8 text-orange-400 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Customized Solutions</h3>
                <p className="text-white/80">We tailor every solution to your unique business needs and goals.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Layers className="w-8 h-8 text-orange-400 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">End-to-End Services</h3>
                <p className="text-white/80">From strategy to execution, we cover the full spectrum for your success.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MessageSquare className="w-8 h-8 text-orange-400 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Transparent Communication</h3>
                <p className="text-white/80">We keep you informed at every step with clear, honest updates.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <BarChart3 className="w-8 h-8 text-orange-400 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Focus on Real Results</h3>
                <p className="text-white/80">We measure our success by the tangible outcomes we deliver for you.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Handshake className="w-8 h-8 text-orange-400 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Long-Term Partnership Approach</h3>
                <p className="text-white/80">We're committed to building lasting relationships, not just delivering projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <MoreHero/>
      <ClientShowcase/>

      <Footer />
    </div>
  );
} 