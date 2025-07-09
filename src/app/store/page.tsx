import { ArrowRight, Search, Store } from "lucide-react";
import React from "react";
import Contact from "@/components/Contact";
import Title from "@/components/ui/Title";
import Subtitle from "@/components/ui/Subtitle";
import ReleasesList from "@/components/ui/ReleasesList";

export default function StorePage() {
  return (
    <div className="mt-14 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      {/* Shop Icon */}
      <div className="mb-4">
        <Store className="w-10 h-10 text-orange-500" />
      </div>
      <Title text="Framer & Webflow Templates!" />
      <Subtitle text="Discover Top-rated & In-demand Layouts for Framer & Webflow. Stay ahead of the game with these sought-after layouts." />

      {/* Search Input */}
      <div className="w-full max-w-sm">
        <div className="relative">
          <span className="relative">
            <Search className="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />
          </span>
          <input
            type="text"
            placeholder="Search For Products"
            className="bg-white w-full max-w-xs pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-base bg-transparent placeholder-gray-400"
          />
        </div>
      </div>

      {/* List of Items */}
      <ReleasesList />

      {/* Contact section */}
      <Contact />
    </div>
  );
}
