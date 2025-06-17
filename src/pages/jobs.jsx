import React from "react";

const openings = [
  {
    category: "Digital Marketing Roles",
    roles: [
      "Social Media Manager",
      "Performance Marketer (Lead Generation Specialist)",
      "SEO Specialist",
      "Content Writer & Strategist",
      "Email Marketing Executive",
    ],
  },
  {
    category: "Video & Creative Roles",
    roles: [
      "Video Editor",
      "Graphic Designer",
      "Creative Director",
      "Content Manager",
    ],
  },
  {
    category: "Technology Development Roles",
    roles: [
      "Website Developer",
      "App Developer",
      "CRM / ERP Developer",
      "UI/UX Designer",
    ],
  },
  {
    category: "Business Consulting Roles",
    roles: [
      "Business Consultant",
      "Strategy and Operations Analyst",
      "Sales Consultant",
      "HR Consultant",
    ],
  },
];

export default function Jobs() {
  return (
    <div className="max-w-3xl mx-auto pt-24 pb-16 px-4 bg-gradient-to-br from-blue-50 to-white text-gray-900 rounded-lg shadow-xl">
      <h1 className="text-4xl lg:text-5xl font-extrabold mb-8 text-blue-900">Current Openings</h1>
      {openings.map((group, idx) => (
        <div key={idx} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-700">{group.category}</h2>
          <ul className="list-disc pl-8 space-y-2 text-lg text-gray-700">
            {group.roles.map((role, i) => (
              <li key={i}>{role}</li>
            ))}
          </ul>
        </div>
      ))}
      <p className="mt-10 text-lg text-gray-700">
        <strong className="font-semibold">Don't see a role that fits?</strong> Feel free to reach out to us at <a href="mailto:careers@businessgurukull.com" className="text-orange-600 font-semibold hover:underline">careers@businessgurukull.com</a>
      </p>
    </div>
  );
}