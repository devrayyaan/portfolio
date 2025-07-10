import { ArrowRight, Store } from "lucide-react";
import React from "react";
import ReleasesList from "./ui/ReleasesList";
import Link from "next/link";

const LatestReleases = () => {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Store className="w-5 h-5 lg:w-7 lg:h-7 lg:mr-2 mr-1 text-[#F45D22]" />
            <h3 className="text-lg lg:text-2xl font-black">Latest Releases</h3>
          </div>
          <Link
            href="/store"
            className=" flex items-center justify-center gap-2  cursor-pointer text-black"
          >
            <span className="text-sm md:text-base">View All</span>{" "}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
      <ReleasesList />
    </>
  );
};

export default LatestReleases;
