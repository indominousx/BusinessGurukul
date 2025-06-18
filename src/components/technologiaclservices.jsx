import React from "react";
import {
  Code,
  Smartphone,
  Server,
  ShieldCheck,
  Cloud,
  LayoutDashboard,
} from "lucide-react"; // Optional tech icons
import Footer from "../components/footer";

const techServices = [
  {
    title: "Custom Web Development",
    description:
      "Responsive, scalable websites built with the latest frameworks.",
    icon: <Code className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "Mobile App Development",
    description:
      "iOS & Android apps tailored to user experience and performance.",
    icon: <Smartphone className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "Backend & API Engineering",
    description: "Robust, secure, and scalable APIs and backend systems.",
    icon: <Server className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "Cloud Infrastructure",
    description: "DevOps, deployment, and cloud scaling (AWS, Azure, GCP).",
    icon: <Cloud className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "Cybersecurity & Compliance",
    description:
      "End-to-end protection with encryption, monitoring, and audit trails.",
    icon: <ShieldCheck className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "Admin Dashboards & Tools",
    description:
      "Custom CRM, CMS, and analytics platforms tailored to your business.",
    icon: <LayoutDashboard className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "Custom Software Development",
    description:
      "Create tailored software solutions to meet your unique business needs.",
    icon: <Code className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "ERP Development",
    description:
      "Streamline and integrate your business processes through a robust ERP system.",
    icon: <LayoutDashboard className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "CRM Development",
    description:
      "Manage customer relationships more efficiently with a custom-built CRM.",
    icon: <LayoutDashboard className="w-8 h-8 text-purple-600" />,
  },
];

const TechDevServices = () => {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Technology Development Services
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {techServices.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 rounded-full p-3">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-purple-600 transition">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TechDevServices;
