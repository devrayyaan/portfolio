import { Metadata } from "next";
import AboutPage from "@/components/AboutPage";
import { aboutMetadata } from "../metadata";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = aboutMetadata;

export default function About() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://rayyaan.dev" },
          { name: "About", url: "https://rayyaan.dev/about" },
        ]}
      />
      <AboutPage />
    </>
  );
}
