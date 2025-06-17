import { Link } from "react-router-dom";

const services = [
  { name: "Business Consulting", path: "/services/business-consulting" },
  { name: "Tech Development Services", path: "/services/tech-development" },
  { name: "Video / Ad Services", path: "/services/video-ad" },
  { name: "Digital Marketing Services", path: "/services/digital-marketing" },
];

export default function ServicesOverview() {
  return (
    <div className="max-w-xl mx-auto py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
      <ul className="space-y-4">
        {services.map((service) => (
          <li key={service.path}>
            <Link
              to={service.path}
              className="text-blue-600 text-xl hover:underline block p-2 rounded hover:bg-blue-50 transition"
            >
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 