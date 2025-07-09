"use client";
import { CircleQuestionMark, Plus, X } from "lucide-react";
import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What are Framer Templates?",
    answer:
      "Framer Templates are pre-designed website layouts and components that you can use as a starting point for your web design projects. They are created using the Framer Website building tool.",
  },
  {
    id: 2,
    question: "Can I modify Framer Templates to fit my needs?",
    answer:
      "Yes, Framer Templates are fully customizable. You can edit layouts, colors, text, and components to match your brand and requirements.",
  },
  {
    id: 3,
    question: "How are Framer Templates beneficial?",
    answer:
      "They save you time and effort by providing a professional starting point, ensuring responsive design and modern best practices.",
  },
  {
    id: 4,
    question: "What is the turnaround time?",
    answer:
      "Turnaround time depends on the complexity of your project, but most template-based sites can be launched quickly—often within days.",
  },
  {
    id: 5,
    question: "Do you offer custom web design services?",
    answer:
      "Yes, we offer custom web design services tailored to your unique needs, in addition to template-based solutions.",
  },
  {
    id: 6,
    question: "Can I request customizations?",
    answer:
      "Absolutely! We can customize any template or create new components to fit your requirements.",
  },
  {
    id: 7,
    question: "What is Framer?",
    answer:
      "Framer is a powerful website design and prototyping tool that allows you to create interactive, high-fidelity sites visually.",
  },
  {
    id: 8,
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards, PayPal, and other secure payment methods.",
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
      <CircleQuestionMark className="w-8 h-8 text-orange-500 mb-2" />
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
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
      className="flex flex-col bg-white rounded-xl border border-gray-200 px-4 py-3 text-lg font-medium text-gray-700 cursor-pointer w-full"
      onClick={() => handleOpen(faq.id)}
      aria-expanded={open === faq.id}
      aria-controls={`faq-panel-${faq.id}`}
    >
      <div className="flex items-center justify-between">
        <span className="text-[15px] font-medium text-black text-left">
          {faq.question}
        </span>
        {open.includes(faq.id) ? (
          <X className="w-4 h-4 text-gray-700" />
        ) : (
          <Plus className="w-4 h-4 text-gray-700" />
        )}
      </div>
      {open.includes(faq.id) && (
        <div className="text-gray-500 text-left mt-4 text-sm font-light">
          {faq.answer}
        </div>
      )}
    </button>
  );
}

export default FAQ;
