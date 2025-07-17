import { Layers } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const techStack = [
  {
    icon: <img src="/tech-stack/arc.svg" alt="" className="w-8 h-8" />,
    name: "Arc",
    description: "Best Productivity Browser.",
    link: "https://arc.net",
  },
  {
    icon: <img src="/tech-stack/typescript.svg" alt="" className="w-8 h-8" />,
    name: "TypeScript",
    description: "Best Language for Web Development.",
    link: "https://typescriptlang.org",
  },
  {
    icon: <img src="/tech-stack/nextjs.svg" alt="" className="w-8 h-8" />,
    name: "Next.js",
    description: "Best Framework for Web Development.",
    link: "https://nextjs.org",
  },
  {
    icon: <img src="/tech-stack/react-native.svg" alt="" className="w-8 h-8" />,
    name: "React Native",
    description: "Best Framework for Mobile Development.",
    link: "https://reactnative.dev",
  },
  {
    icon: <img src="/tech-stack/cursor.svg" alt="" className="w-8 h-8" />,
    name: "Cursor",
    description: "Best AI Code Editor.",
    link: "https://cursor.com",
  },
  {
    icon: <img src="/tech-stack/claude-ai.svg" alt="" className="w-8 h-8" />,
    name: "Claude Code",
    description: "Best AI Code Assistant.",
    link: "https://claude.ai",
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
