"use client";
import { Clock } from "lucide-react";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  type: z.enum(["General", "Project"]),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [type, setType] = useState<"General" | "Project">("General");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      type: "General",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      alert("Message sent successfully!");
      reset();
      setType("General");
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      ref={ref}
      className="bg-transparent rounded-2xl p-4 md:p-10 w-full mx-auto border transition-colors duration-200"
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
              onClick={() => {
                setType("General");
                setValue("type", "General");
              }}
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
              onClick={() => {
                setType("Project");
                setValue("type", "Project");
              }}
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
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              className="w-full rounded-lg px-4 py-3 outline-none text-sm md:text-base transition-colors duration-200"
              style={{
                backgroundColor: "var(--color-background-tertiary)",
                color: "var(--color-text-body)",
                border: errors.name
                  ? "1px solid var(--color-danger)"
                  : "1px solid var(--color-border)",
              }}
            />
            {errors.name && (
              <p className="text-sm mt-1" style={{ color: "var(--color-danger)" }}>
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="flex-1">
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="w-full rounded-lg px-4 py-3 outline-none text-sm md:text-base transition-colors duration-200"
              style={{
                backgroundColor: "var(--color-background-tertiary)",
                color: "var(--color-text-body)",
                border: errors.email
                  ? "1px solid var(--color-danger)"
                  : "1px solid var(--color-border)",
              }}
            />
            {errors.email && (
              <p className="text-sm mt-1" style={{ color: "var(--color-danger)" }}>
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <textarea
            placeholder="Message"
            rows={6}
            {...register("message")}
            className="w-full rounded-lg px-4 py-3 outline-none resize-none text-sm md:text-base transition-colors duration-200"
            style={{
              backgroundColor: "var(--color-background-tertiary)",
              color: "var(--color-text-body)",
              border: errors.message
                ? "1px solid var(--color-danger)"
                : "1px solid var(--color-border)",
            }}
          />
          {errors.message && (
            <p className="text-sm mt-1" style={{ color: "var(--color-danger)" }}>
              {errors.message.message}
            </p>
          )}
        </div>
        <input type="hidden" {...register("type")} value={type} />
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full font-semibold py-4 rounded-xl text-lg transition-colors duration-200 shadow disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              backgroundColor:
                type === "General"
                  ? "var(--color-accent)"
                  : "var(--color-primary)",
              color: "var(--color-text-inverse)",
            }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            {!isSubmitting && <span className="ml-2">&rarr;</span>}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
