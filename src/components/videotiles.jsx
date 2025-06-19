import React from "react";
import {
  Film,
  Mic,
  ScissorsSquare,
  Youtube,
  Instagram,
  Target,
} from "lucide-react"; // Optional: Lucide icons

const videoFeatures = [
  {
    title: "Script Writing",
    description: "Persuasive scripts tailored for your audience and goal.",
    icon: <Film className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Voiceover & Dubbing",
    description: "Studio-quality voiceovers in multiple languages and tones.",
    icon: <Mic className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Editing & Post Production",
    description:
      "Engaging cuts, transitions, and effects to keep viewers hooked.",
    icon: <ScissorsSquare className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Platform-Optimized Formats",
    description: "Videos crafted for YouTube, Reels, Shorts, and more.",
    icon: <Youtube className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Reel/Short Creation",
    description: "Snackable content with quick hooks and clear CTAs.",
    icon: <Instagram className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Ad Campaign Targeting",
    description: "Precision-targeted video ads to maximize ROI.",
    icon: <Target className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Corporate Video Creation",
    description:
      "Share your brand story, values, and mission through professional videos.",
    icon: <Film className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Digital Ads Creation",
    description:
      "Develop high-converting ads for social media, search engines, and display networks.",
    icon: <Target className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Reels Video Creation",
    description:
      "Craft engaging short-form videos for platforms like Instagram Reels, YouTube Shorts, and more.",
    icon: <Instagram className="w-8 h-8 text-pink-500" />,
  },
  {
    title: "Content Management Services",
    description:
      "Plan, create, and manage a consistent stream of high-quality content.",
    icon: <ScissorsSquare className="w-8 h-8 text-purple-500" />,
  },
  {
    title: "Documentary Creation",
    description:
      "Produce compelling documentaries that highlight your journey, achievements, or social impact.",
    icon: <Film className="w-8 h-8 text-gray-700" />,
  },
  {
    title: "Podcast Creation Services",
    description:
      "Launch and manage professional podcasts to position yourself as a thought leader.",
    icon: <Mic className="w-8 h-8 text-indigo-500" />,
  },
  {
    title: "Product Shoot Services",
    description:
      "Showcase your products through stunning visuals that highlight quality and value.",
    icon: <Youtube className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: "YouTube Channel Management Services",
    description:
      "Grow your YouTube presence with optimized content strategy and management.",
    icon: <Youtube className="w-8 h-8 text-red-500" />,
  },
];

const VideoServicesFeatures = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Our Video & Ads Services
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {videoFeatures.map((feature, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-5 bg-white rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            <div>{feature.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoServicesFeatures;
