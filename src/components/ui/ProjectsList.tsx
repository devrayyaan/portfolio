"use client";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getAllProjects } from "@/utils/data";
import Link from "next/link";

export default function ProjectsList() {
  const projects = getAllProjects();

  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {projects.map((project, idx) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });

          return (
            <motion.div
              key={idx}
              ref={ref}
              className="bg-transparent rounded-2xl p-5 flex flex-col h-full border border-gray-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-62 object-cover rounded-xl mb-6"
              />
              <div className="flex gap-2 items-center justify-between mb-4 w-full">
                <h3 className="text-left text-[15px] lg:text-xl font-bold">
                  {project.title}
                </h3>
                <span className="border border-gray-300 bg-gray-100 text-gray-700 text-[10px] lg:text-xs font-medium px-2 py-1 md:px-3 md:py-1 rounded-md">
                  {project.tag.toUpperCase()}
                </span>
              </div>
              <p className="text-sm lg:text-base text-gray-500 mb-8 flex-1 text-left">
                {project.description}
              </p>
              <div className="flex items-center justify-between">
                <Link
                  href={`/projects/${project.slug}`}
                  className="border border-gray-300 flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition"
                >
                  <span className="text-xs lg:text-sm text-gray-800">
                    Learn More
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="border border-gray-200 flex items-center gap-2 p-1 bg-transparent hover:bg-gray-200 text-gray-800 rounded-lg font-medium">
                  <ArrowUpRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
