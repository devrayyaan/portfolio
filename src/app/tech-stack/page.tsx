"use client";
import { Layers } from "lucide-react";
import React from "react";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Divider from "@/components/Divider";

const techStack = [
  {
    icon: (
      <img
        src="https://arc.net/_next/static/media/icon.8c3e2e7e.svg"
        alt="Arc"
        className="w-8 h-8"
      />
    ),
    name: "Arc",
    description: "Best Productivity Browser.",
  },
  {
    icon: (
      <img
        src="https://framerusercontent.com/images/Framer-Logo.svg"
        alt="Framer"
        className="w-8 h-8"
      />
    ),
    name: "Framer",
    description: "Build Next Level Websites.",
  },
  {
    icon: (
      <img
        src="https://superhuman.com/images/logo.png"
        alt="Superhuman"
        className="w-8 h-8 rounded"
      />
    ),
    name: "Superhuman",
    description: "Simple & Powerful Email.",
  },
  {
    icon: (
      <img
        src="https://avatars.githubusercontent.com/u/6342852?s=200&v=4"
        alt="LemonSqueezy"
        className="w-8 h-8 rounded"
      />
    ),
    name: "LemonSqueezy",
    description: "Easy Checkout Solution",
  },
  {
    icon: (
      <img
        src="https://cdn.cultofmac.com/wp-content/uploads/2017/05/things-3-icon.png"
        alt="Things 3"
        className="w-8 h-8 rounded"
      />
    ),
    name: "Things 3",
    description: "Manage Daily Tasks.",
  },
  {
    icon: (
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/figma-3521426-2944870.png"
        alt="Figma"
        className="w-8 h-8 rounded"
      />
    ),
    name: "Figma",
    description: "Best Design Tool.",
  },
];

const techGear = [
  {
    name: "MacBook Pro",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311040407",
    description:
      "The M2 Max Chip is just mind blowing with that 120Hz display.",
  },
  {
    name: "LG 32UN650",
    image:
      "https://www.lg.com/us/images/monitors/md07501316/gallery/desktop-01.jpg",
    description: "A good monitor, but thinking to change it soon.",
  },
  {
    name: "Magic Keyboard",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3LL_A?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632937848000",
    description: "Minimal, wireless, and reliable.",
  },
  {
    name: "MX Master 3S",
    image:
      "https://resource.logitech.com/w_1200,h_630,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-top-view-graphite.png?v=1",
    description: "The best mouse for productivity and comfort.",
  },
  {
    name: "Magic Keyboard",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3LL_A?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632937848000",
    description: "Minimal, wireless, and reliable.",
  },
  {
    name: "MX Master 3S",
    image:
      "https://resource.logitech.com/w_1200,h_630,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-top-view-graphite.png?v=1",
    description: "The best mouse for productivity and comfort.",
  },
];

export default function TechStackPage() {
  return (
    <div className="mt-14 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      {/* Shop Icon */}
      <div className="mb-4">
        <Layers className="w-10 h-10 text-orange-500" />
      </div>
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        My Tech Stack & Gear
      </h1>
      {/* Subtitle */}
      <p className="text-gray-500 text-lg font-medium max-w-2xl mb-10 mt-2 leading-relaxed">
        I use a lot of Tools everyday. but here are some of My top Favorite
        Tools that I use & Love and I think you should too.
      </p>

      <Divider className="mb-10 mt-14" />

      {/* Tech stack */}
      <h2 className="mr-auto text-xl md:text-2xl font-bold mb-8">
        All My Favorite Apps!
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {techStack.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center  bg-transparent rounded-xl p-2 px-3 gap-4 border border-gray-200"
          >
            <div>{item.icon}</div>
            <div>
              <div className="text-left font-bold text-lg text-gray-900">
                {item.name}
              </div>
              <div className="text-left text-gray-500 text-sm">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Divider className="my-10" />

      {/* Tech Gear */}
      <h2 className="mr-auto text-xl md:text-2xl font-bold">
        All My Gear Items!
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full mb-14">
        {techGear.map((item) => (
          <div className="flex flex-col w-full">
            <div
              key={item.name}
              className="bg-white rounded-xl border border-gray-200 flex flex-col items-center p-4 w-full"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-contain mb-4 rounded-lg"
              />
            </div>
            <p className="font-semibold text-lg mb-1 mt-2 text-left">
              {item.name}
            </p>
            <p className="text-left text-gray-500 text-[13px] w-full">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Contact section */}
      <Contact />
    </div>
  );
}
