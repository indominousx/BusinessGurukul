import React, { useState } from "react";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    title: "300% Lead Growth for a Solar Installation Company",
    service: "Digital Marketing Services",
    client: "Ecosun Solar and Home Automation",
    challenge:
      "The client struggled with inconsistent lead flow and low brand visibility in a highly competitive solar market.",
    results: [
      "300% increase in qualified leads within 6 months.",
      "40% reduction in cost per lead.",
      "First-page ranking for 10+ keywords in local SEO."
    ],
    approach: [
      "Conducted a detailed market and competitor analysis.",
      "Developed a full-funnel lead generation strategy using Google Ads, Meta Ads, and SEO.",
      "Built targeted landing pages with high-conversion designs.",
      "Implemented CRM setup for automatic lead capture and nurturing."
    ],
    image:
      "https://images.unsplash.com/photo-1581091012184-7f796d2d8b3b?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "2x Brand Awareness through Video Marketing",
    service: "Video/Ads Services",
    client: "Pawar Basundiwale (Traditional Indian Sweets Brand)",
    challenge:
      "The brand needed to modernize its image and reach younger demographics while maintaining traditional appeal.",
    results: [
      "2x growth in brand awareness in 3 months.",
      "150% increase in Instagram engagement.",
      "25% growth in direct sales attributed to video ads."
    ],
    approach: [
      "Created a series of emotional storytelling videos showcasing the legacy behind the products.",
      "Produced Instagram Reels, YouTube ads, and customer testimonial videos.",
      "Managed video ad campaigns across Instagram, Facebook, and YouTube."
    ],
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Website & CRM Launch for a Vocational Training Institute",
    service: "Technology Development Services",
    client: "Business Gurukull Vocational Academy",
    challenge:
      "Needed a professional website and CRM system to manage course inquiries, admissions, and student communications.",
    results: [
      "70% faster inquiry response time.",
      "3x improvement in inquiry-to-admission conversion rate.",
      "Full admission cycle management automated within 90 days."
    ],
    approach: [
      "Developed a dynamic, mobile-optimized website with detailed course pages.",
      "Integrated Zoho CRM for seamless lead management and communication tracking.",
      "Automated inquiry responses and admission follow-ups."
    ],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Business Process Optimization for a Food Manufacturing Company",
    service: "Business Consulting Services",
    client: "Swad Food (Packaged Food Brand)",
    challenge:
      "Rapid growth led to operational inefficiencies, poor inventory management, and delayed order fulfillment.",
    results: [
      "50% reduction in order processing time.",
      "20% decrease in wastage and pilferage.",
      "Enhanced team productivity and accountability."
    ],
    approach: [
      "Conducted a business audit to identify bottlenecks.",
      "Designed and implemented SOPs across manufacturing, inventory, and dispatch.",
      "Developed a customized inventory management system integrated with their CRM."
    ],
    image:
      "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=400&q=80"
  }
];

