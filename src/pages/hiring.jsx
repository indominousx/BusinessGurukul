import React from "react";
import { Briefcase, Users, Star, Heart, ArrowRight } from "lucide-react";

export default function Hiring() {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 py-20 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 md:p-16 relative z-10">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-4 drop-shadow-lg">Grow Your Career. Build the Future.</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            At Business Gurukull, we believe that our success begins with the passion, creativity, and commitment of our people. We are on a mission to empower businesses with innovative marketing, technology, video creation, and consulting solutions — and we're looking for dynamic individuals to join us on this journey.
          </p>
        </header>
        {/* Why Work with Us */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-purple-700 mb-4 flex items-center gap-2"><Star className="w-7 h-7 text-yellow-400" /> Why Work with Us?</h2>
          <ul className="space-y-3 text-lg text-gray-700">
            <li className="flex items-start gap-3"><span className="text-purple-600 mt-1">•</span> <span><b>Dynamic Work Culture:</b> We encourage new ideas, innovation, and continuous learning.</span></li>
            <li className="flex items-start gap-3"><span className="text-purple-600 mt-1">•</span> <span><b>Career Growth Opportunities:</b> As we grow, you grow. We believe in promoting from within and helping you build a career, not just a job.</span></li>
            <li className="flex items-start gap-3"><span className="text-purple-600 mt-1">•</span> <span><b>Skill Development:</b> Regular training, workshops, and mentoring to sharpen your skills and expand your potential.</span></li>
            <li className="flex items-start gap-3"><span className="text-purple-600 mt-1">•</span> <span><b>Meaningful Work:</b> Get the chance to work on real projects that make a real difference to our clients' businesses.</span></li>
            <li className="flex items-start gap-3"><span className="text-purple-600 mt-1">•</span> <span><b>Work-Life Balance:</b> Flexible working models that help you balance your personal and professional life.</span></li>
            <li className="flex items-start gap-3"><span className="text-purple-600 mt-1">•</span> <span><b>Reward and Recognition:</b> Your contributions will never go unnoticed. We celebrate success together.</span></li>
          </ul>
        </div>
        {/* Who We're Looking For */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-purple-700 mb-4 flex items-center gap-2"><Users className="w-7 h-7 text-blue-500" /> Who We're Looking For</h2>
          <ul className="space-y-3 text-lg text-gray-700">
            <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span> Proactive and self-driven</li>
            <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span> Passionate about learning and growth</li>
            <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span> Creative problem-solvers</li>
            <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span> Excellent communicators and team players</li>
            <li className="flex items-start gap-3"><span className="text-blue-600 mt-1">•</span> Committed to delivering quality and excellence</li>
          </ul>
        </div>
        {/* Life at Business Gurukull */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-purple-700 mb-4 flex items-center gap-2"><Heart className="w-7 h-7 text-pink-500" /> Life at Business Gurukull</h2>
          <ul className="space-y-3 text-lg text-gray-700">
            <li className="flex items-start gap-3"><span className="text-pink-600 mt-1">•</span> Collaboration beats competition.</li>
            <li className="flex items-start gap-3"><span className="text-pink-600 mt-1">•</span> Learning is a continuous journey.</li>
            <li className="flex items-start gap-3"><span className="text-pink-600 mt-1">•</span> Innovation is encouraged, not restricted.</li>
            <li className="flex items-start gap-3"><span className="text-pink-600 mt-1">•</span> Every voice matters, no matter the designation.</li>
            <li className="flex items-start gap-3"><span className="text-pink-600 mt-1">•</span> We work hard, celebrate harder, and grow fastest.</li>
          </ul>
        </div>
        {/* Quote */}
        <blockquote className="italic text-xl text-gray-700 border-l-4 border-orange-500 pl-4 py-2 my-10 bg-orange-50 rounded-lg">
          "At Business Gurukull, you're not just another employee — you're a valued partner in our mission to transform businesses."
        </blockquote>
        {/* How to Apply */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-purple-700 mb-4 flex items-center gap-2"><Briefcase className="w-7 h-7 text-green-500" /> How to Apply</h2>
          <div className="text-lg space-y-3 text-gray-700">
            <p>Ready to take the next step in your career?</p>
            <p className="flex items-center gap-2">
              <span className="text-orange-600 font-bold text-2xl">👉</span> Send your updated resume to <a href="mailto:careers@businessgurukull.com" className="text-orange-600 font-semibold hover:underline">careers@businessgurukull.com</a>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-orange-600 font-bold text-2xl">👉</span> Subject Line: Application for [Job Title] - [Your Name]
            </p>
            <p className="flex items-center gap-2">
              <span className="text-orange-600 font-bold text-2xl">👉</span> Attach: Resume + (Optional) Portfolio/Work Samples
            </p>
          </div>
        </div>
        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg flex items-center gap-2 mx-auto">
            Join Us <ArrowRight className="w-6 h-6" />
          </button>
          <p className="mt-6 text-xl font-semibold text-blue-800">Join Us and Make Your Mark.</p>
        </div>
      </div>
    </section>
  );
}