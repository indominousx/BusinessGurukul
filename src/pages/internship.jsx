import React from "react";
import { Users, Star, ArrowRight, GraduationCap, Clock, Target, Award } from "lucide-react";

export default function Internship() {
  return (
    <div className="bg-purple-50 min-h-screen w-full">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-green-600 to-blue-600 py-16 px-4 md:px-16 flex items-center" style={{minHeight: '350px'}}>
        <div className="max-w-3xl text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Internship at Business Gurukull</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Kickstart your career with hands-on experience, mentorship, and real projects. Learn from industry experts and grow with us.
          </p>
          <button className="inline-block bg-orange-500 hover:bg-orange-600 font-bold px-8 py-4 rounded-full shadow transition text-lg text-white">
            Start Your Journey
          </button>
        </div>
      </div>

      {/* What You'll Gain Section */}
      <section className="w-full py-12 px-4 md:px-12 bg-white">
        <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">What You'll Gain</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-green-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">👨‍🏫</div>
            <h3 className="text-2xl font-bold text-green-700 mb-4">Expert Mentorship</h3>
            <p className="text-gray-700">Learn from experienced professionals who will guide your growth and development.</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-2xl font-bold text-green-700 mb-4">Real Projects</h3>
            <p className="text-gray-700">Work on live projects that make a real impact on our clients' businesses.</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold text-green-700 mb-4">Skill Workshops</h3>
            <p className="text-gray-700">Participate in regular training sessions to enhance your technical and soft skills.</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-2xl font-bold text-green-700 mb-4">Collaborative Culture</h3>
            <p className="text-gray-700">Experience an inclusive environment where every voice matters and innovation thrives.</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-green-700 mb-4">Career Opportunities</h3>
            <p className="text-gray-700">Potential for full-time offers and long-term career growth within our organization.</p>
          </div>
          <div className="bg-green-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-green-700 mb-4">Learning Resources</h3>
            <p className="text-gray-700">Access to premium tools, courses, and resources to accelerate your learning.</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <div className="w-full flex items-center justify-start py-20 px-4 md:px-16 relative bg-gradient-to-r from-blue-900 to-green-800">
        <div className="bg-white bg-opacity-95 rounded-2xl shadow-2xl p-10 max-w-2xl ml-0 md:ml-12">
          <p className="text-xl text-gray-900 mb-6">
            "My internship at Business Gurukull was transformative. I learned more in 6 months than I did in 2 years of college. The mentorship and real project experience prepared me perfectly for my career."
          </p>
          <p className="text-xl font-bold text-green-600 mt-4">
            — Former Intern, Now Full-time Employee
          </p>
        </div>
      </div>

      {/* Internship Programs Section */}
      <section className="w-full py-12 px-4 md:px-12 bg-orange-50">
        <h2 className="text-4xl font-bold text-orange-700 mb-8 text-center">Internship Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-500" />
              Summer Internship
            </h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-center gap-2"><span className="text-blue-600">•</span> 8-12 weeks duration</li>
              <li className="flex items-center gap-2"><span className="text-blue-600">•</span> Full-time engagement</li>
              <li className="flex items-center gap-2"><span className="text-blue-600">•</span> Stipend provided</li>
              <li className="flex items-center gap-2"><span className="text-blue-600">•</span> Certificate of completion</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Clock className="w-6 h-6 text-green-500" />
              Part-time Internship
            </h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-center gap-2"><span className="text-green-600">•</span> 3-6 months duration</li>
              <li className="flex items-center gap-2"><span className="text-green-600">•</span> Flexible hours</li>
              <li className="flex items-center gap-2"><span className="text-green-600">•</span> Remote options available</li>
              <li className="flex items-center gap-2"><span className="text-green-600">•</span> Performance-based rewards</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 px-4 md:px-16 bg-white flex flex-col items-center">
        <h2 className="text-4xl font-bold text-green-700 mb-8 text-center">Internship Success</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-6xl text-center">
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-4">🎓</span>
            <span className="text-4xl font-extrabold mb-2 text-green-700">100+</span>
            <span className="text-lg text-gray-700">Interns Trained</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-4">💼</span>
            <span className="text-4xl font-extrabold mb-2 text-green-700">60%</span>
            <span className="text-lg text-gray-700">Full-time Offers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-4">⭐</span>
            <span className="text-4xl font-extrabold mb-2 text-green-700">4.8/5</span>
            <span className="text-lg text-gray-700">Satisfaction Rate</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl mb-4">🚀</span>
            <span className="text-4xl font-extrabold mb-2 text-green-700">12+</span>
            <span className="text-lg text-gray-700">Departments</span>
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="w-full py-12 px-4 md:px-12 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-700 mb-8">How to Apply</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2">
              <Target className="w-6 h-6 text-green-500" />
              Ready to Start Your Journey?
            </h3>
            <div className="text-lg space-y-4 text-gray-700 mb-8">
              <p className="flex items-center justify-center gap-2">
                <span className="text-orange-600 font-bold text-2xl">👉</span> Send your resume and a brief statement about your interests to <a href="mailto:careers@businessgurukull.com" className="text-orange-600 font-semibold hover:underline">careers@businessgurukull.com</a>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-orange-600 font-bold text-2xl">👉</span> Subject Line: Internship Application - [Your Name]
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-orange-600 font-bold text-2xl">👉</span> Include: Resume, Cover Letter, Portfolio (if applicable)
              </p>
            </div>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg flex items-center gap-2 mx-auto">
              Start Your Journey <ArrowRight className="w-6 h-6" />
            </button>
            <p className="mt-6 text-xl font-semibold text-green-800">We look forward to helping you launch your career!</p>
          </div>
        </div>
      </section>
    </div>
  );
}