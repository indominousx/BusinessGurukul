import React from "react";
import {
  Briefcase,
  BarChart2,
  Users,
  TrendingUp,
  Landmark,
} from "lucide-react";
import Footer from "../components/footer";

const consultingServices = [
  {
    title: "Business Strategy & Planning",
    description:
      "We help you define goals, identify opportunities, and create a roadmap to success.",
    icon: <Briefcase className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "Market Research & Insights",
    description:
      "In-depth industry analysis, competitor tracking, and customer behavior insights.",
    icon: <BarChart2 className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "Organizational Consulting",
    description:
      "Improve team structures, workflows, and internal communication for better output.",
    icon: <Users className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "Growth & Revenue Consulting",
    description:
      "Explore new revenue streams, pricing strategies, and conversion optimization.",
    icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "Regulatory & Compliance Advisory",
    description:
      "Ensure your operations follow industry regulations and mitigate legal risks.",
    icon: <Landmark className="w-8 h-8 text-indigo-600" />,
  },
];

const gradientBg = "bg-gradient-to-br from-indigo-50 via-white to-purple-100";

const BusinessConsultingServices = () => {
  return (
    <>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-12 py-16 ${gradientBg} rounded-3xl shadow-xl`}>
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Business Consulting Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {consultingServices.map((service, index) => (
            <div
              key={index}
              className="relative group flex flex-col sm:flex-row items-start sm:items-center gap-5 p-7 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.025] overflow-hidden"
            >
              <span className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-100 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition"></span>
              <div className="bg-indigo-50 p-4 rounded-xl shadow-md group-hover:bg-indigo-100 transition">
                {service.icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-indigo-700 mb-2 group-hover:text-purple-600 transition">
                  {service.title}
                </h3>
                <p className="text-base text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BusinessConsultingServices;
