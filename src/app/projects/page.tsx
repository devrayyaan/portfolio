import { Briefcase } from "lucide-react";
import React from "react";
import Contact from "@/components/Contact";
import Title from "@/components/ui/Title";
import Subtitle from "@/components/ui/Subtitle";
import ProjectsList from "@/components/ui/ProjectsList";
import { getAllProjects } from "@/utils/data";

export default function ProjectsPage() {
  return (
    <div className="mt-14 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      {/* Shop Icon */}
      <div className="mb-4">
        <Briefcase className="w-10 h-10 text-[var(--color-primary)]" />
      </div>
      <Title text="Projects I've Worked On!" />
      <Subtitle text="In my past experience, I have had the opportunity to work on diverse projects and collaborate with renowned brands." />

      <ProjectsList projects={getAllProjects()} />
      <Contact />
    </div>
  );
}
