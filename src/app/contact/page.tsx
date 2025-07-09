"use client";
import { Send } from "lucide-react";
import React from "react";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="mt-14 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      {/* Shop Icon */}
      <div className="mb-4">
        <Send className="w-10 h-10 text-orange-500" />
      </div>
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        Let's Get in Touch!
      </h1>
      {/* Subtitle */}
      <p className="text-gray-500 text-lg font-medium max-w-2xl mb-10 mt-2 leading-relaxed">
        Wanna Work Together? I'm just a button click away, I'll be happy to help
        you with your Framer/Webflow Stuff!
      </p>

      {/* Contact form */}
      <ContactForm />

      {/* FAQ section */}
      <FAQ />

      {/* Contact section */}
      <Contact />
    </div>
  );
}
