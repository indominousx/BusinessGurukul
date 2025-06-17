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
    <div className="max-w-4xl mx-auto py-4 px-4 text-gray-900">
      <h1 className="text-3xl font-bold mb-6">Current Openings</h1>
      {openings.map((group, idx) => (
        <div key={idx} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">{group.category}</h2>
          <ul className="list-disc pl-6">
            {group.roles.map((role, i) => (
              <li key={i}>{role}</li>
            ))}
          </ul>
        </div>
      ))}
      <p className="mt-8">
        <strong>Don't see a role that fits?</strong> Feel free to reach out to us at <a href="mailto:careers@businessgurukull.com" className="text-orange-600 font-semibold">careers@businessgurukull.com</a>
      </p>
    </div>
  );
}