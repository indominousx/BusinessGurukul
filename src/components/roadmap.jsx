import React from "react";

export default function Roadmap() {
  return (
    <div className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Roadmap to Digital Success
          </h2>
          <p className="text-gray-700 mb-4">
            Our roadmap outlines the steps we take to ensure your digital
            marketing success, from strategy development to execution and
            analysis.
          </p>
          <p className="text-gray-700">
            We are committed to delivering results that matter to your business.
          </p>
        </div>

        {/* Right Side: Roadmap Steps */}
        <div className="relative">
          {/* Line connecting the steps */}
          <div className="absolute left-5 top-5 bottom-5 w-1 bg-blue-500"></div>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-center relative">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold z-10">
                1
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Strategy Development
                </h3>
                <p className="text-gray-700">
                  We analyze your business needs and create a tailored strategy.
                </p>
              </div>
            </div>
            <div className="flex items-center relative">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold z-10">
                2
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Content Creation
                </h3>
                <p className="text-gray-700">
                  Engaging content is crafted to connect with your audience.
                </p>
              </div>
            </div>
            <div className="flex items-center relative">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold z-10">
                3
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Campaign Execution
                </h3>
                <p className="text-gray-700">
                  We launch and manage campaigns across multiple platforms.
                </p>
              </div>
            </div>
            <div className="flex items-center relative">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold z-10">
                4
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Performance Analysis
                </h3>
                <p className="text-gray-700">
                  Results are measured and strategies are refined for
                  improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
