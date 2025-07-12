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
          src="/about-img.avif"
          alt="About Me"
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
        ></div>
        <p
          className="mt-9 md:mt-16 text-lg font-medium transition-colors duration-200"
          style={{ color: "var(--color-text-heading)" }}
        >
          Benjamin Stewart
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
          Benjamin Stewart
        </span>
        , a Webflow and Framer designer. I specialize in crafting visually
        stunning websites and interactive prototypes. With Webflow, I bring
        designs to life, focusing on responsiveness and seamless user
        experiences. Framer, on the other hand, unleashes my creativity,
        allowing me to create captivating interactive prototypes that push UI
        boundaries.
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
        I&apos;m all about blending aesthetics and functionality to deliver
        exceptional designs. From creating user-friendly interfaces to exploring
        cutting-edge interactions, I&apos;m passionate about innovation.
        Let&apos;s connect and take your web and interface designs to the next
        level together. Get ready for stunning visuals and immersive user
        experiences!
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
