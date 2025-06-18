import React from "react";
import { Users, Briefcase, Film, Code, ArrowRight } from "lucide-react";

const openings = [
  {
    category: "Digital Marketing Roles",
    icon: <Users className="w-7 h-7 text-blue-500" />,
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
    icon: <Film className="w-7 h-7 text-orange-500" />,
    roles: [
      "Video Editor",
      "Graphic Designer",
      "Creative Director",
      "Content Manager",
    ],
  },
  {
    category: "Technology Development Roles",
    icon: <Code className="w-7 h-7 text-purple-600" />,
    roles: [
      "Website Developer",
      "App Developer",
      "CRM / ERP Developer",
      "UI/UX Designer",
    ],
  },
  {
    category: "Business Consulting Roles",
    icon: <Briefcase className="w-7 h-7 text-green-600" />,
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
    <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 py-20 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 md:p-16 relative z-10">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-4 drop-shadow-lg">Current Openings</h1>
        </header>
        <div className="grid gap-10 md:grid-cols-2">
          {openings.map((group, idx) => (
            <div key={idx} className="bg-gradient-to-tr from-purple-50 to-white rounded-2xl shadow-lg p-7 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-purple-700">{group.icon} {group.category}</h2>
              <ul className="space-y-2 text-lg text-gray-700">
                {group.roles.map((role, i) => (
                  <li key={i} className="flex items-center gap-2"><span className="text-orange-500">•</span> {role}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">
            <strong className="font-semibold">Don't see a role that fits?</strong> Feel free to reach out to us at <a href="mailto:careers@businessgurukull.com" className="text-orange-600 font-semibold hover:underline">careers@businessgurukull.com</a>
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg flex items-center gap-2 mx-auto">
            Apply Now <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}