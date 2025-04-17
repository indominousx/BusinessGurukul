import React from "react";

export default function YourBusiness() {
  return (
    <section className="bg-[url('/your-background.png')] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          Why Your Business Needs Digital Marketing Services?
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition hover:shadow-2xl">
            <div className="bg-purple-600 p-4 rounded-full mb-4 flex items-center justify-center text-white text-2xl">
              💼
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
              Support brand value
            </h3>
            <p className="text-gray-700 mb-4 text-sm text-center">
              Digital marketing firms assist your company in expanding its reach
              and making your offerings stand out in a competitive market.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition hover:shadow-2xl">
            <div className="bg-purple-600 p-4 rounded-full mb-4 flex items-center justify-center text-white text-2xl">
              🤝
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
              Boost user relationships
            </h3>
            <p className="text-gray-700 mb-4 text-sm text-center">
              Our analytics helps to dig out the crucial and concise user needs
              and help you target the potential audience on the receiving end.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition hover:shadow-2xl">
            <div className="bg-purple-600 p-4 rounded-full mb-4 flex items-center justify-center text-white text-2xl">
              🚀
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
              Drive more traffic
            </h3>
            <p className="text-gray-700 mb-4 text-sm text-center">
              Digital marketing agency helps to propel multiple cross-channel
              business opportunities to enable exceptional user experience.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition hover:shadow-2xl">
            <div className="bg-purple-600 p-4 rounded-full mb-4 flex items-center justify-center text-white text-2xl">
              📈
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
              Improve ROI
            </h3>
            <p className="text-gray-700 mb-4 text-sm text-center">
              Our strategies are designed to maximize your return on investment
              by targeting the right audience with precision.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition hover:shadow-2xl">
            <div className="bg-purple-600 p-4 rounded-full mb-4 flex items-center justify-center text-white text-2xl">
              🌐
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
              Expand global reach
            </h3>
            <p className="text-gray-700 mb-4 text-sm text-center">
              Leverage digital platforms to connect with audiences worldwide and
              grow your business beyond borders.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition hover:shadow-2xl">
            <div className="bg-purple-600 p-4 rounded-full mb-4 flex items-center justify-center text-white text-2xl">
              📊
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
              Data-driven insights
            </h3>
            <p className="text-gray-700 mb-4 text-sm text-center">
              Utilize analytics to make informed decisions and optimize your
              marketing strategies for better results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
