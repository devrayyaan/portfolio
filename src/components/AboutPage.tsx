"use client";
import React from "react";
import Contact from "@/components/Contact";
import TechStack from "@/components/TechStack";
import FAQ from "@/components/FAQ";
import TechGear from "@/components/TechGear";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AboutPage() {
  const firstParagraphRef = useRef(null);
  const secondParagraphRef = useRef(null);
  const isFirstInView = useInView(firstParagraphRef, { once: true });
  const isSecondInView = useInView(secondParagraphRef, { once: true });

  return (
    <div className="mt-14 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      {/* About section */}
      <h1
        className="text-2xl mr-auto md:text-3xl font-bold mb-2 transition-colors duration-200"
        style={{ color: "var(--color-text-heading)" }}
      >
        About Me
      </h1>
      <div className="relative w-full">
        <img
          src="/setup.png"
          alt="Rayyaan Nauman's Developer Setup"
          className="relative w-full h-[150px] md:h-[400px] object-cover rounded-2xl mt-8 border transition-colors duration-200"
          style={{
            borderColor: "var(--color-border)",
          }}
        />
        <div
          className="rounded-full w-16 h-16 md:w-24 md:h-24 border-4 absolute top-37 md:top-95 right-0 left-0 mx-auto transition-colors duration-200"
          style={{
            backgroundColor: "var(--color-background-tertiary)",
            borderColor: "var(--color-background-secondary)",
          }}
        >
          <Image
            src="/profile.png"
            alt="Rayyaan Nauman - Full Stack Developer"
            width={50}
            priority
            height={50}
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        <p
          className="mt-9 md:mt-16 text-lg font-medium transition-colors duration-200"
          style={{ color: "var(--color-text-heading)" }}
        >
          Rayyaan Nauman
        </p>
      </div>

      <motion.p
        ref={firstParagraphRef}
        className="text-left md:text-lg font-medium mb-6 leading-relaxed w-full mt-10 transition-colors duration-200"
        style={{ color: "var(--color-text-muted)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={isFirstInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        Hey, I&apos;m{" "}
        <span
          className="transition-colors duration-200"
          style={{ color: "var(--color-primary)" }}
        >
          Rayyaan Nauman
        </span>
        , a full-stack developer who turns ideas into profitable digital
        products. I specialize in building mobile apps and web applications that
        don&apos;t just look great, they drive real business results. With React
        Native, I create apps that work seamlessly across Android and iOS,
        giving you maximum reach with minimum hassle.
      </motion.p>
      <motion.p
        ref={secondParagraphRef}
        className="text-left md:text-lg font-medium mb-6 leading-relaxed w-full transition-colors duration-200"
        style={{ color: "var(--color-text-muted)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={isSecondInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        Next.js and TypeScript are my weapons of choice for web development,
        delivering lightning fast websites that convert visitors into customers.
        I&apos;m passionate about combining clean code with smart business
        strategy to build digital solutions that actually grow your revenue.
        From startups to established businesses, I&apos;ve helped 175+ clients
        achieve their goals. Ready to see what we can build together? Let&apos;s
        make it happen.
      </motion.p>

      {/* Tech Stack section */}
      <TechStack />

      {/* FAQ section */}
      <FAQ />

      {/* Tech Gear section */}
      <TechGear />

      {/* Contact section */}
      <Contact />
    </div>
  );
}