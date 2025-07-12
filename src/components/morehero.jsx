import React, { useEffect, useState } from "react";

const counters = [
  { icon: "💼", number: 22, label: "Years of Experience" },
  { icon: "🏅", number: 50, label: "Top Brands Served" },
  { icon: "👍", number: 500, label: "Industry-best Professionals" },
  { icon: "😊", number: 100, label: "Happy Clients" },
];

export default function MoreHero() {
  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    const duration = 1500; // total animation duration in ms
    const steps = 30; // number of steps for smooth animation
    const intervalTime = duration / steps;

    const increments = counters.map((c) => Math.ceil(c.number / steps));
    let step = 0;

    const interval = setInterval(() => {
      step++;
      setCounts((prev) =>
        prev.map((val, i) => {
          const nextVal = val + increments[i];
          return nextVal > counters[i].number ? counters[i].number : nextVal;
        })
      );
      if (step >= steps) clearInterval(interval);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Significant Boost to Your Business with Digital Marketing Company
          </h2>
          <p className="text-gray-700 mb-4">
            <b>Business Gurukull</b> is a marketing and consulting powerhouse
            for mid-segment businesses across India.
          </p>
          <p className="text-gray-700 mb-4">
            With <b>60+ services</b>, a <b>results-first approach</b>, and{" "}
            <b>automation-driven systems</b>, we help ambitious entrepreneurs
            build lead machines and grow revenue consistently.
          </p>
          <p className="text-gray-700">
            Our mission is simple — <b>Help You Win with Systems, Strategy &amp; Speed.</b>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {counters.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-center"
            >
              <div className="text-purple-800 text-4xl mb-2">{item.icon}</div>
              <div className="text-purple-800 text-2xl font-bold">
                {counts[index]}+
              </div>
              <p className="text-gray-800 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
