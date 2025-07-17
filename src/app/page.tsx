import { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { homeMetadata } from "./metadata";
import { PersonJsonLd, WebsiteJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = homeMetadata;

export default function Home() {
  return (
    <>
      <PersonJsonLd />
      <WebsiteJsonLd />
      <HomePage />
    </>
  );
}
