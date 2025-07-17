"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
  return (
    <div
      className="font-dm-sans flex items-center justify-between flex-nowrap relative py-[7px] pl-[7px] pr-[30px] border rounded-[100px] w-full h-auto transition-colors duration-200"
      style={{
        borderColor: "var(--color-border)",
        backgroundColor: "transparent",
      }}
    >
      <div className="flex items-center gap-[15px]">
        <div
          className="w-[50px] h-[50px] rounded-full transition-colors duration-200"
          style={{ backgroundColor: "var(--color-background-tertiary)" }}
        >
          <Image
            src="/profile.png"
            alt="Profile"
            width={50}
            priority
            height={50}
            className="rounded-full w-full h-full object-cover"
          />
        </div>
        <div className="font-medium">
          <p
            className="lg:text-lg transition-colors duration-200"
            style={{ color: "var(--color-text-heading)" }}
          >
            Rayyaan Nauman
          </p>
          <p
            className="text-xs transition-colors duration-200"
            style={{ color: "var(--color-text-muted)" }}
          >
            Web Developer
          </p>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-[10px]">
        <motion.div
          className="w-[10px] h-[10px] rounded-full"
          style={{ backgroundColor: "var(--color-success)" }}
          animate={{
            opacity: [1, 0.2, 1],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
        ></motion.div>
        <div
          className="text-[13px] font-medium transition-colors duration-200"
          style={{ color: "var(--color-text-muted)" }}
        >
          <p>Available for amazing projects</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
