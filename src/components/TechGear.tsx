import { Settings } from "lucide-react";
import React from "react";

const techGear = [
  {
    name: "MacBook Air",
    image: "/macbook-air.jpeg",
    description:
      "The M3 chip is just mind blowing. Only thing I don't like is the 60hz display.",
  },
  {
    name: "MSI G274QPF",
    image: "/msi-monitor.png",
    description: "A good monitor, but thinking to change it soon.",
  },
  {
    name: "Aula F75",
    image: "/aula-f75.webp",
    description: "The best keyboard for productivity and comfort.",
  },
  {
    name: "AMD Rx 6900XT",
    image: "/rx-6900xt.png",
    description: "A good GPU for gaming and productivity.",
  },
  {
    name: "Iphone 16 Pro",
    image: "/16-pro.webp",
    description: "The best phone for productivity and comfort.",
  },
  {
    name: "PS5",
    image: "/ps5.webp",
    description: "The best console for gaming.",
  },
];

export default function TechGear() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      {/* Gear Icon */}
      <div className="mb-4">
        <Settings
          className="w-10 h-10 transition-colors duration-200"
          style={{ color: "var(--color-primary)" }}
        />
      </div>
      {/* Heading */}
      <h2
        className="text-3xl md:text-4xl font-bold mb-2 text-center transition-colors duration-200"
        style={{ color: "var(--color-text-heading)" }}
      >
        My Tech Gear
      </h2>
      {/* Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {techGear.map((item, idx) => (
          <div className="flex flex-col w-full" key={idx}>
            <div
              className="rounded-xl border flex flex-col items-center p-4 w-full transition-colors duration-200"
              style={{
                backgroundColor: "var(--color-background-secondary)",
                borderColor: "var(--color-border)",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                className={`w-36 h-36 object-contain mb-4 rounded-lg ${
                  item.name === "PS5" ? "scale-[2]" : ""
                }`}
              />
            </div>
            <p
              className="font-semibold text-lg mb-1 mt-2 text-left transition-colors duration-200"
              style={{ color: "var(--color-text-heading)" }}
            >
              {item.name}
            </p>
            <p
              className="text-left text-[13px] w-full transition-colors duration-200"
              style={{ color: "var(--color-text-muted)" }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
