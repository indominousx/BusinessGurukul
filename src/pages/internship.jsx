import React from "react";

export default function Internship() {
  return (
    <div className="max-w-3xl mx-auto pt-24 pb-16 px-4 bg-gradient-to-br from-blue-50 to-white text-gray-900 rounded-lg shadow-xl">
      <h1 className="text-4xl lg:text-5xl font-extrabold mb-8 text-blue-900">Internship at Business Gurukull</h1>
      <p className="mb-6 text-lg leading-relaxed">
        Kickstart your career with hands-on experience, mentorship, and real projects at Business Gurukull. We welcome students and freshers who are eager to learn, innovate, and grow.
      </p>
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-purple-700">What You'll Gain</h2>
      <ul className="list-disc pl-8 mb-6 space-y-2 text-lg text-gray-700">
        <li><span className="font-semibold">Mentorship from experienced professionals</span></li>
        <li><span className="font-semibold">Opportunities to work on live projects</span></li>
        <li><span className="font-semibold">Skill development workshops</span></li>
        <li><span className="font-semibold">Collaborative and inclusive culture</span></li>
        <li><span className="font-semibold">Potential for full-time offers</span></li>
      </ul>
      <h2 className="text-2xl font-semibold mt-10 mb-4 text-purple-700">How to Apply</h2>
      <div className="text-lg space-y-3 text-gray-700">
        <p className="flex items-center gap-2">
          <span className="text-orange-600 font-bold text-2xl">👉</span> Send your resume and a brief statement about your interests to <a href="mailto:careers@businessgurukull.com" className="text-orange-600 font-semibold hover:underline">careers@businessgurukull.com</a>
        </p>
        <p className="flex items-center gap-2">
          <span className="text-orange-600 font-bold text-2xl">👉</span> Subject Line: Internship Application - [Your Name]
        </p>
      </div>
      <p className="mt-10 text-xl font-semibold text-center text-blue-800">We look forward to helping you launch your career!</p>
    </div>
  );
}