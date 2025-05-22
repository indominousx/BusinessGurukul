import React from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = React.useState(null);
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16 px-6 md:px-20">
      <div className="max-w-screen-xl mx-auto shadow-lg rounded-lg bg-white p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            {
              question: "How soon will I start getting leads?",
              answer: "Usually within 5-10 days of campaign launch.",
            },
            {
              question: "Do you provide content and ads?",
              answer: "Yes, we provide creatives, videos, and captions.",
            },
            {
              question: "Is there a minimum ad budget?",
              answer: "We recommend ₹15,000–₹50,000/month for results.",
            },
            {
              question: "What’s included in the free strategy call?",
              answer: "Audit of your current marketing + custom plan.",
            },
            {
              question: "Do you manage the CRM and follow-ups?",
              answer: "Yes, we help set up CRM and automation.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className={`border-b pb-4 cursor-pointer transition-all duration-300 ${
                activeIndex === index ? "bg-blue-50 rounded-lg p-4" : ""
              }`}
              onClick={() => toggleAnswer(index)}
            >
              <h3
                className={`text-xl font-semibold transition-colors duration-300 ${
                  activeIndex === index ? "text-blue-600" : "text-gray-800"
                }`}
              >
                {faq.question}
              </h3>
              {activeIndex === index && (
                <p className="text-gray-700 mt-2 transition-opacity duration-300">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
