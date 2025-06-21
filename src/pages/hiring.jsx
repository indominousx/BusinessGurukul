import React from "react";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";

export default function Hiring() {
  const navigate = useNavigate();
  return (
    <div className="bg-purple-50 min-h-screen w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-purple-700 to-orange-400 py-12 md:py-16 px-4 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Grow Your Career.<br />Build the Future.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Join our dynamic team and be part of a mission to transform businesses through innovative marketing, technology, and consulting solutions.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 font-bold px-8 py-4 rounded-full shadow transition text-lg text-white" onClick={() => navigate('/contact')}>
            Join Our Team
          </button>
        </div>
      </section>

      {/* Why Work with Us Section */}
      <section className="w-full py-10 px-4 bg-white">
        <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">Why Work with Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-purple-50 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-purple-700 mb-2">Dynamic Work Culture</h3>
            <p className="text-gray-700">We encourage new ideas, innovation, and continuous learning in a collaborative environment.</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-purple-700 mb-2">Career Growth</h3>
            <p className="text-gray-700">As we grow, you grow. We believe in promoting from within and helping you build a career, not just a job.</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-purple-700 mb-2">Skill Development</h3>
            <p className="text-gray-700">Regular training, workshops, and mentoring to sharpen your skills and expand your potential.</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-purple-700 mb-2">Meaningful Work</h3>
            <p className="text-gray-700">Work on real projects that make a real difference to our clients' businesses.</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-purple-700 mb-2">Work-Life Balance</h3>
            <p className="text-gray-700">Flexible working models that help you balance your personal and professional life.</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-purple-700 mb-2">Recognition</h3>
            <p className="text-gray-700">Your contributions will never go unnoticed. We celebrate success together.</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full py-10 px-4 bg-gradient-to-r from-blue-900 to-purple-900 flex justify-center">
        <div className="bg-white bg-opacity-95 rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
          <p className="text-lg text-gray-900 mb-4">
            "At Business Gurukull, you're not just another employee — you're a valued partner in our mission to transform businesses. We believe in fostering a culture where every voice matters and innovation is encouraged."
          </p>
          <p className="text-lg font-bold text-orange-500 mt-2">
            — Leadership Team, Business Gurukull
          </p>
        </div>
      </section>

      {/* Who We're Looking For Section */}
      <section className="w-full py-10 px-4 bg-orange-50">
        <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">Who We're Looking For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Qualities We Value</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Proactive and self-driven</li>
              <li>• Passionate about learning and growth</li>
              <li>• Creative problem-solvers</li>
              <li>• Excellent communicators and team players</li>
              <li>• Committed to delivering quality and excellence</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Life at Business Gurukull</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Collaboration beats competition</li>
              <li>• Learning is a continuous journey</li>
              <li>• Innovation is encouraged, not restricted</li>
              <li>• Every voice matters, no matter the designation</li>
              <li>• We work hard, celebrate harder, and grow fastest</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-10 px-4 bg-white flex flex-col items-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">Join Our Growing Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl text-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">👥</span>
            <span className="text-2xl font-extrabold mb-1 text-purple-700">50+</span>
            <span className="text-base text-gray-700">Team Members</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">🎯</span>
            <span className="text-2xl font-extrabold mb-1 text-purple-700">4</span>
            <span className="text-base text-gray-700">Core Departments</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">🏆</span>
            <span className="text-2xl font-extrabold mb-1 text-purple-700">100%</span>
            <span className="text-base text-gray-700">Growth Focus</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl mb-2">🌟</span>
            <span className="text-2xl font-extrabold mb-1 text-purple-700">∞</span>
            <span className="text-base text-gray-700">Opportunities</span>
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="w-full py-10 px-4 bg-purple-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-6">How to Apply</h2>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Ready to Take the Next Step?</h3>
            <div className="text-base space-y-2 text-gray-700 mb-6">
              <p>👉 Send your updated resume to <a href="mailto:careers@businessgurukull.com" className="text-orange-600 font-semibold hover:underline">careers@businessgurukull.com</a></p>
              <p>👉 Subject Line: Application for [Job Title] - [Your Name]</p>
              <p>👉 Attach: Resume + (Optional) Portfolio/Work Samples</p>
            </div>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg mx-auto" onClick={() => navigate('/contact')}>
              Join Us
            </button>
            <p className="mt-4 text-lg font-semibold text-blue-800">Join Us and Make Your Mark.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}