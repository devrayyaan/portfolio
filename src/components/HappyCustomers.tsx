import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "John Smith",
    username: "@John_123",
    company: "ElevateTech Solutions",
    text: `SleekFolio is perfect for my portfolio. Its modern design beautifully showcases my work. User-friendly customization and responsiveness ensure seamless experiences on any device. It saves time and streamlines my workflow.`,
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "John Smith",
    username: "@John_123",
    company: "ElevateTech Solutions",
    text: `SleekFolio exceeded my expectations. Its sleek design makes projects stand out. Intuitive customization and responsiveness create stunning portfolios across devices. It's an efficient, time-saving solution.`,
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    name: "John Smith",
    username: "@John_123",
    company: "ElevateTech Solutions",
    text: `SleekFolio is a game-changer for Framer projects. The design is modern and the workflow is seamless. Highly recommended!`,
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "John Smith",
    username: "@John_123",
    company: "ElevateTech Solutions",
    text: `SleekFolio is the top Framer template. Its sleek, intuitive design and responsiveness make it a must-have for any portfolio.`,
  },
];

const HappyCustomers = () => {
  return (
    <div className="w-full flex flex-col items-center py-8">
      <Quote
        className="w-8 h-8 mb-2 transition-colors duration-200"
        style={{ color: "var(--color-primary)" }}
      />
      <h2
        className="text-2xl lg:text-4xl font-bold mb-12 mt-4 text-center transition-colors duration-200"
        style={{ color: "var(--color-text-heading)" }}
      >
        Happy Customers!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="bg-transparent rounded-xl border p-6 flex flex-col transition-colors duration-200"
            style={{
              borderColor: "var(--color-border-strong)",
            }}
          >
            <div className="flex items-center mb-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <div
                  className="font-bold text-base transition-colors duration-200"
                  style={{ color: "var(--color-text-heading)" }}
                >
                  {t.name}
                </div>
                <div
                  className="text-sm transition-colors duration-200"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {t.username} • {t.company}
                </div>
              </div>
            </div>
            <div
              className="text-base mt-2 transition-colors duration-200"
              style={{ color: "var(--color-text-body)" }}
            >
              {t.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyCustomers;
