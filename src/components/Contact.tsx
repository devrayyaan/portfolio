import { Github, Instagram, Mail, Twitter, Youtube } from "lucide-react";
import React from "react";
import Divider from "./Divider";

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
          backgroundRepeat: "no-repeat",
          backgroundColor: "transparent",
        }}
        className="bg-left lg:bg-center w-full h-full lg:max-w-5xl rounded-2xl border border-gray-300 p-4 py-10 lg:p-12 flex flex-col items-center overflow-hidden"
      >
        <div className="text-sm font-bold text-gray-800 mb-2 flex items-center gap-1">
          Say hello <span>👋</span>
        </div>
        <h2 className="text-2xl lg:text-4xl font-extrabold text-black text-center mb-4">
          Let's Connect!
        </h2>
        <p className="text-gray-500 text-sm lg:text-lg text-center mb-8 w-full lg:max-w-xl">
          Let's create something unique together! Here's how you can reach out
          to me!
        </p>
        <div className="flex gap-4 mb-2">
          <a
            href="#"
            className="flex items-center gap-2 p-2 px-3 rounded-lg border border-gray-300 bg-gray-100 font-medium text-sm"
          >
            <Twitter className="w-4 h-4" />
            Twitter
          </a>
          <a
            href="#"
            className="flex items-center gap-2 p-2 px-3 rounded-lg border border-gray-300 bg-gray-100 font-medium text-sm "
          >
            <Mail className="w-4 h-4" />
            Email Me
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
        <div className="flex items-center gap-2">
          <input
            type="email"
            placeholder="Subscribe to Newsletter"
            className="w-[65%] flex-2 md:w-auto p-3 text-sm rounded-lg bg-gray-100 text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
          />
          <button className="px-2 md:px-3 py-3 rounded-lg text-sm bg-orange-500 text-white font-semibold hover:bg-orange-600 transition">
            Subscribe
          </button>
        </div>

        <Divider className="md:hidden my-4" />

        <div className="flex justify-center my-3 md:my-0 lg:justify-end gap-4">
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
