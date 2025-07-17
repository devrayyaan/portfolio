"use client";
import { CircleQuestionMark, Plus } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "What types of projects do you work on?",
    answer:
      "I build custom web applications with Next.js & TypeScript and cross-platform mobile apps with React Native. Whether you’re a startup validating an MVP or an established business looking to scale, I can help turn your idea into a high-performing digital product.",
  },
  {
    id: 2,
    question: "Which technologies do you use?",
    answer:
      "My go-to stack is React Native for iOS & Android, and Next.js with TypeScript for the web. I also work with Tailwind CSS, GraphQL/REST APIs, PostgreSQL, Prisma, AWS, and Vercel to deliver fast, maintainable solutions.",
  },
  {
    id: 3,
    question: "How much will my project cost?",
    answer:
      "Pricing depends on the features, complexity, and timeline. After a free discovery call, I’ll send you a fixed-price quote so you know exactly what to expect—no hidden fees.",
  },
  {
    id: 4,
    question: "What is the typical timeline?",
    answer:
      "Most marketing sites launch in 2-4 weeks, while full-featured web or mobile apps take 4-12 weeks. During our initial call we’ll agree on a schedule that aligns with your business goals.",
  },
  {
    id: 5,
    question: "What does your process look like?",
    answer:
      "1) Discovery & scope 2) UX/UI design 3) Agile development with weekly demos 4) Testing & polish 5) Launch & post-launch support. You’ll have full visibility and can give feedback at every stage.",
  },
  {
    id: 6,
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes. I offer flexible maintenance and feature-iteration packages to keep your product secure, up-to-date, and continuously improving.",
  },
  {
    id: 7,
    question: "Will my idea stay confidential?",
    answer:
      "Absolutely. I’m happy to sign an NDA before we discuss your project and all code ownership will belong to you upon completion.",
  },
  {
    id: 8,
    question: "How do we get started?",
    answer:
      "Fill out the contact form or book a free consultation call. We’ll discuss your goals, outline the scope, and map out the next steps together.",
  },
];

// Split into left and right columns
const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
const rightFaqs = faqs.filter((_, i) => i % 2 === 1);

const FAQ = () => {
  // Track open index and which column ("left" or "right")
  const [open, setOpen] = useState<number[]>([]);

  const toggleOpen = (id: number) => {
    setOpen(open.includes(id) ? open.filter((i) => i !== id) : [...open, id]);
  };

  return (
    <div className="w-full flex flex-col items-center py-12">
      <CircleQuestionMark
        className="w-8 h-8 mb-2 transition-colors duration-200"
        style={{ color: "var(--color-primary)" }}
      />
      <h2
        className="text-2xl md:text-4xl font-bold text-center mb-12 transition-colors duration-200"
        style={{ color: "var(--color-text-heading)" }}
      >
        Frequently Asked Questions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        {/* Left column */}
        <div className="flex flex-col gap-4">
          {leftFaqs.map((faq, idx) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              open={open}
              handleOpen={toggleOpen}
            />
          ))}
        </div>
        {/* Right column */}
        <div className="flex flex-col gap-4">
          {rightFaqs.map((faq, idx) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              open={open}
              handleOpen={toggleOpen}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function FAQItem({
  faq,
  open,
  handleOpen,
}: {
  faq: any;
  open: any;
  handleOpen: (id: number) => void;
}) {
  return (
    <button
      className="flex flex-col bg-transparent rounded-xl border px-4 py-3 text-lg font-medium cursor-pointer w-full transition-colors duration-200"
      style={{
        borderColor: "var(--color-border-strong)",
        color: "var(--color-text-body)",
      }}
      onClick={() => handleOpen(faq.id)}
      aria-expanded={open === faq.id}
      aria-controls={`faq-panel-${faq.id}`}
    >
      <div className="flex items-center justify-between">
        <span
          className="text-[15px] font-medium text-left transition-colors duration-200"
          style={{ color: "var(--color-text-heading)" }}
        >
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: open.includes(faq.id) ? 45 : 0 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
        >
          <Plus
            className={`w-4 h-4 transition-colors duration-200 ${
              open.includes(faq.id) ? "" : ""
            }`}
            style={{
              color: open.includes(faq.id)
                ? "var(--color-text-heading)"
                : "var(--color-text-muted)",
            }}
          />
        </motion.div>
      </div>
      <AnimatePresence>
        {open.includes(faq.id) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            <div
              className="text-left mt-4 text-sm font-light transition-colors duration-200"
              style={{ color: "var(--color-text-muted)" }}
            >
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export default FAQ;
