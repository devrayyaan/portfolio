import { Metadata } from "next";

export const siteConfig = {
  name: "Rayyaan Nauman",
  description:
    "Full Stack Developer & Software Engineer | Next.js, React Native, Node.js Expert | 175+ International Clients | Top Rated Fiverr Freelancer",
  url: "https://rayyaan.dev",
  ogImage: "https://rayyaan.dev/og-image.png",
  author: {
    name: "Rayyaan Nauman",
    twitter: "@rayyaan",
    linkedin: "rayyaan-nauman",
    github: "rayyaan",
  },
  keywords: [
    "Rayyaan",
    "Rayyaan Nauman",
    "Rayyaan developer",
    "Full Stack Developer",
    "Software Engineer",
    "Next.js Expert",
    "React Native Developer",
    "Node.js Developer",
    "Freelance Developer",
    "Top Rated Fiverr",
    "Web Developer",
    "Mobile App Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "React Developer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Karachi Developer",
    "Remote Developer",
    "International Clients",
  ],
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Full Stack Developer & Software Engineer`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Full Stack Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.author.twitter,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export function constructMetadata({
  title = siteConfig.name,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: siteConfig.author.twitter,
    },
    icons,
    metadataBase: new URL(siteConfig.url),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
