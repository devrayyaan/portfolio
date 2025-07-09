import { ArrowRight, Briefcase, Search } from "lucide-react";
import React from "react";
import Contact from "@/components/Contact";

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    title: "Agency Website",
    tags: ["Website Design"],
    description:
      "Crafting Innovative, Responsive Designs that Drive Growth & Captivate Audience.",
    button: "Learn More",
    price: "$89",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "Membership Website",
    tags: ["UX/UI Design"],
    description: "A stunning Membership website made with Framer & Outseta.",
    button: "Learn More",
    price: "$199",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    title: "Agency Website",
    tags: ["Website Design"],
    description:
      "Crafting Innovative, Responsive Designs that Drive Growth & Captivate Audience.",
    button: "Learn More",
    price: "$89",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "Membership Website",
    tags: ["UX/UI Design"],
    description: "A stunning Membership website made with Framer & Outseta.",
    button: "Learn More",
    price: "$199",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mt-14 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      {/* Shop Icon */}
      <div className="mb-4">
        <Briefcase className="w-10 h-10 text-orange-500" />
      </div>
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold mb-2">
        Projects I've Worked On!
      </h1>
      {/* Subtitle */}
      <p className="text-gray-400 text-lg font-medium max-w-2xl mb-6">
        In my past experience, I have had the opportunity to work on diverse
        projects and collaborate with renowned brands.
      </p>
      {/* Search Input */}
      <div className="w-full max-w-sm">
        <div className="relative">
          <span className="absolute left-12 top-1/2 -translate-y-1/2 text-gray-400">
            <Search className="w-4 h-4 text-black" />
          </span>
          <input
            type="text"
            placeholder="Search For Products"
            className="w-full max-w-xs pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-base bg-white placeholder-gray-400"
          />
        </div>
      </div>

      {/* List of Items */}
      <div className="w-full flex flex-col items-center py-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 flex flex-col h-full border border-gray-200"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <span className="bg-gray-100 font-bold text-black border border-gray-300 text-sm px-2 py-1 rounded-md">
                  {project.price}
                </span>
              </div>
              <p className="text-gray-500 mb-8 flex-1">{project.description}</p>
              <button className="mt-auto flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md">
                <span>View Template</span> <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Contact section */}
      <Contact />
    </div>
  );
}
