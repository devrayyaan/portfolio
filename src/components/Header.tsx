"use client";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="font-dm-sans flex items-center justify-between flex-nowrap relative py-[7px] pl-[7px] pr-[30px] border border-[#eeeeee] rounded-[100px] w-full h-auto">
      <div className="flex items-center gap-[15px]">
        <div className="w-[50px] h-[50px] rounded-full bg-[#dddddd]"></div>
        <div className=" font-medium">
          <p className="lg:text-lg">Rayyaan Nauman</p>
          <p className="text-xs text-[#707070]">Web Developer</p>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-[10px]">
        <motion.div
          className="w-[10px] h-[10px] rounded-full bg-green-500"
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
        <div className="text-[13px] font-medium text-[#707070]">
          <p>Available for amazing projects</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
