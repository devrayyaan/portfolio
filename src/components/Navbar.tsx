"use client";
import { Home, Store, Briefcase, User, Send, Layers, Menu } from "lucide-react";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Store, label: "Store", href: "/store" },
  { icon: Briefcase, label: "Projects", href: "/projects" },
  { icon: User, label: "About", href: "/about" },
  { icon: Send, label: "Contact", href: "/contact" },
  { icon: Layers, label: "Stack", href: "/tech-stack" },
  { icon: Menu, label: "Menu", href: "/" },
];

export default function Navbar() {
  const [active, setActive] = useState(-1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();

  const handleClick = (idx: number) => {
    setActive(idx);
    router.push(navItems[idx].href);
  };

  useEffect(() => {
    const path = window.location.pathname;
    const idx = navItems.findIndex((item) => item.href === path);
    if (idx !== -1) {
      setActive(idx);
    }
  }, []);

  return (
    <nav className="w-[90vw] md:w-fit bg-white z-10 fixed bottom-5 left-0 right-0 flex items-center justify-center gap-2 bg-transparent border border-[#e5e7eb] rounded-2xl p-2 mx-auto shadow-xl">
      {navItems.map((item, idx) => {
        const Icon = item.icon;
        const isActive = idx === active;
        return (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <button
              onClick={() => handleClick(idx)}
              className={cn(
                "cursor-pointer w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center rounded-xl border transition-all hover:text-gray-900 hover:border-gray-400",
                isActive
                  ? "bg-blue-500 border-blue-500 text-white"
                  : "bg-transparent border-[#e5e7eb] text-[#6b7280] hover:bg-gray-100"
              )}
              aria-label={item.label}
              type="button"
            >
              <Icon
                className={cn("w-5 h-5", isActive ? "text-white" : "inherit")}
              />
            </button>

            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-black text-white text-sm rounded-lg whitespace-nowrap z-20"
                  style={{
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  {item.label}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );
}
