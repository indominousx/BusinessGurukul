import React from "react";

export default function Hiring() {
  return (
    <div className="max-w-4xl mx-auto pt-24 pb-16 px-4 bg-gradient-to-br from-blue-50 to-white text-gray-900 rounded-lg shadow-xl">
      <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-blue-900 leading-tight">Grow Your Career. Build the Future.</h1>
      <p className="mb-6 text-lg leading-relaxed">
        At Business Gurukull, we believe that our success begins with the passion, creativity, and commitment of our people. We are on a mission to empower businesses with innovative marketing, technology, video creation, and consulting solutions — and we're looking for dynamic individuals to join us on this journey.
      </p>
      <h2 className="text-3xl font-bold mt-10 mb-4 text-purple-700">Why Work with Us?</h2>
      <ul className="list-disc pl-8 mb-6 space-y-2 text-lg text-gray-700">
        <li><span className="font-semibold">Dynamic Work Culture:</span> We encourage new ideas, innovation, and continuous learning.</li>
        <li><span className="font-semibold">Career Growth Opportunities:</span> As we grow, you grow. We believe in promoting from within and helping you build a career, not just a job.</li>
        <li><span className="font-semibold">Skill Development:</span> Regular training, workshops, and mentoring to sharpen your skills and expand your potential.</li>
        <li><span className="font-semibold">Meaningful Work:</span> Get the chance to work on real projects that make a real difference to our clients' businesses.</li>
        <li><span className="font-semibold">Work-Life Balance:</span> Flexible working models that help you balance your personal and professional life.</li>
        <li><span className="font-semibold">Reward and Recognition:</span> Your contributions will never go unnoticed. We celebrate success together.</li>
      </ul>
      <h2 className="text-3xl font-bold mt-10 mb-4 text-purple-700">Who We're Looking For</h2>
      <ul className="list-disc pl-8 mb-6 space-y-2 text-lg text-gray-700">
        <li><span className="font-semibold">Proactive and self-driven</span></li>
        <li><span className="font-semibold">Passionate about learning and growth</span></li>
        <li><span className="font-semibold">Creative problem-solvers</span></li>
        <li><span className="font-semibold">Excellent communicators and team players</span></li>
        <li><span className="font-semibold">Committed to delivering quality and excellence</span></li>
      </ul>
      <h2 className="text-3xl font-bold mt-10 mb-4 text-purple-700">Life at Business Gurukull</h2>
      <ul className="list-disc pl-8 mb-6 space-y-2 text-lg text-gray-700">
        <li><span className="font-semibold">Collaboration beats competition.</span></li>
        <li><span className="font-semibold">Learning is a continuous journey.</span></li>
        <li><span className="font-semibold">Innovation is encouraged, not restricted.</span></li>
        <li><span className="font-semibold">Every voice matters, no matter the designation.</span></li>
        <li><span className="font-semibold">We work hard, celebrate harder, and grow fastest.</span></li>
      </ul>
      <blockquote className="italic text-xl text-gray-700 border-l-4 border-orange-500 pl-4 py-2 my-10">
        "At Business Gurukull, you're not just another employee — you're a valued partner in our mission to transform businesses."
      </blockquote>
      <h2 className="text-3xl font-bold mt-10 mb-4 text-purple-700">How to Apply</h2>
      <div className="text-lg space-y-3 text-gray-700">
        <p>Ready to take the next step in your career?</p>
        <p className="flex items-center gap-2">
          <span className="text-orange-600 font-bold text-2xl">👉</span> Send your updated resume to <a href="mailto:careers@businessgurukull.com" className="text-orange-600 font-semibold hover:underline">careers@businessgurukull.com</a>
        </p>
        <p className="flex items-center gap-2">
          <span className="text-orange-600 font-bold text-2xl">👉</span> Subject Line: Application for [Job Title] - [Your Name]
        </p>
        <p className="flex items-center gap-2">
          <span className="text-orange-600 font-bold text-2xl">👉</span> Attach: Resume + (Optional) Portfolio/Work Samples
        </p>
      </div>
      <p className="mt-10 text-xl font-semibold text-center text-blue-800">Join Us and Make Your Mark.</p>
    </div>
  );
}