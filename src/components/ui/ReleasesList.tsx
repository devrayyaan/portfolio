import { ArrowRight } from "lucide-react";

const releases = [
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

export default function ReleasesList() {
  return (
    <div className="w-full flex flex-col items-center py-8 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {releases.map((release, idx) => (
          <div
            key={idx}
            className="bg-transparent rounded-2xl p-5 flex flex-col h-full border border-gray-300"
          >
            <img
              src={release.image}
              alt={release.title}
              className="w-full h-48 object-cover rounded-xl mb-6"
            />
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-left text-[15px] lg:text-xl font-bold">
                {release.title}
              </h3>
              <span className="bg-gray-100 font-bold text-black border border-gray-300 text-sm px-2 py-1 rounded-md">
                {release.price}
              </span>
            </div>
            <p className="text-sm lg:text-base text-left text-gray-500 mb-8 flex-1">
              {release.description}
            </p>
            <button className="mt-auto flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md">
              <span className="text-sm lg:text-base">View Template</span>{" "}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
