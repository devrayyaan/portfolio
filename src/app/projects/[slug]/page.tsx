import Contact from "@/components/Contact";
import Divider from "@/components/Divider";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getMoreProjects, getProject } from "@/utils/data";

export default async function ProjectPage({ params }: { params: any }) {
  const project = getProject(params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex-col items-start justify-center min-h-screen gap-4 py-12 px-5">
      <Link
        href="/projects"
        className="flex items-center gap-2 transition-colors duration-200 hover:text-[var(--color-primary)]"
        style={{ color: "var(--color-text-heading)" }}
      >
        <ArrowLeft className="w-4 h-4" />
        <span>All Projects</span>
      </Link>

      <h1
        className="text-2xl lg:text-4xl font-bold transition-colors duration-200"
        style={{ color: "var(--color-text-heading)" }}
      >
        {project.title}
      </h1>
      <p
        className="text-md lg:text-lg transition-colors duration-200"
        style={{ color: "var(--color-text-muted)" }}
      >
        {project.description}
      </p>

      <Link
        className="relative w-full flex items-center justify-center gap-2 rounded-[10px] cursor-pointer p-2.5 px-6 font-medium mt-2 mb-6 transition-colors duration-200"
        style={{
          backgroundColor: "var(--color-primary)",
          color: "var(--color-text-inverse)",
        }}
        href={project.url}
        target="_blank"
      >
        <span>View Website</span>{" "}
        <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4" />
      </Link>

      <Image
        className="rounded-xl border mb-6 transition-colors duration-200"
        style={{
          borderColor: "var(--color-border)",
        }}
        src={project.image}
        alt={project.title}
        width={1000}
        height={600}
      />

      <div className="flex flex-col w-full max-w-2xl mx-auto">
        {/* Tag */}
        <span
          className="mr-auto text-[10px] lg:text-xs font-medium px-2 py-1 md:px-3 md:py-1 rounded-md transition-colors duration-200"
          style={{
            border: "1px solid var(--color-border-strong)",
            backgroundColor: "var(--color-background-tertiary)",
            color: "var(--color-text-body)",
          }}
        >
          {project.tag}
        </span>

        {/* Info Box */}
        <div
          className="w-full bg-transparent border rounded-xl p-6 mt-8 mb-6 text-left transition-colors duration-200"
          style={{
            borderColor: "var(--color-border)",
          }}
        >
          <div className="flex flex-col gap-2">
            <div className="flex gap-6">
              <span
                className="font-semibold min-w-[60px] transition-colors duration-200"
                style={{ color: "var(--color-text-heading)" }}
              >
                Year:
              </span>
              <span style={{ color: "var(--color-text-body)" }}>
                {project.year}
              </span>
            </div>
            <div className="flex gap-6">
              <span
                className="font-semibold min-w-[60px] transition-colors duration-200"
                style={{ color: "var(--color-text-heading)" }}
              >
                Client:
              </span>
              <span style={{ color: "var(--color-text-body)" }}>
                {project.client}
              </span>
            </div>
            <div className="flex gap-6 items-start">
              <span
                className="font-semibold min-w-[60px] transition-colors duration-200"
                style={{ color: "var(--color-text-heading)" }}
              >
                Results:
              </span>
              <span
                className="block transition-colors duration-200"
                style={{ color: "var(--color-text-muted)" }}
              >
                {project.results}
              </span>
            </div>
          </div>
        </div>

        {/* Description Paragraph */}
        <p
          className="max-w-2xl text-base md:text-lg mb-6 text-left transition-colors duration-200"
          style={{ color: "var(--color-text-muted)" }}
        >
          {project.subtitle}
        </p>

        {/* Features List */}
        <div className="max-w-2xl w-full text-left my-6">
          <h3
            className="font-bold text-2xl mb-2 transition-colors duration-200"
            style={{ color: "var(--color-text-heading)" }}
          >
            Features:
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            {project.features.map((feature, idx) => (
              <li
                key={idx}
                className="transition-colors duration-200"
                style={{ color: "var(--color-text-muted)" }}
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits List */}
        <div className="max-w-2xl w-full text-left my-6">
          <h3
            className="font-bold text-2xl mb-2 transition-colors duration-200"
            style={{ color: "var(--color-text-heading)" }}
          >
            Benefits:
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            {project.benefits.map((benefit, idx) => (
              <li
                key={idx}
                className="transition-colors duration-200"
                style={{ color: "var(--color-text-muted)" }}
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* More Images */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.moreImages.map((image, idx) => (
          <Image
            className="rounded-xl"
            key={idx}
            src={image}
            alt={project.title}
            width={400}
            height={400}
          />
        ))}
      </div>

      {/* More Projects */}
      <Divider className="mt-8 mb-4" />
      <h2
        className="text-2xl font-bold mb-3 text-center mx-auto transition-colors duration-200"
        style={{ color: "var(--color-text-heading)" }}
      >
        More Projects
      </h2>
      <div className="w-full flex flex-col md:flex-row flex-wrap gap-4 mb-6 items-center justify-center lg:justify-start">
        {getMoreProjects(params.slug).map((project, idx) => {
          return (
            <Link
              href={`/projects/${project.slug}`}
              key={idx}
              className="flex-1 w-full md:w-64 bg-transparent rounded-2xl p-3 flex flex-col h-[350px] border transition-colors duration-200"
              style={{
                borderColor: "var(--color-border)",
              }}
            >
              <div key={idx}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />
                <h3
                  className="text-left text-[15px] lg:text-xl font-bold transition-colors duration-200"
                  style={{ color: "var(--color-text-heading)" }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm lg:text-base flex-1 text-left transition-colors duration-200"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {project.description.substring(0, 50)}...
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <Contact />
    </div>
  );
}
