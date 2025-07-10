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
              className="bg-transparent rounded-2xl p-5 flex flex-col h-full border transition-colors duration-200"
              style={{
                borderColor: "var(--color-border-strong)",
              }}
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
                <h3
                  className="text-left text-[15px] lg:text-xl font-bold transition-colors duration-200"
                  style={{ color: "var(--color-text-heading)" }}
                >
                  {project.title}
                </h3>
                <span
                  className="border text-[10px] lg:text-xs font-medium px-2 py-1 md:px-3 md:py-1 rounded-md transition-colors duration-200"
                  style={{
                    borderColor: "var(--color-border-strong)",
                    backgroundColor: "var(--color-background-tertiary)",
                    color: "var(--color-text-body)",
                  }}
                >
                  {project.tag.toUpperCase()}
                </span>
              </div>
              <p
                className="text-sm lg:text-base mb-8 flex-1 text-left transition-colors duration-200"
                style={{ color: "var(--color-text-muted)" }}
              >
                {project.description}
              </p>
              <div className="flex items-center justify-between">
                <Link
                  href={`/projects/${project.slug}`}
                  className="border flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors duration-200 hover:bg-[var(--color-background-tertiary)]"
                  style={{
                    borderColor: "var(--color-border-strong)",
                    backgroundColor: "var(--color-background-tertiary)",
                    color: "var(--color-text-body)",
                  }}
                >
                  <span
                    className="text-xs lg:text-sm transition-colors duration-200"
                    style={{ color: "var(--color-text-body)" }}
                  >
                    Learn More
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  className="border flex items-center gap-2 p-1 bg-transparent rounded-lg font-medium transition-colors duration-200 hover:bg-[var(--color-background-tertiary)]"
                  style={{
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-body)",
                  }}
                >
                  <ArrowUpRight
                    className="w-5 h-5 transition-colors duration-200"
                    style={{ color: "var(--color-text-muted)" }}
                  />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
