import { CheckCircle, XCircle } from "lucide-react";

const problems = [
  "Inconsistent lead flow from marketing efforts",
  "Poor online visibility or brand presence",
  "Spending on ads with no ROI",
  "Lack of in-house marketing expertise",
  "Cluttered or outdated website",
  "No clarity on how to grow revenue",
  "Difficulty managing multiple vendors",
  "Poor brand storytelling and communication",
  "Manual or inefficient operations",
  "No clear reporting or performance tracking",
];

const solutions = [
  "We build lead generation systems using data-backed digital strategies.",
  "We improve search rankings, optimize social presence, and manage consistent branding.",
  "We create conversion-optimized ad creatives, funnels, and targeting strategies.",
  "Our team acts as your extended marketing department.",
  "We build responsive, SEO-friendly websites that convert visitors into leads.",
  "We offer business consulting with actionable growth plans.",
  "We provide all-in-one execution across marketing, tech, and video from one team.",
  "Our video and content team helps you craft powerful communication narratives that sell.",
  "We develop tech tools, CRMs, and automation systems to improve efficiency.",
  "We provide dashboards, analytics, and weekly reports to stay on track.",
];

export default function ProblemSolutionSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-32 text-gray-800">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 tracking-tight">
        Problem <span className="text-orange-500">+</span> Solution
      </h2>

      {/* Desktop/tablet view */}
      <div className="hidden md:grid grid-cols-2 gap-12 items-start mx-auto max-w-5xl">
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-violet-600 flex items-center gap-2">
            <XCircle className="w-7 h-7" />
            Common Problems
          </h3>
          <ul className="space-y-8">
            {problems.map((problem, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="bg-red-100 rounded-full p-2 shadow">
                  <XCircle className="text-red-500 w-6 h-6" />
                </div>
                <span className="text-lg">{problem}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-orange-500 flex items-center gap-2">
            <CheckCircle className="w-7 h-7" />
            Our Solutions
          </h3>
          <ul className="space-y-8">
            {solutions.map((solution, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="bg-green-100 rounded-full p-2 shadow">
                  <CheckCircle className="text-green-600 w-6 h-6" />
                </div>
                <span className="text-lg font-medium">{solution}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden mt-10 flex flex-col items-center">
        <div className="grid grid-cols-2 gap-4 w-full px-4">
          <h3 className="text-lg font-semibold text-violet-600">Problem</h3>
          <h3 className="text-lg font-semibold text-orange-600">Solution</h3>
        </div>

        {problems.map((problem, index) => (
          <div
            key={index}
            className="grid grid-cols-2 gap-4 items-start w-full px-4 py-4 bg-white rounded-md shadow-sm mt-4"
          >
            <div className="flex items-start gap-2">
              <XCircle className="text-red-500 w-5 h-5 mt-1" />
              <span className="text-gray-700 text-sm">{problem}</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="text-green-600 w-5 h-5 mt-1" />
              <span className="text-green-700 text-sm font-medium">
                {solutions[index] || "Custom solution provided"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <p className="text-xl font-semibold mb-4">
          Struggling with any of these? Let’s solve it together.
        </p>
        <a
          href="/contact" 
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white text-lg font-medium py-3 px-6 rounded-full transition duration-300 shadow-md"
        > <span style={{ color: 'white' }}>Contact Us</span>
        </a>
      </div>
    </section>
  );
}
