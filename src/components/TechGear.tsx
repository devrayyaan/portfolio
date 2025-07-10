import { Settings } from "lucide-react";
import React from "react";

const techGear = [
  {
    name: "MacBook Pro",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311040407",
    description:
      "The M2 Max Chip is just mind blowing with that 120Hz display.",
  },
  {
    name: "LG 32UN650",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311040407",
    description: "A good monitor, but thinking to change it soon.",
  },
  {
    name: "Magic Keyboard",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311040407",
    description: "Minimal, wireless, and reliable.",
  },
  {
    name: "MX Master 3S",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311040407",
    description: "The best mouse for productivity and comfort.",
  },
  {
    name: "Magic Keyboard",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311040407",
    description: "Minimal, wireless, and reliable.",
  },
  {
    name: "MX Master 3S",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311040407",
    description: "The best mouse for productivity and comfort.",
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
        {techGear.map((item) => (
          <div className="flex flex-col w-full">
            <div
              key={item.name}
              className="rounded-xl border flex flex-col items-center p-4 w-full transition-colors duration-200"
              style={{
                backgroundColor: "var(--color-background-secondary)",
                borderColor: "var(--color-border)",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-contain mb-4 rounded-lg"
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
