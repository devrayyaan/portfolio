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
    icon: (
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/figma-3521426-2944870.png"
        alt="Arc"
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
        alt="Framer"
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
        alt="Superhuman"
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
        alt="LemonSqueezy"
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
        alt="Things 3"
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
        <Image
          src={item.image}
          alt={item.name}
          className="w-28 h-28 object-contain mb-4 rounded-lg"
          width={112}
          height={112}
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
