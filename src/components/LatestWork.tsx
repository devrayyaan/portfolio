import React from "react";
import { ArrowRight, Briefcase } from "lucide-react";
import ProjectsList from "./ui/ProjectsList";
import Link from "next/link";
import { getLimitedProjects } from "@/utils/data";

const LatestWork = () => {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 lg:w-7 lg:h-7 lg:mr-2 mr-1 text-[var(--color-primary)]" />
            <h3 className="text-lg lg:text-2xl font-black">Latest Work</h3>
          </div>
          <Link
            href="/projects"
            className="text-[var(--color-text-body)] flex items-center justify-center gap-2  cursor-pointer text-black"
          >
            <span className="text-sm md:text-base">View All</span>{" "}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <ProjectsList projects={getLimitedProjects()} />
    </>
  );
};

export default LatestWork;
