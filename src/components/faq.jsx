import React, { useRef } from "react";
import { FaChevronDown } from "react-icons/fa"; // install with: npm install react-icons

export default function FAQ() {
  const [activeIndex, setActiveIndex] = React.useState(null);
  const answerRefs = useRef([]);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What type of businesses do you work with?",
      answer:
        "We work primarily with mid-segment businesses having a turnover of ₹10 lakhs to ₹10 crores across various industries. Whether you're a startup or a growing company, we customize our solutions to your specific business stage and goals.",
    },
    {
      question: "Do you offer complete digital marketing services or individual services?",
      answer:
        "We offer both. You can opt for a comprehensive 360° digital marketing solution or choose individual services like lead generation, social media marketing, SEO, email marketing, etc., based on your current needs.",
    },
    {
      question: "How do you ensure that your marketing campaigns bring real results?",
      answer:
        "Our strategies are always data-driven, KPI-focused, and performance-oriented. We start with deep market research, set clear goals (like leads or conversions), and continuously optimize using analytics and real-time performance tracking.",
    },
    {
      question: "What is your process for starting a project with a new client?",
      answer:
        "We follow a structured onboarding process:\n1. Discovery meeting\n2. Business audit\n3. Custom strategy proposal\n4. Execution roadmap setup\n5. Kickoff and tracking setup",
    },
    {
      question: "Can you help us with video content even if we don't have a studio?",
      answer:
        "Yes! We specialize in video and ad creation using stock footage, animation, and remote storytelling techniques, along with on-ground shooting support where needed. We adapt to your requirements and location.",
    },
    {
      question: "How long does it take to develop a website or software?",
      answer:
        "It depends on complexity.\n● Basic websites: 2–4 weeks\n● Custom web apps or CRMs: 6–12 weeks\nWe provide clear timelines after a requirement analysis.",
    },
    {
      question: "What makes your business consulting services unique?",
      answer:
        "Our consulting is execution-focused, not just advisory. We help implement proven systems for sales, marketing, HR, and operations using tools like Zoho, CRM, automations, and SOPs.",
    },
    {
      question: "Are your services customizable as per industry?",
      answer:
        "Absolutely. Every business and industry has unique pain points. We customize campaigns, content, technology, and strategies to suit your sector, audience, and goals.",
    },
    {
      question: "What if we already have an internal marketing or tech team?",
      answer:
        "That's great! We can collaborate with your team as extended partners—filling gaps, bringing strategic expertise, or handling specific parts like ads, automation, or consulting.",
    },
    {
      question: "How do I get started with Business Gurukull?",
      answer:
        "It's simple:\n● Fill out the lead form on our website\n● Our expert team will connect with you for a free consultation\n● We'll understand your needs and propose a solution tailored to your business goals",
    },
  ];

  return (
    <div className="w-full py-8 md:py-12 lg:py-16 px-0">
      <div className="w-full bg-white p-2 sm:p-6 md:p-10 rounded-none shadow-none border-t border-b border-blue-100">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="border-b border-gray-200 cursor-pointer transition-all duration-300 hover:bg-gray-50"
                onClick={() => toggleAnswer(index)}
              >
                <div className="flex justify-between items-start py-4 md:py-6 px-3 md:px-8">
                  <h3
                    className={`text-base sm:text-lg md:text-xl font-semibold transition-all duration-300 flex-1 pr-3 md:pr-4 leading-relaxed ${
                      isOpen ? "text-blue-600" : "text-gray-800"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <FaChevronDown
                    className={`transition-all duration-500 ease-in-out text-blue-600 flex-shrink-0 mt-1 ${
                      isOpen ? "rotate-180 transform" : ""
                    }`}
                    size={16}
                  />
                </div>
                <div
                  ref={el => (answerRefs.current[index] = el)}
                  style={{
                    height: isOpen
                      ? answerRefs.current[index]?.scrollHeight + "px"
                      : "0px",
                    transition: "height 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s cubic-bezier(0.4,0,0.2,1)",
                    opacity: isOpen ? 1 : 0,
                    overflow: "hidden"
                  }}
                >
                  <div className="bg-blue-50 rounded-lg p-3 md:p-4">
                    <p className="text-sm sm:text-base text-gray-700 whitespace-pre-line leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
