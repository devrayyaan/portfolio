import React from "react";
import { ArrowRight, Briefcase, ArrowUpRight } from "lucide-react";

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

const LatestWork = () => {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Briefcase className="w-7 h-7 mr-2 text-[#F45D22]" />
            <h3 className="text-2xl font-black">Latest Work</h3>
          </div>
          <button className=" flex items-center justify-center gap-2  cursor-pointer text-black">
            <span>View All</span> <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col items-center py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 flex flex-col h-full border border-gray-200"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-62 object-cover rounded-xl mb-6"
              />
              <div className="flex gap-2 items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <span className="border border-gray-200 bg-gray-50 text-gray-700 text-xs font-medium px-3 py-1 rounded-md">
                  {project.tags[0].toUpperCase()}
                </span>
              </div>
              <p className="text-gray-500 mb-8 flex-1">{project.description}</p>
              <div className="flex items-center justify-between">
                <button className="border border-gray-300 flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition">
                  <span className="text-sm text-gray-800">Learn More</span>
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
    </>
  );
};

export default LatestWork;
