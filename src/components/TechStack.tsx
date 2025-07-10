import { Layers } from "lucide-react";
import Link from "next/link";
import React from "react";

const techStack = [
  {
    icon: (
      <img
        src="https://arc.net/_next/static/media/icon.8c3e2e7e.svg"
        alt=""
        className="w-8 h-8"
      />
    ),
    name: "Arc",
    description: "Best Productivity Browser.",
    link: "https://arc.net",
  },
  {
    icon: (
      <img
        src="https://framerusercontent.com/images/Framer-Logo.svg"
        alt=""
        className="w-8 h-8"
      />
    ),
    name: "Framer",
    description: "Build Next Level Websites.",
    link: "https://framer.com",
  },
  {
    icon: (
      <img
        src="https://superhuman.com/images/logo.png"
        alt=""
        className="w-8 h-8 rounded"
      />
    ),
    name: "Superhuman",
    description: "Simple & Powerful Email.",
    link: "https://superhuman.com",
  },
  {
    icon: (
      <img
        src="https://avatars.githubusercontent.com/u/6342852?s=200&v=4"
        alt=""
        className="w-8 h-8 rounded"
      />
    ),
    name: "LemonSqueezy",
    description: "Easy Checkout Solution",
    link: "https://lemonsqueezy.com",
  },
  {
    icon: (
      <img
        src="https://cdn.cultofmac.com/wp-content/uploads/2017/05/things-3-icon.png"
        alt=""
        className="w-8 h-8 rounded"
      />
    ),
    name: "Things 3",
    description: "Manage Daily Tasks.",
    link: "https://things.com",
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
    link: "https://figma.com",
  },
];

const TechStack = () => {
  return (
    <div className="w-full flex flex-col items-center py-12">
      <div className="bg-transparent rounded-2xl border border-gray-300 px-4 py-8 md:p-8 w-full max-w-4xl">
        <div className="flex flex-col items-center mb-6">
          <Layers className="w-8 h-8 text-orange-500 mb-2" />
          <h2 className="bg-gradient-to-r from-gray-800 to-gray-400 bg-clip-text text-2xl md:text-4xl font-bold text-transparent mb-2 text-center">
            My Tech Stack
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {techStack.map((item, idx) => (
            <Link
              key={idx}
              className="hover:bg-gray-100 transition-all duration-300 cursor-pointer flex items-center bg-transparent rounded-xl p-2 px-3 gap-4 border border-gray-200"
              href={item.link}
            >
              <div>{item.icon}</div>
              <div>
                <div className="text-left font-bold text-sm md:text-lg text-gray-900">
                  {item.name}
                </div>
                <div className="text-left text-gray-500 text-xs md:text-sm">
                  {item.description}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/tech-stack"
          className="text-sm text-black font-medium flex items-center gap-1 text-base hover:gap-2 transition-all duration-300"
        >
          View Full Stack <span className="text-lg">→</span>
        </Link>
      </div>
    </div>
  );
};

export default TechStack;
