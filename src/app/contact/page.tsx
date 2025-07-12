"use client";
import { Send } from "lucide-react";
import React from "react";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Title from "@/components/ui/Title";
import Subtitle from "@/components/ui/Subtitle";

export default function ContactPage() {
  return (
    <div className="mt-14 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      {/* Shop Icon */}
      <div className="mb-4">
        <Send className="w-10 h-10 text-[var(--color-primary)]" />
      </div>
      {/* Heading */}
      <Title text="Let's Get in Touch!" />
      <Subtitle text="Wanna Work Together? I'm just a button click away, I'll be happy to help you with your Framer/Webflow Stuff!" />

      {/* Contact form */}
      <ContactForm />

      {/* FAQ section */}
      <FAQ />

      {/* Contact section */}
      <Contact />
    </div>
  );
}
