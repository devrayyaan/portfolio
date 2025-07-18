"use client";
import Divider from "@/components/Divider";
import LatestWork from "@/components/LatestWork";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import { ArrowRight } from "lucide-react";
import HappyCustomers from "@/components/HappyCustomers";
import TechStack from "@/components/TechStack";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-3 lg:p-0 min-h-[100vh]">
      <div className="pt-[57px] flex flex-col gap-[12px]">
        <motion.h1
          className="w-[50px] text-4xl font-medium"
          animate={{
            rotate: [0, 14, -8, 14, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeatDelay: 2,
          }}
        >
          👋
        </motion.h1>
        <h1 className="text-xl md:text-3xl font-semibold">
          Hi. I&apos;m Rayyaan, a Full Stack Web and App Developer!
        </h1>
        <p className="text-md md:text-xl text-gray-500 leading-relaxed lg:leading-[2em]">
          Hello, I&apos;m Rayyaan, a skilled full stack developer specializing
          in modern web and mobile applications. Expert in React, Next.js,
          Node.js, and database technologies. Passionate about creating
          scalable, user-friendly solutions that drive business growth and
          deliver exceptional user experiences.
        </p>
        <div className="flex flex-col lg:flex-row items-start gap-2 lg:items-center lg:gap-[20px] mt-2">
          <Link href="/contact">
            <motion.button
              className="flex items-center justify-center gap-2 rounded-[10px] hover:bg-[var(--color-primary-hover)] transition-colors duration-400 cursor-pointer p-2.5 px-6 bg-[var(--color-primary)] text-white font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span>Start a project</span> <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
          <Link href="/about">
            <motion.button
              className="flex items-center justify-center gap-2 rounded-[10px]  cursor-pointer p-2.5 px-6 border border-[var(--color-border)] bg-[var(--color-background-tertiary)] text-[var(--color-text-body)] transition-colors duration-200 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <span>About Me</span> <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </div>
      </div>

      <Divider className="mt-16 mb-12" />
      <LatestWork />

      <Divider className="mt-2 mb-4" />
      <HappyCustomers />

      <TechStack />
      <FAQ />
      <Contact />
    </div>
  );
}