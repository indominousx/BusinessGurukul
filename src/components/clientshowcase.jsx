import React from "react";
import worldmap from "../assets/images/61772.jpg";

export default function ClientShowcase() {
  return (
    <div
      className="bg-gradient-to-b from-gray-100 to-white py-16"
      style={{
        backgroundImage: `url(${worldmap})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: "0.95",
        animation: "fadeIn 2s ease-in-out",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Some of Our Clients
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center justify-items-center">
          {[
            "jeans.png",
            "hero.png",
            "iplur.png",
            "partap.png",
            "re.png",
            "pvr.png",
            "eicher.png",
            "haldirams.png",
            "relaxo.png",
            "morphyrichards.png",
            "pernodricard.png",
            "oyas.png",
          ].map((logo, i) => (
            <img
              key={i}
              src={`/clients/${logo}`}
              alt="Client Logo"
              className="max-h-12 object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
      <style>
        {`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 0.95;
                    }
                }
            `}
      </style>
    </div>
  );
}
