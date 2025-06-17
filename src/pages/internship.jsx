import React from "react";

export default function Internship() {
  return (
    <div className="max-w-4xl mx-auto py-4 px-4 text-gray-900">
      <h1 className="text-3xl font-bold mb-6">Internship at Business Gurukull</h1>
      <p className="mb-6">
        Kickstart your career with hands-on experience, mentorship, and real projects at Business Gurukull. We welcome students and freshers who are eager to learn, innovate, and grow.
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Mentorship from experienced professionals</li>
        <li>Opportunities to work on live projects</li>
        <li>Skill development workshops</li>
        <li>Collaborative and inclusive culture</li>
        <li>Potential for full-time offers</li>
      </ul>
      <h2 className="text-xl font-semibold mt-8 mb-2">How to Apply</h2>
      <p>
        Send your resume and a brief statement about your interests to <a href="mailto:careers@businessgurukull.com" className="text-orange-600 font-semibold">careers@businessgurukull.com</a>.<br />
        Subject Line: Internship Application - [Your Name]
      </p>
      <p className="mt-6 font-semibold">We look forward to helping you launch your career!</p>
    </div>
  );
}