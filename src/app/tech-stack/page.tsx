"use client";
import { Layers } from "lucide-react";
import React, { useRef } from "react";
import Contact from "@/components/Contact";
import Divider from "@/components/Divider";
import Title from "@/components/ui/Title";
import Subtitle from "@/components/ui/Subtitle";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
  {
    icon: <img src="/tech-stack/figma.svg" alt="" className="w-8 h-8" />,
    name: "Figma",
    description: "Best Design Tool.",
    link: "https://figma.com",
  },
  {
    icon: <img src="/tech-stack/bunjs.svg" alt="" className="w-8 h-8" />,
    name: "Bun.js",
    description: "Best JS Runtime.",
    link: "https://bun.sh",
  },
  {
    icon: <img src="/tech-stack/slack.svg" alt="" className="w-8 h-8" />,
    name: "Slack",
    description: "Okish Communication Tool.",
    link: "https://slack.com",
  },
  {
    icon: (
      <img src="/tech-stack/screen-studio.png" alt="" className="w-8 h-8" />
    ),
    name: "Screen Studio",
    description: "Best Screen Recorder.",
    link: "https://screen.studio",
  },
];

const techGear = [
  {
    name: "MacBook Air",
    image: "/macbook-air.jpeg",
    description:
      "The M3 chip is just mind blowing. Only thing I don't like is the 60hz display.",
  },
  {
    name: "MSI G274QPF",
    image: "/msi-monitor.png",
    description: "A good monitor, but thinking to change it soon.",
  },
  {
    name: "Aula F75",
    image: "/aula-f75.webp",
    description: "The best keyboard for productivity and comfort.",
  },
  {
    name: "AMD Rx 6900XT",
    image: "/rx-6900xt.png",
    description: "A good GPU for gaming and productivity.",
  },
  {
    name: "Iphone 16 Pro",
    image: "/16-pro.webp",
    description: "The best phone for productivity and comfort.",
  },
  {
    name: "PS5",
    image: "/ps5.webp",
    description: "The best console for gaming.",
  },
];

export default function TechStackPage() {
  return (
    <div className="mt-14 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      {/* Shop Icon */}
      <div className="mb-4">
        <Layers
          className="w-10 h-10 transition-colors duration-200"
          style={{ color: "var(--color-primary)" }}
        />
      </div>
      <Title text="My Tech Stack & Gear" />
      <Subtitle text="I use a lot of Tools everyday. but here are some of My top Favorite Tools that I use & Love and I think you should too." />
      <Divider className="mb-10 mt-14" />

      {/* Tech stack */}
      <h2
        className="mr-auto text-xl md:text-2xl font-bold mb-8 transition-colors duration-200"
        style={{ color: "var(--color-text-heading)" }}
      >
        All My Favorite Apps!
      </h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {techStack.map((item, idx) => {
          return <TechStackItem key={idx} item={item} />;
        })}
      </div>

      <Divider className="my-10" />

      {/* Tech Gear */}
      <h2
        className="mr-auto text-xl md:text-2xl font-bold transition-colors duration-200"
        style={{ color: "var(--color-text-heading)" }}
      >
        All My Gear Items!
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full mb-14">
        {techGear.map((item, idx) => {
          return <TechGearItem key={idx} item={item} />;
        })}
      </div>

      {/* Contact section */}
      <Contact />
    </div>
  );
}

function TechStackItem({ item }: { item: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Link href={item.link} target="_blank">
      <motion.div
        ref={ref}
        className="flex items-center hover:bg-[var(--color-background-tertiary)] cursor-pointer bg-transparent rounded-xl p-2 px-3 gap-4 border transition-colors duration-200"
        style={{
          borderColor: "var(--color-border)",
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
        <div>{item.icon}</div>
        <div>
          <div
            className="text-left font-bold lg:text-lg transition-colors duration-200"
            style={{ color: "var(--color-text-heading)" }}
          >
            {item.name}
          </div>
          <div
            className="text-left text-xs lg:text-sm transition-colors duration-200"
            style={{ color: "var(--color-text-muted)" }}
          >
            {item.description}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

function TechGearItem({ item }: { item: any }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <div
        className="rounded-xl border flex flex-col items-center p-4 w-full transition-colors duration-200"
        style={{
          backgroundColor: "var(--color-background-secondary)",
          borderColor: "var(--color-border)",
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          className={`w-36 h-36 object-contain mb-4 rounded-lg ${
            item.name === "PS5" ? "scale-[2]" : ""
          }`}
        />
      </div>
      <p
        className="font-semibold text-lg mb-1 mt-2 text-left transition-colors duration-200"
        style={{ color: "var(--color-text-heading)" }}
      >
        {item.name}
      </p>
      <p
        className="text-left text-[13px] w-full transition-colors duration-200"
        style={{ color: "var(--color-text-muted)" }}
      >
        {item.description}
      </p>
    </motion.div>
  );
}
