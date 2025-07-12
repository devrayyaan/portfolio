import { Layers } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const techStack = [
  {
    icon: (
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/figma-3521426-2944870.png"
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
        src="https://cdn.iconscout.com/icon/free/png-256/figma-3521426-2944870.png"
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
        src="https://cdn.iconscout.com/icon/free/png-256/figma-3521426-2944870.png"
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
        src="https://cdn.iconscout.com/icon/free/png-256/figma-3521426-2944870.png"
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
        src="https://cdn.iconscout.com/icon/free/png-256/figma-3521426-2944870.png"
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
      <div
        className="bg-transparent rounded-2xl border px-4 py-8 md:p-8 w-full max-w-4xl transition-colors duration-200"
        style={{
          borderColor: "var(--color-border-strong)",
        }}
      >
        <div className="flex flex-col items-center mb-6">
          <Layers
            className="w-8 h-8 mb-2 transition-colors duration-200"
            style={{ color: "var(--color-primary)" }}
          />
          <h2
            className="text-2xl md:text-4xl font-bold mb-2 text-center transition-colors duration-200"
            style={{ color: "var(--color-text-heading)" }}
          >
            My Tech Stack
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {techStack.map((item, idx) => (
            <Link
              key={idx}
              className="hover:bg-[var(--color-background-tertiary)] transition-all duration-300 cursor-pointer flex items-center bg-transparent rounded-xl p-2 px-3 gap-4 border transition-colors duration-200"
              style={{
                borderColor: "var(--color-border)",
              }}
              href={item.link}
            >
              <div>{item.icon}</div>
              <div>
                <div
                  className="text-left font-bold text-sm md:text-lg transition-colors duration-200"
                  style={{ color: "var(--color-text-heading)" }}
                >
                  {item.name}
                </div>
                <div
                  className="text-left text-xs md:text-sm transition-colors duration-200"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {item.description}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/tech-stack"
          className="text-sm font-medium flex items-center gap-1 text-base hover:gap-2 transition-all duration-300 transition-colors duration-200 hover:text-[var(--color-primary)]"
          style={{ color: "var(--color-text-heading)" }}
        >
          View Full Stack <span className="text-lg">→</span>
        </Link>
      </div>
    </div>
  );
};

export default TechStack;
