"use client";
import Divider from "@/components/Divider";
import LatestWork from "@/components/LatestWork";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import { ArrowRight } from "lucide-react";
import HappyCustomers from "@/components/HappyCustomers";
import TechStack from "@/components/TechStack";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

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
          Hi. I&apos;m Benjamin, a Webflow and Framer Specialist!
        </h1>
        <p className="text-md md:text-xl text-gray-500 leading-relaxed lg:leading-[2em]">
          Hello, I&apos;m Benjamin, an adept professional in Webflow and Framer.
          Experienced in crafting responsive websites using visual editing
          software like Webflow. Accomplished in creating lively websites with
          Framer.
        </p>
        <div className="flex flex-col lg:flex-row items-start gap-2 lg:items-center lg:gap-[20px] mt-2">
          <Link href="/contact">
            <motion.button
              className="flex items-center justify-center gap-2 rounded-[10px] cursor-pointer p-2.5 px-6 bg-[#F45D22] text-white font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span>Start a project</span> <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
          <Link href="/about">
            <motion.button
              className="flex items-center justify-center gap-2 rounded-[10px] cursor-pointer p-2.5 px-6 bg-[#007BFF] text-white font-medium"
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
