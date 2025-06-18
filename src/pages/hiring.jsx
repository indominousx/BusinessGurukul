import React from "react";
import { Briefcase, Users, Star, Heart, ArrowRight, Award, Clock, Users as TeamIcon } from "lucide-react";
import Footer from "../components/footer";

export default function Hiring() {
  return (
    <div className="bg-purple-50 min-h-screen w-full">
      {/* Hero Section - truly edge-to-edge */}
      <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-700 to-orange-400 py-16 flex items-center justify-center" style={{minHeight: '350px'}}>
        <div className="w-full max-w-5xl px-4 md:px-16 text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Grow Your Career. Build the Future.</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Join our dynamic team and be part of a mission to transform businesses through innovative marketing, technology, and consulting solutions.
          </p>
          <button className="inline-block bg-orange-500 hover:bg-orange-600 font-bold px-8 py-4 rounded-full shadow transition text-lg text-white">
            Join Our Team
          </button>
        </div>
      </div>

      {/* Why Work with Us Section */}
      <section className="w-full py-12 px-4 md:px-12 bg-white">
        <h2 className="text-4xl font-bold text-purple-700 mb-8 text-center">Why Work with Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Dynamic Work Culture</h3>
            <p className="text-gray-700">We encourage new ideas, innovation, and continuous learning in a collaborative environment.</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Career Growth</h3>
            <p className="text-gray-700">As we grow, you grow. We believe in promoting from within and helping you build a career, not just a job.</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Skill Development</h3>
            <p className="text-gray-700">Regular training, workshops, and mentoring to sharpen your skills and expand your potential.</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Meaningful Work</h3>
            <p className="text-gray-700">Work on real projects that make a real difference to our clients' businesses.</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">⚖️</div>
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Work-Life Balance</h3>
            <p className="text-gray-700">Flexible working models that help you balance your personal and professional life.</p>
          </div>
          <div className="bg-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-2xl font-bold text-purple-700 mb-4">Recognition</h3>
            <p className="text-gray-700">Your contributions will never go unnoticed. We celebrate success together.</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <div className="w-full flex items-center justify-start py-20 px-4 md:px-16 relative bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="bg-white bg-opacity-95 rounded-2xl shadow-2xl p-10 max-w-2xl ml-0 md:ml-12">
          <p className="text-xl text-gray-900 mb-6">
            "At Business Gurukull, you're not just another employee — you're a valued partner in our mission to transform businesses. We believe in fostering a culture where every voice matters and innovation is encouraged."
          </p>
          <p className="text-xl font-bold text-orange-500 mt-4">
            — Leadership Team, Business Gurukull
          </p>
        </div>
      </div>

      {/* Who We're Looking For Section */}
      <section className="w-full py-12 px-4 md:px-12 bg-orange-50">
        <h2 className="text-4xl font-bold text-orange-500 mb-8 text-center">Who We're Looking For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-500" />
              Qualities We Value
            </h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-center gap-2"><span className="text-blue-600">•</span> Proactive and self-driven</li>
              <li className="flex items-center gap-2"><span className="text-blue-600">•</span> Passionate about learning and growth</li>
              <li className="flex items-center gap-2"><span className="text-blue-600">•</span> Creative problem-solvers</li>
              <li className="flex items-center gap-2"><span className="text-blue-600">•</span> Excellent communicators and team players</li>
              <li className="flex items-center gap-2"><span className="text-blue-600">•</span> Committed to delivering quality and excellence</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-pink-500" />
              Life at Business Gurukull
            </h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-center gap-2"><span className="text-pink-600">•</span> Collaboration beats competition</li>
              <li className="flex items-center gap-2"><span className="text-pink-600">•</span> Learning is a continuous journey</li>
              <li className="flex items-center gap-2"><span className="text-pink-600">•</span> Innovation is encouraged, not restricted</li>
              <li className="flex items-center gap-2"><span className="text-pink-600">•</span> Every voice matters, no matter the designation</li>
              <li className="flex items-center gap-2"><span className="text-pink-600">•</span> We work hard, celebrate harder, and grow fastest</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 px-4 md:px-16 bg-white flex flex-col items-center">
        <h2 className="text-4xl font-bold text-purple-700 mb-8 text-center">Join Our Growing Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-6xl text-center">
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-4">👥</span>
            <span className="text-4xl font-extrabold mb-2 text-purple-700">50+</span>
            <span className="text-lg text-gray-700">Team Members</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-4">🎯</span>
            <span className="text-4xl font-extrabold mb-2 text-purple-700">4</span>
            <span className="text-lg text-gray-700">Core Departments</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-4">🏆</span>
            <span className="text-4xl font-extrabold mb-2 text-purple-700">100%</span>
            <span className="text-lg text-gray-700">Growth Focus</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-4">🌟</span>
            <span className="text-4xl font-extrabold mb-2 text-purple-700">∞</span>
            <span className="text-lg text-gray-700">Opportunities</span>
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="w-full py-12 px-4 md:px-12 bg-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-purple-700 mb-8">How to Apply</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
              <Briefcase className="w-6 h-6 text-green-500" />
              Ready to Take the Next Step?
            </h3>
            <div className="text-lg space-y-4 text-gray-700 mb-8">
              <p className="flex items-center justify-center gap-2">
                <span className="text-orange-600 font-bold text-2xl">👉</span> Send your updated resume to <a href="mailto:careers@businessgurukull.com" className="text-orange-600 font-semibold hover:underline">careers@businessgurukull.com</a>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-orange-600 font-bold text-2xl">👉</span> Subject Line: Application for [Job Title] - [Your Name]
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-orange-600 font-bold text-2xl">👉</span> Attach: Resume + (Optional) Portfolio/Work Samples
              </p>
            </div>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg flex items-center gap-2 mx-auto">
              Join Us <ArrowRight className="w-6 h-6" />
            </button>
            <p className="mt-6 text-xl font-semibold text-blue-800">Join Us and Make Your Mark.</p>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <Footer />
    </div>
  );
}