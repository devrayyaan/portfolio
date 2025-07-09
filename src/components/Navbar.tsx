"use client";
import { Home, Store, Briefcase, User, Send, Layers, Menu } from "lucide-react";
import { cn } from "@/utils/cn";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Home" },
  { icon: Store, label: "Store" },
  { icon: Briefcase, label: "Work" },
  { icon: User, label: "Profile" },
  { icon: Send, label: "Send" },
  { icon: Layers, label: "Layers" },
  { icon: Menu, label: "Menu" },
];

export default function Navbar() {
  const [active, setActive] = useState(0);

  return (
    <nav className="fixed bottom-5 left-0 right-0 flex items-center justify-center gap-2 bg-white border border-[#e5e7eb] rounded-2xl p-2 w-fit mx-auto shadow-xl">
      {navItems.map((item, idx) => {
        const Icon = item.icon;
        const isActive = idx === active;
        return (
          <button
            key={item.label}
            onClick={() => setActive(idx)}
            className={cn(
              "cursor-pointer w-11 h-11 flex items-center justify-center rounded-xl border transition-all",
              isActive
                ? "bg-blue-500 border-blue-500 text-white"
                : "bg-white border-[#e5e7eb] text-[#6b7280] hover:bg-gray-100"
            )}
            aria-label={item.label}
            type="button"
          >
            <Icon className={cn("w-5 h-5", isActive ? "text-white" : "text-[#6b7280]")} />
          </button>
        );
      })}
    </nav>
  );
}
