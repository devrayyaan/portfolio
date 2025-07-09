"use client";
import { Home, Store, Briefcase, User, Send, Layers, Menu } from "lucide-react";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Store, label: "Store", href: "/store" },
  { icon: Briefcase, label: "Projects", href: "/projects" },
  { icon: User, label: "About", href: "/about" },
  { icon: Send, label: "Contact", href: "/contact" },
  { icon: Layers, label: "Tech stack", href: "/tech-stack" },
  { icon: Menu, label: "Menu", href: "/" },
];

export default function Navbar() {
  const [active, setActive] = useState(-1);
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
          <button
            key={item.label}
            onClick={() => handleClick(idx)}
            className={cn(
              "cursor-pointer w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center rounded-xl border transition-all hover:text-gray-700 hover:border-gray-600",
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
        );
      })}
    </nav>
  );
}
