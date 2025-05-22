import { CheckCircle, XCircle } from "lucide-react"; // If using lucide icons

const problems = [
  "Inconsistent or low-quality leads",
  "Poor-performing social media ads",
  "No time to manage online marketing",
  "No tracking or automation",
  "Wasted budget without clear ROI",
];

const solutions = [
  "Targeted Lead Generation Campaigns",
  "End-to-End Digital Marketing Support",
  "CRM & System Automation",
  "Performance-Driven Ad Creatives & Funnels",
  "Transparent Reporting & Guidance",
  "Grow Business Sales",
];

export default function ProblemSolutionSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-32 text-gray-800">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 tracking-tight">
        Problem <span className="text-orange-500">+</span> Solution
      </h2>

      {/* Desktop/tablet view */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative justify-center mx-auto max-w-4xl">
        {/* Problems */}
        <div className="relative z-10">
          <h3 className="text-2xl font-semibold mb-6 text-violet-600 flex items-center gap-2">
            <XCircle className="w-7 h-7" />
            Common Problems
          </h3>
          <ul className="space-y-8">
            {problems.map((problem, index) => (
              <li key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 bg-red-100 rounded-full p-2 shadow">
                  <XCircle className="text-red-500 w-6 h-6" />
                </div>
                <span className="text-lg">{problem}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div className="relative z-10">
          <h3 className="text-2xl font-semibold mb-6 text-orange-500 flex items-center gap-2">
            <CheckCircle className="w-7 h-7" />
            Our Solutions
          </h3>
          <ul className="space-y-8">
            {problems.map((problem, index) => (
              <li key={index} className="flex items-center gap-4 group">
                <div className="flex-shrink-0 bg-green-100 rounded-full p-2 shadow">
                  <CheckCircle className="text-green-600 w-6 h-6" />
                </div>
                <span className="text-lg font-medium">
                  {solutions[index] || "Custom Solution"}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Responsive connector lines for mobile */}
      <div className="md:hidden mt-10 flex flex-col items-center">
        <div className="grid grid-cols-2 gap-4 w-full px-4">
          <h3 className="text-lg font-semibold text-violet-600">Problem</h3>
          <h3 className="text-lg font-semibold text-orange-600">Solution</h3>
        </div>

        {problems.map((problem, index) => (
          <div
            key={index}
            className="grid grid-cols-2 gap-4 items-center w-full px-4 py-2 bg-white rounded-md shadow-sm"
          >
            <div className="flex items-center gap-2">
              <XCircle className="text-red-500 w-5 h-5" />
              <span className="text-gray-700">{problem}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-600 w-5 h-5" />
              <span className="text-green-700 font-medium">
                {solutions[index] || "Custom Solution"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// export default ProblemSolutionSection;
