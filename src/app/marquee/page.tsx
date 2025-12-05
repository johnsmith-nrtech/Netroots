"use client";

import React from "react";
import Image from "next/image";
import  MarqueeStrip  from "../marquee/page"; // make sure the path is correct

const clients = [
  { text: "", icon: "/clients/hanif.png" },
  { text: "", icon: "/clients/iasp.png" },
  { text: "", icon: "/clients/ivy.png" },
  { text: "", icon: "/clients/jnj.png" },
  { text: "", icon: "/clients/pain.png" },
];

export default function HomePage() {
  const marqueeItems = [
    { text: "Fast Delivery", icon: "/icons/delivery.png" },
    { text: "Quality Products", icon: "/icons/quality.png" },
    { text: "24/7 Support", icon: "/icons/support.png" },
  ];

  return (
    <div className="space-y-8">
      {/* Text Marquee */}
      <MarqueeStrip
        items={marqueeItems}
        backgroundColor="bg-blue-600"
        textColor="text-white"
      />

      {/* Clients Logo Marquee using MarqueeStrip */}
      <MarqueeStrip
        items={clients}
        backgroundColor="bg-gray-100"
        textColor="text-black"
        className="h-24 md:h-32"
      />

      {/* Optional: if you want the original inline marquee instead of MarqueeStrip */}
      {/* 
      <div className="w-full overflow-hidden bg-gray-100 h-24 md:h-32">
        <div
          className="inline-block whitespace-nowrap animate-marquee space-x-16"
          style={{ animationDuration: "15s" }}
        >
          {[...clients, ...clients].map((clientSrc, i) => (
            <Image
              key={i}
              src={clientSrc}
              alt={`Client logo ${i + 1}`}
              width={120}
              height={64}
              className="inline-block opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
      */}

      {/* Inline style for marquee */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </div>
  );
}
