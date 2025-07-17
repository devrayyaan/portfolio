import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/projects", "/tech-stack", "/contact"].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly" as const,
      priority: route === "" ? 1 : route === "/projects" ? 0.9 : 0.8,
    })
  );

  // Add dynamic project routes if needed
  // You can fetch project slugs from your data source here
  // const projects = getProjects();
  // const projectRoutes = projects.map((project) => ({
  //   url: `${siteConfig.url}/projects/${project.slug}`,
  //   lastModified: new Date(),
  //   changeFrequency: "monthly" as const,
  //   priority: 0.7,
  // }));

  return [...routes];
}