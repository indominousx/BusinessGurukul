import React from "react";
import Semrush from "../assets/images/semrush.png";
import Ahrefs from "../assets/images/Ahrefs.png";
// import GoogleAnalytics from "../assets/images/google-analytics.png";
import ScreamingFrog from "../assets/images/screaming-frog.png";
import GoogleTrends from "../assets/images/google-trends.png";
import Canva from "../assets/images/canva-1.png";

export default function MarketingServices() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-800">
          Popular Tools that Power Our Digital Marketing Services
        </h2>
        <p className="text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Our digital marketing agency leverages cutting-edge tools &
          technologies to achieve your business goals. By incorporating trending
          technologies, we ensure your platform performs better, driving
          increased traffic to your website.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <img src={Semrush} alt="Semrush" className="mx-auto h-16 mb-6" />
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              Semrush
            </h3>
            <p className="text-gray-600">
              An all-in-one digital marketing tool to perform a comprehensive
              technical SEO audit and improve SEO strategy for better business
              outcomes and growth.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <img src={Ahrefs} alt="Ahrefs" className="mx-auto h-16 mb-6" />
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              Ahrefs
            </h3>
            <p className="text-gray-600">
              Exclusively designed for digital marketers, this software contains
              tools for site audits, competitor analysis, keyword research, link
              building, and rank tracking.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <img
              src="/path-to-your-icon/google-analytics.png"
              alt="Google Analytics"
              className="mx-auto h-16 mb-6"
            />
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              Google Analytics
            </h3>
            <p className="text-gray-600">
              The premier choice of digital marketing experts providing
              actionable insights into how your audience is engaging with your
              website and applications.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <img
              src={ScreamingFrog}
              alt="Screaming Frog SEO"
              className="mx-auto h-16 mb-6"
            />
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              Screaming Frog SEO
            </h3>
            <p className="text-gray-600">
              A user-friendly SEO crawling tool that provides useful SEO-related
              information about your site to tweak your SEO strategy.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <img
              src={GoogleTrends}
              alt="Google Trends"
              className="mx-auto h-16 mb-6"
            />
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">
              Google Trends
            </h3>
            <p className="text-gray-600">
              A tool that helps us provide the best digital marketing service to
              identify trends and popular search queries in Google Search.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <img src={Canva} alt="Canva" className="mx-auto h-16 mb-6" />
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Canva</h3>
            <p className="text-gray-600">
              A great tool for designing professional-looking graphics, offering
              a vast collection of templates for social posts, infographics, CTA
              buttons, etc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
