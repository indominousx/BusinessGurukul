import React from "react";
import { Users, Star, ArrowRight } from "lucide-react";

export default function Internship() {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 md:p-16 relative z-10">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-4 drop-shadow-lg">Internship at Business Gurukull</h1>
          <p className="mb-6 text-lg leading-relaxed text-gray-700 max-w-2xl mx-auto">
            Kickstart your career with hands-on experience, mentorship, and real projects at Business Gurukull. We welcome students and freshers who are eager to learn, innovate, and grow.
          </p>
        </header>
        {/* What You'll Gain */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-purple-700 flex items-center gap-2"><Star className="w-7 h-7 text-yellow-400" /> What You'll Gain</h2>
          <ul className="space-y-3 text-lg text-gray-700">
            <li className="flex items-start gap-3"><span className="text-purple-600 mt-1">•</span> <span>Mentorship from experienced professionals</span></li>
            <li className="flex items-start gap-3"><span className="text-purple-600 mt-1">•</span> <span>Opportunities to work on live projects</span></li>
            <li className="flex items-start gap-3"><span className="text-purple-600 mt-1">•</span> <span>Skill development workshops</span></li>
            <li className="flex items-start gap-3"><span className="text-purple-600 mt-1">•</span> <span>Collaborative and inclusive culture</span></li>
            <li className="flex items-start gap-3"><span className="text-purple-600 mt-1">•</span> <span>Potential for full-time offers</span></li>
          </ul>
        </div>
        {/* How to Apply */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-purple-700 flex items-center gap-2"><Users className="w-7 h-7 text-blue-500" /> How to Apply</h2>
          <div className="text-lg space-y-3 text-gray-700">
            <p className="flex items-center gap-2">
              <span className="text-orange-600 font-bold text-2xl">👉</span> Send your resume and a brief statement about your interests to <a href="mailto:careers@businessgurukull.com" className="text-orange-600 font-semibold hover:underline">careers@businessgurukull.com</a>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-orange-600 font-bold text-2xl">👉</span> Subject Line: Internship Application - [Your Name]
            </p>
          </div>
        </div>
        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg flex items-center gap-2 mx-auto">
            Start Your Journey <ArrowRight className="w-6 h-6" />
          </button>
          <p className="mt-6 text-xl font-semibold text-blue-800">We look forward to helping you launch your career!</p>
        </div>
      </div>
    </section>
  );
}