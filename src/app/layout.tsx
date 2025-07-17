import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Provider from "@/components/Provider";
import { getThemeCookie } from "@/utils/theme";
import { defaultMetadata } from "@/lib/metadata";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = defaultMetadata;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = await getThemeCookie();
  console.log(theme);

  return (
    <html className={theme} lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://rayyaan.dev" />
      </head>
      <body
        className={`w-full pt-[20px] pb-[150px] lg:pt-[50px] lg:pb-[100px] transition-colors duration-200 ${dmSans.className}`}
        style={{
          backgroundColor: "var(--color-background)",
          color: "var(--color-text-body)",
        }}
      >
        <Provider>
          <div
            className="w-[90vw] lg:max-w-4xl mx-auto rounded-2xl px-2 py-4 lg:px-[40px] lg:py-[30px] transition-colors duration-200"
            style={{
              backgroundColor: "var(--color-background-secondary)",
              border: "1px solid var(--color-border-strong)",
            }}
          >
            <Header />
            <Navbar />
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
