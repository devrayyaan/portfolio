"use client";
import { Moon, Sun, Home, Briefcase, User, Send, Layers } from "lucide-react";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { setThemeCookie } from "@/utils/theme";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Briefcase, label: "Projects", href: "/projects" },
  { icon: User, label: "About", href: "/about" },
  { icon: Send, label: "Contact", href: "/contact" },
  { icon: Layers, label: "Stack", href: "/tech-stack" },
];

export default function Navbar() {
  const [active, setActive] = useState(-1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showThemeTooltip, setShowThemeTooltip] = useState(false);
  const router = useRouter();
  const location = usePathname();
  const { theme, setTheme } = useTheme();

  const handleClick = (idx: number) => {
    setActive(idx);
    router.push(navItems[idx].href);
  };

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem("theme") || "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setThemeCookie(newTheme);

    // Apply theme to document
    if (newTheme === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    const path = window.location.pathname;
    const idx = navItems.findIndex((item) => item.href === path);
    if (idx !== -1) {
      setActive(idx);
    } else if (path.startsWith("/projects")) {
      setActive(1);
    } else if (path.startsWith("/contact")) {
      setActive(3);
    }
  }, [location]);

  return (
    <nav
      className="w-[90vw] md:w-fit z-10 fixed bottom-5 left-0 right-0 flex items-center justify-center gap-2 bg-transparent border rounded-2xl p-2 mx-auto shadow-xl transition-colors duration-200"
      style={{
        backgroundColor: "var(--color-background-secondary)",
        borderColor: "var(--color-border)",
      }}
    >
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
                "cursor-pointer w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center rounded-xl border transition-all",
                isActive
                  ? "border-[var(--color-primary)] text-[var(--color-text-inverse)]"
                  : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text-heading)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-background-tertiary)]"
              )}
              style={{
                backgroundColor: isActive
                  ? "var(--color-primary)"
                  : "transparent",
              }}
              aria-label={item.label}
              type="button"
            >
              <Icon
                className={cn(
                  "w-5 h-5",
                  isActive ? "text-[var(--color-text-inverse)]" : "inherit"
                )}
              />
            </button>

            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 text-sm rounded-lg whitespace-nowrap z-20 transition-colors duration-200"
                  style={{
                    backgroundColor: "var(--color-background-tooltip)",
                    color: "var(--color-text-tooltip)",
                    border: "1px solid var(--color-border-tooltip)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  {item.label}
                  <div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent"
                    style={{
                      borderTopColor: "var(--color-background-tooltip)",
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      <button
        onMouseEnter={() => setShowThemeTooltip(true)}
        onMouseLeave={() => setShowThemeTooltip(false)}
        onClick={toggleTheme}
        className="cursor-pointer w-10 h-10 lg:w-11 lg:h-11 flex items-center justify-center rounded-xl border transition-all hover:text-[var(--color-text-heading)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-background-tertiary)]"
        style={{
          borderColor: "var(--color-border)",
          color: "var(--color-text-muted)",
        }}
        aria-label="Toggle Theme"
        type="button"
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
        <AnimatePresence>
          {showThemeTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="absolute bottom-full  mb-3 px-3 py-2 text-sm rounded-lg whitespace-nowrap z-20 transition-colors duration-200"
              style={{
                backgroundColor: "var(--color-background-tooltip)",
                color: "var(--color-text-tooltip)",
                border: "1px solid var(--color-border-tooltip)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
              <div
                className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent"
                style={{
                  borderTopColor: "var(--color-background-tooltip)",
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </nav>
  );
}
