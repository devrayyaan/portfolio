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
      "https://www.lg.com/us/images/monitors/md07501316/gallery/desktop-01.jpg",
    description: "A good monitor, but thinking to change it soon.",
  },
  {
    name: "Magic Keyboard",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3LL_A?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632937848000",
    description: "Minimal, wireless, and reliable.",
  },
  {
    name: "MX Master 3S",
    image:
      "https://resource.logitech.com/w_1200,h_630,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-top-view-graphite.png?v=1",
    description: "The best mouse for productivity and comfort.",
  },
  {
    name: "Magic Keyboard",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3LL_A?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1632937848000",
    description: "Minimal, wireless, and reliable.",
  },
  {
    name: "MX Master 3S",
    image:
      "https://resource.logitech.com/w_1200,h_630,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-top-view-graphite.png?v=1",
    description: "The best mouse for productivity and comfort.",
  },
];

export default function TechGear() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      {/* Gear Icon */}
      <div className="mb-4">
        <Settings className="w-10 h-10 text-orange-500" />
      </div>
      {/* Heading */}
      <h2 className="bg-gradient-to-r from-gray-800 to-gray-400 bg-clip-text text-3xl md:text-4xl font-bold text-transparent mb-2 text-center">
        My Tech Gear
      </h2>
      {/* Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {techGear.map((item) => (
          <div className="flex flex-col w-full">
            <div
              key={item.name}
              className="bg-white rounded-xl border border-gray-200 flex flex-col items-center p-4 w-full"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 object-contain mb-4 rounded-lg"
              />
            </div>
            <p className="font-semibold text-lg mb-1 mt-2 text-left">
              {item.name}
            </p>
            <p className="text-left text-gray-500 text-[13px] w-full">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
