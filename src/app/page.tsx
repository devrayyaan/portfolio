import Divider from "@/components/Divider";
import { ArrowRight, Briefcase, Divide } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[100vh]">
      <div className="pt-[57px] flex flex-col gap-[12px]">
        <h1 className="text-[34px] font-medium">👋</h1>
        <h1 className="text-3xl font-semibold">
          Hi. I&apos;m Benjamin, a Webflow and Framer Specialist!
        </h1>
        <p className="text-xl text-[#808080] leading-[2em]">
          Hello, I'm Benjamin, an adept professional in Webflow and Framer.
          Experienced in crafting responsive websites using visual editing
          software like Webflow. Accomplished in creating lively websites with
          Framer.
        </p>
        <div className="flex items-center gap-[20px] mt-2">
          <button className="flex items-center justify-center gap-2 rounded-[10px] cursor-pointer p-[13px_30px_13px_30px] bg-[#F45D22] text-white font-medium">
            <span>Start a project</span> <ArrowRight className="w-4 h-4" />
          </button>
          <button className="flex items-center justify-center gap-2 rounded-[10px] cursor-pointer p-[13px_30px_13px_30px] bg-[#007BFF] text-white font-medium">
            <span>About Me</span> <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <Divider className="mt-16 mb-10" />
      <div className="">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-[#F45D22]" />
            <h3 className="text-xl font-medium">Latest Work</h3>
          </div>
          <button className=" flex items-center justify-center gap-2  cursor-pointer text-black">
            <span>View All</span> <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
