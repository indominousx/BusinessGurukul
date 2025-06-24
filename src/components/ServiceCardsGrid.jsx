import React from "react";

export default function ServiceCardsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="group bg-white shadow-lg p-6 flex flex-col items-start transition-all duration-300 hover:shadow-2xl rounded-tl-none rounded-tr-[2rem] rounded-bl-[2rem] rounded-br-none hover:rounded-tl-[2rem] hover:rounded-tr-none hover:rounded-bl-none hover:rounded-br-[2rem] border border-gray-200 hover:bg-violet-300 card-animate">
        <div className="bg-purple-600 hover:bg-white p-2 rounded-md mb-4 transition-all duration-300 hover-scale">🔍</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Search Engine Optimization</h3>
        <p className="text-gray-700 mb-4 text-sm">Attain the required website traffic and ranking on the Search Engine Page Results (SERP). Our SEO services help boost leads and conversion rates extensively.</p>
        <a href="#" className="text-red-500 text-sm font-semibold hover:underline transition-all duration-300 hover:text-red-700">Read More</a>
      </div>
      {/* Card 2 */}
      <div className="group bg-white shadow-lg p-6 flex flex-col items-start transition-all duration-300 hover:shadow-2xl rounded-tl-none rounded-tr-[2rem] rounded-bl-[2rem] rounded-br-none hover:rounded-tl-[2rem] hover:rounded-tr-none hover:rounded-bl-none hover:rounded-br-[2rem] border border-gray-200 hover:bg-violet-300 card-animate">
        <div className="bg-purple-600 p-2 rounded-md mb-4 transition-all duration-300 hover-scale">📢</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Social Media Marketing</h3>
        <p className="text-gray-700 mb-4 text-sm">Reach your target audience across numerous platforms. We create engaging and viral campaigns to bring more followers.</p>
        <a href="#" className="text-red-500 text-sm font-semibold hover:underline transition-all duration-300 hover:text-red-700">Read More</a>
      </div>
      {/* Card 3 */}
      <div className="group bg-white shadow-lg p-6 flex flex-col items-start transition-all duration-300 hover:shadow-2xl rounded-tl-none rounded-tr-[2rem] rounded-bl-[2rem] rounded-br-none hover:rounded-tl-[2rem] hover:rounded-tr-none hover:rounded-bl-none hover:rounded-br-[2rem] border border-gray-200 hover:bg-violet-300 card-animate">
        <div className="bg-purple-600 p-2 rounded-md mb-4 transition-all duration-300 hover-scale">🎯</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Paid Marketing Campaigns</h3>
        <p className="text-gray-700 mb-4 text-sm">Increase your business revenue with Paid Marketing Campaigns via Google, Facebook, Instagram, and more.</p>
        <a href="#" className="text-red-500 text-sm font-semibold hover:underline transition-all duration-300 hover:text-red-700">Read More</a>
      </div>
      {/* Card 4 */}
      <div className="group bg-white shadow-lg p-6 flex flex-col items-start transition-all duration-300 hover:shadow-2xl rounded-tl-none rounded-tr-[2rem] rounded-bl-[2rem] rounded-br-none hover:rounded-tl-[2rem] hover:rounded-tr-none hover:rounded-bl-none hover:rounded-br-[2rem] border border-gray-200 hover:bg-violet-300 card-animate">
        <div className="bg-purple-600 p-2 rounded-md mb-4 transition-all duration-300 hover-scale">📈</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Analytics and Reporting</h3>
        <p className="text-gray-700 mb-4 text-sm">Track and measure your marketing performance with our detailed analytics and reporting services.</p>
        <a href="#" className="text-red-500 text-sm font-semibold hover:underline transition-all duration-300 hover:text-red-700">Read More</a>
      </div>
      {/* Card 5 */}
      <div className="group bg-white shadow-lg p-6 flex flex-col items-start transition-all duration-300 hover:shadow-2xl rounded-tl-none rounded-tr-[2rem] rounded-bl-[2rem] rounded-br-none hover:rounded-tl-[2rem] hover:rounded-tr-none hover:rounded-bl-none hover:rounded-br-[2rem] border border-gray-200 hover:bg-violet-300 card-animate">
        <div className="bg-purple-600 p-2 rounded-md mb-4 transition-all duration-300 hover-scale">🛒</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">E-commerce Marketing</h3>
        <p className="text-gray-700 mb-4 text-sm">Boost your online store's sales with our tailored e-commerce marketing strategies.</p>
        <a href="#" className="text-red-500 text-sm font-semibold hover:underline transition-all duration-300 hover:text-red-700">Read More</a>
      </div>
      {/* Card 6 */}
      <div className="group bg-white shadow-lg p-6 flex flex-col items-start transition-all duration-300 hover:shadow-2xl rounded-tl-none rounded-tr-[2rem] rounded-bl-[2rem] rounded-br-none hover:rounded-tl-[2rem] hover:rounded-tr-none hover:rounded-bl-none hover:rounded-br-[2rem] border border-gray-200 hover:bg-violet-300 card-animate">
        <div className="bg-purple-600 p-2 rounded-md mb-4 transition-all duration-300 hover-scale">✉️</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Email Marketing</h3>
        <p className="text-gray-700 mb-4 text-sm">Engage your audience with personalized email campaigns that drive conversions.</p>
        <a href="#" className="text-red-500 text-sm font-semibold hover:underline transition-all duration-300 hover:text-red-700">Read More</a>
      </div>
      {/* Card 7 */}
      <div className="group bg-white shadow-lg p-6 flex flex-col items-start transition-all duration-300 hover:shadow-2xl rounded-tl-none rounded-tr-[2rem] rounded-bl-[2rem] rounded-br-none hover:rounded-tl-[2rem] hover:rounded-tr-none hover:rounded-bl-none hover:rounded-br-[2rem] border border-gray-200 hover:bg-violet-300 card-animate">
        <div className="bg-purple-600 p-2 rounded-md mb-4 transition-all duration-300 hover-scale">📹</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Video Marketing</h3>
        <p className="text-gray-700 mb-4 text-sm">Create compelling video content to captivate your audience and boost engagement.</p>
        <a href="#" className="text-red-500 text-sm font-semibold hover:underline transition-all duration-300 hover:text-red-700">Read More</a>
      </div>
      {/* Card 8 */}
      <div className="group bg-white shadow-lg p-6 flex flex-col items-start transition-all duration-300 hover:shadow-2xl rounded-tl-none rounded-tr-[2rem] rounded-bl-[2rem] rounded-br-none hover:rounded-tl-[2rem] hover:rounded-tr-none hover:rounded-bl-none hover:rounded-br-[2rem] border border-gray-200 hover:bg-violet-300 card-animate">
        <div className="bg-purple-600 p-2 rounded-md mb-4 transition-all duration-300 hover-scale">🌐</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Content Marketing</h3>
        <p className="text-gray-700 mb-4 text-sm">Develop and distribute valuable content to attract and retain your target audience.</p>
        <a href="#" className="text-red-500 text-sm font-semibold hover:underline transition-all duration-300 hover:text-red-700">Read More</a>
      </div>
      {/* Card 9 */}
      <div className="group bg-white shadow-lg p-6 flex flex-col items-start transition-all duration-300 hover:shadow-2xl rounded-tl-none rounded-tr-[2rem] rounded-bl-[2rem] rounded-br-none hover:rounded-tl-[2rem] hover:rounded-tr-none hover:rounded-bl-none hover:rounded-br-[2rem] border border-gray-200 hover:bg-violet-300 card-animate">
        <div className="bg-purple-600 p-2 rounded-md mb-4 transition-all duration-300 hover-scale">🧑‍💼</div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Marketing Consultation</h3>
        <p className="text-gray-700 mb-4 text-sm">Tailor a full-fledged marketing strategy aligned with your business goals.</p>
        <a href="#" className="text-red-500 text-sm font-semibold hover:underline transition-all duration-300 hover:text-red-700">Read More</a>
      </div>
    </div>
  );
} 