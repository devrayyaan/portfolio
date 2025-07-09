import { ArrowRight, Briefcase, Search } from "lucide-react";
import React from "react";
import Contact from "@/components/Contact";
import TechStack from "@/components/TechStack";
import FAQ from "@/components/FAQ";
import TechGear from "@/components/TechGear";

export default function AboutPage() {
  return (
    <div className="mt-14 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      {/* About section */}
      <h1 className="text-2xl mr-auto md:text-3xl font-bold mb-2">About Me</h1>
      <div className="relative w-full">
        <img
          src="/about-img.avif"
          alt="About Me"
          className="relative w-full h-[400px] object-cover rounded-2xl mt-8 border border-gray-200"
        />
        <div className="rounded-full w-24 h-24 bg-gray-300 border-4 border-white absolute top-95 right-0 left-0 mx-auto"></div>
        <p className="mt-16 text-lg font-medium">Benjamin Stewart</p>
      </div>

      <p className="text-left text-gray-500 text-lg font-medium mb-6 leading-relaxed w-full mt-10">
        Hey, I'm <span className="text-black">Benjamin Stewart</span>, a Webflow
        and Framer designer. I specialize in crafting visually stunning websites
        and interactive prototypes. With Webflow, I bring designs to life,
        focusing on responsiveness and seamless user experiences. Framer, on the
        other hand, unleashes my creativity, allowing me to create captivating
        interactive prototypes that push UI boundaries.
      </p>
      <p className="text-left text-gray-500 text-lg font-medium mb-6 leading-relaxed w-full">
        I'm all about blending aesthetics and functionality to deliver
        exceptional designs. From creating user-friendly interfaces to exploring
        cutting-edge interactions, I'm passionate about innovation. Let's
        connect and take your web and interface designs to the next level
        together. Get ready for stunning visuals and immersive user experiences!
      </p>

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
