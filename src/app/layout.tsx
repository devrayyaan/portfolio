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
        <meta property="og:image" content="https://rayyaan.dev/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Rayyaan Nauman - Full Stack Developer" />
        <meta name="twitter:image" content="https://rayyaan.dev/og-image.png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#14b8a6" />
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
