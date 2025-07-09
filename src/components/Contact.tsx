import { Github, Instagram, Mail, Twitter, Youtube } from "lucide-react";
import React from "react";

const socialLinks = [
  {
    href: "#",
    label: "Twitter",
    icon: <Twitter className="w-5 h-5" />,
  },
  {
    href: "#",
    label: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    href: "#",
    label: "YouTube",
    icon: <Youtube className="w-5 h-5" />,
  },
];

const Contact = () => {
  return (
    <div className="w-full flex flex-col gap-8 items-center">
      <div
        style={{
          backgroundImage: `url("/bg-gradient.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          backgroundColor: "#fff",
        }}
        className="w-full h-full max-w-5xl rounded-2xl border border-gray-200 p-12 flex flex-col items-center relative overflow-hidden"
      >
        <div className="text-sm font-bold text-gray-800 mb-2 flex items-center gap-1">
          Say hello <span>👋</span>
        </div>
        <h2 className="text-4xl font-extrabold text-black text-center mb-4">
          Let's Connect!
        </h2>
        <p className="text-gray-500 text-lg text-center mb-8 max-w-xl">
          Let's create something unique together! Here's how you can reach out
          to me!
        </p>
        <div className="flex gap-4 mb-2">
          <a
            href="#"
            className="flex items-center gap-2 p-2 px-3 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 font-medium text-sm transition"
          >
            <Twitter className="w-4 h-4" />
            Twitter
          </a>
          <a
            href="#"
            className="flex items-center gap-2 p-2 px-3 rounded-lg border border-gray-200 bg-white font-medium text-sm"
          >
            <Mail className="w-4 h-4" />
            Email Me
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <input
            type="email"
            placeholder="Subscribe to Newsletter"
            className="px-3 py-2 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
          />
          <button className="px-3 py-2 rounded-lg text-sm bg-orange-500 text-white font-semibold hover:bg-orange-600 transition">
            Subscribe
          </button>
        </div>
        <div className="flex justify-end gap-4">
          {socialLinks.map((s, idx) => (
            <a
              key={idx}
              href={s.href}
              className="text-gray-800 transition"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
