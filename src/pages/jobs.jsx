import React from "react";
import { Users, Briefcase, Film, Code, ArrowRight, Search, Clock, MapPin } from "lucide-react";
import Footer from "../components/footer";

const openings = [
  {
    category: "Digital Marketing Roles",
    icon: <Users className="w-7 h-7 text-blue-500" />,
    emoji: "🚀",
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
    emoji: "🎥",
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
    emoji: "💻",
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
    emoji: "🎯",
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
    <div className="bg-purple-50 min-h-screen w-full">
      {/* Hero Section - truly edge-to-edge */}
      <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-700 to-purple-600 py-16 flex items-center justify-center" style={{minHeight: '350px'}}>
        <div className="w-full max-w-5xl px-4 md:px-16 text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Current Openings</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Join our dynamic team across multiple departments and help us transform businesses through innovative solutions.
          </p>
          <button className="inline-block bg-orange-500 hover:bg-orange-600 font-bold px-8 py-4 rounded-full shadow transition text-lg text-white">
            View All Positions
          </button>
        </div>
      </div>

      {/* Job Categories Section */}
      <section className="w-full py-12 px-4 md:px-12 bg-white">
        <h2 className="text-4xl font-bold text-purple-700 mb-8 text-center">Available Positions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {openings.map((group, idx) => (
            <div key={idx} className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg p-8 border border-purple-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl">{group.emoji}</div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-700">{group.category}</h3>
                  <p className="text-gray-600">{group.roles.length} positions available</p>
                </div>
              </div>
              <ul className="space-y-3 text-lg text-gray-700 mb-6">
                {group.roles.map((role, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-orange-500 text-xl">•</span>
                    <span className="hover:text-purple-700 transition-colors cursor-pointer">{role}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 px-4 md:px-16 bg-orange-50 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-orange-700 mb-8 text-center">Why Join Our Team?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-6xl text-center">
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-4">💰</span>
            <span className="text-4xl font-extrabold mb-2 text-orange-700">Competitive</span>
            <span className="text-lg text-gray-700">Salary Package</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-4">🏠</span>
            <span className="text-4xl font-extrabold mb-2 text-orange-700">Flexible</span>
            <span className="text-lg text-gray-700">Work Options</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-4">🎓</span>
            <span className="text-4xl font-extrabold mb-2 text-orange-700">Learning</span>
            <span className="text-lg text-gray-700">& Development</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-4">🚀</span>
            <span className="text-4xl font-extrabold mb-2 text-orange-700">Fast</span>
            <span className="text-lg text-gray-700">Career Growth</span>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="w-full py-12 px-4 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-purple-700 mb-8">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-50 rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-purple-700 mb-4">1. Apply</h3>
              <p className="text-gray-700">Send your resume and portfolio to our careers email</p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-purple-700 mb-4">2. Interview</h3>
              <p className="text-gray-700">Meet with our team for technical and cultural fit</p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-8 shadow-lg">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-purple-700 mb-4">3. Join Us</h3>
              <p className="text-gray-700">Welcome to the Business Gurukull family!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 px-4 md:px-12 bg-gradient-to-r from-purple-700 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Don't See a Role That Fits?</h2>
          <p className="text-xl text-white/90 mb-8">
            We're always looking for talented individuals. Feel free to reach out to us at <a href="mailto:careers@businessgurukull.com" className="text-orange-300 font-semibold hover:underline">careers@businessgurukull.com</a>
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg flex items-center gap-2 mx-auto">
            Apply Now <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}