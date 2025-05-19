import React from "react";

const blogPosts = [
  {
    title: "Top 5 SEO Trends to Watch in 2025",
    excerpt:
      "Search is changing. Here's what businesses must know to stay ahead with their SEO strategies.",
    author: "Priya Verma",
    date: "May 15, 2025",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80", // SEO/analytics
  },
  {
    title: "Case Study: Scaling Ecommerce Through Smart Ads",
    excerpt:
      "See how we helped a growing brand triple its ROAS using platform-specific targeting.",
    author: "Rahul Mehta",
    date: "May 10, 2025",
    image:
      "https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=400&q=80", // Ecommerce/ads
  },
  {
    title: "Why Branding Still Wins in a Performance-Driven World",
    excerpt:
      "Performance metrics matter, but a strong brand builds long-term loyalty and conversion.",
    author: "Meera Joshi",
    date: "May 2, 2025",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // Branding/creativity
  },
];

export default function LatestInsights() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4 sm:px-8 lg:px-24">
      <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-14 tracking-tight">
        Latest Insights
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all bg-white border border-blue-100 group"
          >
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                {post.date}
              </div>
            </div>
            <div className="p-7">
              <h3 className="text-2xl font-bold text-blue-800 mb-3 group-hover:text-purple-700 transition-colors">
                {post.title}
              </h3>
              <p className="text-base text-gray-700 mb-6">{post.excerpt}</p>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg">
                  {post.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <span className="text-sm text-gray-600">
                  By{" "}
                  <span className="font-semibold text-blue-700">
                    {post.author}
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
