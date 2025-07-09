import { ArrowRight, ArrowUpRight, Briefcase, Search } from "lucide-react";
import React from "react";
import Contact from "@/components/Contact";
import Title from "@/components/ui/Title";
import Subtitle from "@/components/ui/Subtitle";

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    title: "Agency Website",
    tags: ["Website Design"],
    description:
      "Crafting Innovative, Responsive Designs that Drive Growth & Captivate Audience.",
    button: "Learn More",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    title: "Membership Website",
    tags: ["UX/UI Design"],
    description: "A stunning Membership website made with Framer & Outseta.",
    button: "Learn More",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mt-14 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      {/* Shop Icon */}
      <div className="mb-4">
        <Briefcase className="w-10 h-10 text-orange-500" />
      </div>
      <Title text="Projects I've Worked On!" />
      <Subtitle text="In my past experience, I have had the opportunity to work on diverse projects and collaborate with renowned brands." />
      {/* Search Input */}
      <div className="w-full max-w-sm">
        <div className="relative">
          <span className="relative">
            <Search className="absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />
          </span>
          <input
            type="text"
            placeholder="Search For Products"
            className="bg-white w-full max-w-xs pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 text-base bg-transparent placeholder-gray-400"
          />
        </div>
      </div>

      {/* List of Items */}
      <div className="w-full flex flex-col items-center py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-transparent rounded-2xl p-5 flex flex-col h-full border border-gray-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-62 object-cover rounded-xl mb-6"
              />
              <div className="flex gap-2 items-center justify-between mb-4 w-full">
                <h3 className="text-left text-[15px] lg:text-xl font-bold">
                  {project.title}
                </h3>
                <span className="border border-gray-300 bg-gray-100 text-gray-700 text-[10px] lg:text-xs font-medium px-2 py-1 md:px-3 md:py-1 rounded-md">
                  {project.tags[0].toUpperCase()}
                </span>
              </div>
              <p className="text-sm lg:text-base text-gray-500 mb-8 flex-1 text-left">
                {project.description}
              </p>
              <div className="flex items-center justify-between">
                <button className="border border-gray-300 flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition">
                  <span className="text-xs lg:text-sm text-gray-800">
                    Learn More
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border border-gray-200 flex items-center gap-2 p-1 bg-transparent hover:bg-gray-200 text-gray-800 rounded-lg font-medium">
                  <ArrowUpRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact section */}
      <Contact />
    </div>
  );
}
