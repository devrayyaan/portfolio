const projects = [
  {
    slug: "agency-website",
    title: "Agency Website",
    description:
      "Crafting Innovative, Responsive Designs that Drive Growth & Captivate Audience.",
    tag: "WEBSITE DESIGN",
    subtitle:
      "Experience a modern, dynamic website crafted with Framer, the cutting-edge design and prototyping platform. This agency website delivers an engaging and responsive user experience.",
    features: [
      "Fluid and responsive design for seamless adaptation across devices",
      "Interactive elements with captivating animations and transitions",
      "Easy content management and updates",
      "SEO optimized for better visibility",
    ],
    benefits: [
      "Elevates your online presence and drives measurable success.",
      "Streamlined development for faster launch times.",
      "Higher engagement and conversions through captivating interactions.",
    ],
    year: 2022,
    client: "Acme Corp.",
    results:
      "This Framer-powered agency website delivers exceptional results, elevating your online presence and driving measurable success. With its fluid responsiveness, captivating interactions, and streamlined development, this website sets your agency apart, driving higher engagement and conversions.",
    image: "/about-img.avif",
    url: "https://agency-website.vercel.app/",
    moreImages: [
      "/about-img.avif",
      "/about-img.avif",
      "/about-img.avif",
      "/about-img.avif",
    ],
  },
  {
    slug: "modern-portfolio",
    title: "Modern Portfolio",
    description:
      "A sleek, modern portfolio to showcase creative work and attract new clients.",
    tag: "PORTFOLIO",
    subtitle:
      "Built with Next.js and Framer Motion, this portfolio is fast, interactive, and visually stunning.",
    features: [
      "Animated transitions between pages",
      "Responsive grid for projects and images",
      "Integrated contact form with validation",
      "Dark and light mode support",
    ],
    benefits: [
      "Showcases your work in a professional, engaging way.",
      "Easy to update and expand as your portfolio grows.",
      "Optimized for SEO and fast loading.",
    ],
    year: 2023,
    client: "Jane Doe",
    results:
      "This portfolio helped Jane land multiple freelance gigs and increased her online presence significantly.",
    image: "/about-img.avif",
    url: "https://modern-portfolio.vercel.app/",
    moreImages: [
      "/about-img.avif",
      "/about-img.avif",
      "/about-img.avif",
      "/about-img.avif",
    ],
  },
  {
    slug: "startup-landing",
    title: "Startup Landing Page",
    description:
      "A high-converting landing page designed for SaaS startups and product launches.",
    tag: "LANDING PAGE",
    subtitle:
      "Combining bold visuals with clear calls-to-action, this landing page is built to convert visitors into users.",
    features: [
      "Hero section with animated headline",
      "Pricing tables and testimonials",
      "Newsletter signup integration",
      "Mobile-first design",
    ],
    benefits: [
      "Drives signups and user engagement.",
      "Easy to customize for any SaaS or product.",
      "Built for speed and conversion optimization.",
    ],
    year: 2024,
    client: "Launchly",
    results:
      "Launchly saw a 40% increase in signups after switching to this landing page.",
    image: "/about-img.avif",
    url: "https://startup-landing.vercel.app/",
    moreImages: [
      "/about-img.avif",
      "/about-img.avif",
      "/about-img.avif",
      "/about-img.avif",
    ],
  },
  {
    slug: "ecommerce-store",
    title: "E-Commerce Store",
    description:
      "A robust and scalable e-commerce platform for modern online retailers.",
    tag: "E-COMMERCE",
    subtitle:
      "Built with Next.js and Stripe integration, this store is fast, secure, and easy to manage.",
    features: [
      "Product catalog with filtering and search",
      "Secure checkout with Stripe",
      "Order management dashboard",
      "Customer reviews and ratings",
    ],
    benefits: [
      "Increases sales with a seamless shopping experience.",
      "Easy to manage inventory and orders.",
      "Mobile-optimized for shoppers on the go.",
    ],
    year: 2023,
    client: "ShopEase",
    results:
      "ShopEase doubled their monthly sales after launching this new store.",
    image: "/about-img.avif",
    url: "https://ecommerce-store.vercel.app/",
    moreImages: [
      "/about-img.avif",
      "/about-img.avif",
      "/about-img.avif",
      "/about-img.avif",
    ],
  },
];

const getAllProjects = () => projects;

const getProject = (slug: string) => {
  return projects.find((project) => project.slug === slug);
};

export { getProject, getAllProjects };
