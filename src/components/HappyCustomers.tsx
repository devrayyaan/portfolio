import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    avatar: "/testimonials/ezenuni.webp",
    name: "Ezenuni",
    username: "@ezenuni",
    company: "ITXDB Solutions",
    text: `Rayyaan Nauman EXCEEDED expectations in software development with his professionalism and code expertise. His language fluency and timely delivery made the collaboration smooth and highly efficient. 🙌 Highly recommend working with him!`,
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Jereon",
    username: "@jeroenvdheide",
    company: "Xanders",
    text: `Delivered exactly what was requested, flexible & responsive during iterations. Thanks.`,
  },
  {
    avatar: "/testimonials/jake.jpeg",
    name: "Jacob Jolis",
    username: "@serenzen",
    company: "Answering Machine",
    text: `Rayyaan is an exceptionally strong developer. this was our second project with him and we will gladly return for more. this time we had multiple complex frontend flows that required creativity and domain expertise to work through. rayyaan took it all in stride and built several elegant solutions so we didn’t have to compromise on user experience`,
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Ricky",
    username: "@chankalok",
    company: "Xoxo Beverages",
    text: `Rayyaan deserves all the success in the world. He is a great developer and a great person. I highly recommend him to anyone looking for a developer.`,
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl">
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
