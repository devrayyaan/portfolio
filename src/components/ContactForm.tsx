"use client";
import { Clock } from "lucide-react";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ContactForm = () => {
  const [type, setType] = useState("General");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="bg-transparent rounded-2xl p-4 md:p-6 md:p-10 w-full mx-auto border transition-colors duration-200"
      style={{
        borderColor: "var(--color-border)",
      }}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div className="flex flex-col items-start md:flex-row md:items-center gap-4">
          <h2
            className="text-lg md:text-xl font-bold mr-2 transition-colors duration-200"
            style={{ color: "var(--color-text-heading)" }}
          >
            Write it here!
          </h2>
          <div
            className="flex gap-2 rounded-lg p-1 transition-colors duration-200"
            style={{ backgroundColor: "var(--color-background-tertiary)" }}
          >
            <button
              className={`cursor-pointer px-4 py-1 rounded text-sm font-medium transition-colors duration-200 ${
                type === "General" ? "border shadow-sm" : "bg-transparent"
              }`}
              style={{
                backgroundColor:
                  type === "General"
                    ? "var(--color-background-secondary)"
                    : "transparent",
                borderColor:
                  type === "General" ? "var(--color-border)" : "transparent",
                color:
                  type === "General"
                    ? "var(--color-text-heading)"
                    : "var(--color-text-muted)",
              }}
              onClick={() => setType("General")}
              type="button"
            >
              General
            </button>
            <button
              className={`cursor-pointer px-4 py-1 rounded text-sm font-medium transition-colors duration-200 ${
                type === "Project" ? "border shadow-sm" : "bg-transparent"
              }`}
              style={{
                backgroundColor:
                  type === "Project"
                    ? "var(--color-background-secondary)"
                    : "transparent",
                borderColor:
                  type === "Project" ? "var(--color-border)" : "transparent",
                color:
                  type === "Project"
                    ? "var(--color-text-heading)"
                    : "var(--color-text-muted)",
              }}
              onClick={() => setType("Project")}
              type="button"
            >
              Project
            </button>
          </div>
        </div>
        <div
          className="hidden lg:flex items-center gap-2 text-sm transition-colors duration-200"
          style={{ color: "var(--color-text-heading)" }}
        >
          <Clock className="w-4 h-4" />
          <span>Average Response Time: 24 Hours or Less</span>
        </div>
      </div>
      <form className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Name"
            className="flex-1 rounded-lg px-4 py-3 outline-none text-sm md:text-base transition-colors duration-200"
            style={{
              backgroundColor: "var(--color-background-tertiary)",
              color: "var(--color-text-body)",
              border: "1px solid var(--color-border)",
            }}
          />
          <input
            type="email"
            placeholder="Email"
            className="flex-1 rounded-lg px-4 py-3 outline-none text-sm md:text-base transition-colors duration-200"
            style={{
              backgroundColor: "var(--color-background-tertiary)",
              color: "var(--color-text-body)",
              border: "1px solid var(--color-border)",
            }}
          />
        </div>
        <textarea
          placeholder="Message"
          rows={6}
          className="w-full rounded-lg px-4 py-3 outline-none resize-none text-sm md:text-base transition-colors duration-200"
          style={{
            backgroundColor: "var(--color-background-tertiary)",
            color: "var(--color-text-body)",
            border: "1px solid var(--color-border)",
          }}
        />
        <div>
          <button
            type="submit"
            className="w-full font-semibold py-4 rounded-xl text-lg transition-colors duration-200 shadow"
            style={{
              backgroundColor:
                type === "General"
                  ? "var(--color-accent)"
                  : "var(--color-primary)",
              color: "var(--color-text-inverse)",
            }}
          >
            Send Message <span className="ml-2">&rarr;</span>
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