export default function CaseStudiesComponent() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 py-10 px-6 sm:px-10 lg:px-24">
      <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-14 tracking-tight">
        Real Results, Real Impact
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-10">
        {caseStudies.map((study, idx) => (
          <React.Fragment key={idx}>
            {selectedIdx === idx ? (
              <div className="flex flex-col md:flex-row gap-6 items-start w-full">
                {/* Tile */}
                <div
                  className={`rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-white border border-gray-200 group ring-4 ring-purple-400 w-full md:w-2/5`}
                  style={{ minWidth: 0 }}
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <span className="text-sm text-purple-600 font-semibold uppercase">
                      {study.service}
                    </span>
                    <h3 className="text-xl font-bold text-blue-800 my-2 group-hover:text-purple-700 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-2">
                      <strong>Client:</strong> {study.client}
                    </p>
                    <p className="text-gray-600 text-sm mb-2">
                      <strong>Challenge:</strong> {study.challenge}
                    </p>
                    <p className="text-gray-600 text-sm mb-2">
                      <strong>Results:</strong>
                    </p>
                    <ul className="list-disc list-inside text-gray-600 text-sm mb-2">
                      {study.results.map((result, i) => (
                        <li key={i}>{result}</li>
                      ))}
                    </ul>
                    <button
                      className="mt-4 bg-orange-500 text-white font-bold px-4 py-2 rounded hover:bg-orange-600 transition"
                      onClick={e => {
                        e.stopPropagation();
                        setSelectedIdx(selectedIdx === idx ? null : idx);
                      }}
                    >
                      Hide Details
                    </button>
                  </div>
                </div>
                {/* Detail Panel */}
                <div
                  className="rounded-3xl shadow-lg border-l-4 border-purple-400 p-8 mt-2 mb-4 w-full flex-1 transition-all duration-500 ease-in-out bg-white"
                  style={{ minWidth: 0, opacity: 1, transform: 'translateX(0)' }}
                >
                  <button
                    onClick={() => setSelectedIdx(null)}
                    className="text-purple-700 text-lg font-bold self-end mb-4 float-right"
                  >
                    ✕ Close
                  </button>
                  <h3 className="text-2xl font-extrabold text-blue-800 mb-4">
                    {study.title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Client:</strong> {study.client}
                  </p>
                  <p className="text-sm text-gray-700 mb-4">
                    <strong>Challenge:</strong> {study.challenge}
                  </p>
                  <p className="text-sm text-blue-800 font-semibold mb-2">Our Approach:</p>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    {study.approach.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                  <p className="text-sm text-blue-800 font-semibold mb-2">Results:</p>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    {study.results.map((result, i) => (
                      <li key={i}>{result}</li>
                    ))}
                  </ul>
                  <Link to="/about" className="inline-block bg-black hover:bg-gray-600 text-white visited:text-white focus:text-gray-200 active:text-gray-200 hover:text-gray-200 font-bold px-6 py-3 rounded-lg shadow transition mt-4">
                    Contact Us
                  </Link>
                </div>
              </div>
            ) : (
              <div
                className={`rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all bg-white border border-gray-200 group w-full`}
              >
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <span className="text-sm text-purple-600 font-semibold uppercase">
                    {study.service}
                  </span>
                  <h3 className="text-xl font-bold text-blue-800 my-2 group-hover:text-purple-700 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-2">
                    <strong>Client:</strong> {study.client}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Challenge:</strong> {study.challenge}
                  </p>
                  <p className="text-gray-600 text-sm mb-2">
                    <strong>Results:</strong>
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-sm mb-2">
                    {study.results.map((result, i) => (
                      <li key={i}>{result}</li>
                    ))}
                  </ul>
                  <button
                    className="mt-4 bg-orange-500 text-white font-bold px-4 py-2 rounded hover:bg-orange-600 transition"
                    onClick={e => {
                      e.stopPropagation();
                      setSelectedIdx(idx);
                    }}
                  >
                    View Full Case Study
                  </button>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      {/* Result Overview Section */}
      <div className="max-w-5xl mx-auto mt-16">
        <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-8">Result Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center bg-white rounded-2xl shadow p-6">
            <span className="text-4xl mb-2">📈</span>
            <div className="text-xl font-bold text-blue-900 mb-1">300% Increase</div>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl shadow p-6">
            <span className="text-4xl mb-2">🎯</span>
            <div className="text-xl font-bold text-blue-900 mb-1 whitespace-nowrap">
              2x Brand Awareness
            </div>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl shadow p-6">
            <span className="text-4xl mb-2">⚙️</span>
            <div className="text-xl font-bold text-blue-900 mb-1">3x Conversion Rate</div>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl shadow p-6">
            <span className="text-4xl mb-2">📦</span>
            <div className="text-xl font-bold text-blue-900 mb-1">50% Faster Ops</div>
          </div>
        </div>
      </div>
    </div>
  );
}
