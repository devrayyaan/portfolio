import { Instagram, Mail, Twitter, Youtube } from "lucide-react";
import React from "react";
import Divider from "./Divider";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    href: "https://x.com/",
    label: "Twitter",
    icon: <Twitter className="w-5 h-5" />,
  },
  {
    href: "https://www.instagram.com/",
    label: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    href: "https://www.youtube.com/",
    label: "YouTube",
    icon: <Youtube className="w-5 h-5" />,
  },
];

const Contact = () => {
  return (
    <div className="w-full flex flex-col gap-8 items-center">
      <div
        className="relative bg-left lg:bg-center w-full h-full lg:max-w-5xl rounded-2xl border p-4 py-10 lg:p-12 flex flex-col items-center overflow-hidden transition-colors duration-200 border-[var(--color-border)]"
        style={{
          background: "var(--color-background-gradient)",
        }}
      >
        {/* Bottom left gradient */}
        <Image
          src="/contact-gradient.png"
          alt="Contact Background"
          className="absolute bottom-[-190px] left-[-190px]"
          width={500}
          height={500}
        />

        <Image
          src="/contact-gradient.png"
          alt="Contact Background"
          className="absolute top-[-150px] right-[-190px]"
          width={500}
          height={500}
        />

        <div
          className="text-sm font-bold mb-2 flex items-center gap-1 transition-colors duration-200"
          style={{ color: "var(--color-text-heading)" }}
        >
          Say hello <span>👋</span>
        </div>
        <h2
          className="text-2xl lg:text-4xl font-extrabold text-center mb-4 transition-colors duration-200"
          style={{ color: "var(--color-text-heading)" }}
        >
          Let&apos;s Connect!
        </h2>
        <p
          className="text-sm lg:text-lg text-center mb-8 w-full lg:max-w-xl transition-colors duration-200"
          style={{ color: "var(--color-text-muted)" }}
        >
          Let&apos;s create something unique together! Here&apos;s how you can
          reach out to me!
        </p>
        <div className="flex gap-4 mb-2">
          <Link
            href="https://x.com/"
            className="flex items-center gap-2 p-2 px-3 rounded-lg border font-medium text-sm transition-colors duration-200"
            style={{
              backgroundColor: "var(--color-background-secondary)",
              borderColor: "var(--color-border-strong)",
              color: "var(--color-text-body)",
            }}
          >
            <Twitter className="w-4 h-4" />
            Twitter
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 p-2 px-3 rounded-lg border font-medium text-sm transition-colors duration-200"
            style={{
              backgroundColor: "var(--color-background-secondary)",
              borderColor: "var(--color-border-strong)",
              color: "var(--color-text-body)",
            }}
          >
            <Mail className="w-4 h-4" />
            Email Me
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
        <div className="flex items-center gap-2">
          <input
            type="email"
            placeholder="Subscribe to Newsletter"
            className="w-[65%] flex-2 md:w-auto p-3 text-sm rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200"
            style={{
              backgroundColor: "var(--color-background-tertiary)",
              color: "var(--color-text-body)",
              border: "1px solid var(--color-border)",
            }}
          />
          <button
            className="px-2 md:px-3 py-3 rounded-lg text-sm font-semibold transition-colors duration-200"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-text-inverse)",
            }}
          >
            Subscribe
          </button>
        </div>

        <Divider className="md:hidden my-4" />

        <div className="flex justify-center my-3 md:my-0 lg:justify-end gap-4">
          {socialLinks.map((s, idx) => (
            <Link
              key={idx}
              href={s.href}
              target="_blank"
              className="transition-colors duration-200 hover:text-[var(--color-primary)]"
              style={{ color: "var(--color-text-heading)" }}
              aria-label={s.label}
            >
              {s.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
