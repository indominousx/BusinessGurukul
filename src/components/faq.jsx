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
              question: "What services do you offer?",
              answer:
                "We offer a range of digital marketing services including SEO, PPC, social media marketing, and content creation.",
            },
            {
              question: "How can I get started?",
              answer:
                "You can get started by contacting us through our website or giving us a call. We'll schedule a consultation to discuss your needs.",
            },
            {
              question: "What industries do you specialize in?",
              answer:
                "We specialize in various industries including e-commerce, healthcare, technology, and finance.",
            },
            {
              question: "Do you offer customized marketing plans?",
              answer:
                "Yes, we create tailored marketing strategies to meet the unique needs of your business and target audience.",
            },
            {
              question: "What is your pricing structure?",
              answer:
                "Our pricing depends on the services you choose and the scope of your project. Contact us for a detailed quote.",
            },
            {
              question: "How do you measure success?",
              answer:
                "We track key performance indicators (KPIs) such as website traffic, conversion rates, and ROI to measure the success of our campaigns.",
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
