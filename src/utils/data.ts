type Project = {
  slug: string;
  title: string;
  description: string;
  tag: string;
  subtitle: string;
  features: string[];
  benefits: string[];
  year: number;
  client: string;
  results: string;
  image: string;
  url: string;
  moreImages: string[];
};

const projects: Project[] = [
  {
    slug: "answering-machine-app",
    title: "Answering Machine App",
    description:
      "An AI-powered answering service that handles business phone calls with human-like conversation, learning about your business automatically and providing professional customer service when you can't answer.",
    tag: "MOBILE APP",
    subtitle:
      "AI receptionist that answers your business calls with human-like conversation, handling customer inquiries, scheduling appointments, and ensuring no missed opportunities.",
    features: [
      "AI learns about your business automatically from your website",
      "Takes callers through intake flows and answers questions professionally",
      "Human-like voice that sounds kind, knowledgeable, and natural",
      "Compatible with all U.S.-based carriers",
      "Can handle all calls or only missed/busy calls based on your preferences",
      "Spam protection and manual blocking capabilities",
      "Voicemail backup when AI minute limits are reached",
      "Real-time alerts for new messages and call management",
    ],
    benefits: [
      "Stop leaking revenue to missed calls and convert rings to transactions",
      "Eliminate poor responsiveness complaints and negative reviews",
      "Keep your current phone number with no carrier switching required",
      "Save time by not holding phone to ear all day",
      "Never miss valuable customer calls and appointments",
    ],
    year: 2024,
    client: "Answering Machine",
    results:
      "Users report 90% of callers cannot tell it's an AI system, with significant reduction in missed calls and improved customer satisfaction. Business owners save time by no longer holding phones all day while maintaining professional customer service and scheduling appointments with new clients.",
    image: "/projects/answering-machine-app/answering-machine-project.png",
    url: "https://apps.apple.com/us/app/answering-machine-phone-ai/id6677004848",
    moreImages: [
      "/about-img.avif",
      "/about-img.avif",
      "/about-img.avif",
      "/about-img.avif",
    ],
  },
  {
    slug: "xoxo-beverages",
    title: "Xoxo Beverages Web App",
    description:
      "Real-time cocktail machine control system that connects web interface to physical cocktail dispensing hardware, enabling automated drink preparation through web-based ordering and comprehensive machine management.",
    tag: "WEB APP",
    subtitle:
      "Web-connected cocktail machine with real-time control, automated drink dispensing, and comprehensive admin dashboard for seamless beverage service management.",
    features: [
      "Real-time web-to-machine connectivity via Raspberry Pi middleware",
      "Direct drink ordering and preparation from web interface",
      "Admin panel with comprehensive statistics and analytics",
      "Order generation and management system",
      "Recipe creation and customization tools",
      "Machine cleaning and maintenance controls",
      "Machine settings and configuration management",
      "Real-time event transfer from web app to physical hardware",
    ],
    benefits: [
      "Real-time machine connectivity for instant drink preparation",
      "Automated cocktail dispensing reduces manual labor and errors",
      "Comprehensive analytics and statistics for business insights",
      "Remote machine management and monitoring capabilities",
      "Consistent drink quality through automated recipes and measurements",
    ],
    year: 2024,
    client: "Xoxo Beverages",
    results:
      "Streamlined cocktail service with real-time machine connectivity, automated order processing, and comprehensive analytics for efficient beverage operations and enhanced customer experience.",
    image: "/projects/xoxo-beverages/machine-project.png",
    url: "https://machine.xoxobeverages.xyz/",
    moreImages: [
      "/projects/xoxo-beverages/machine-project-2.png",
      "/projects/xoxo-beverages/machine-project-3.png",
      "/projects/xoxo-beverages/machine-project-4.png",
      "/projects/xoxo-beverages/machine-project-5.png",
    ],
  },
  {
    slug: "musky-balzac",
    title: "Musky Balzac",
    description:
      "A digital token project centered around the $BALZ symbol and associated artwork, designed as an expression of support for specific ideals and beliefs rather than an investment opportunity.",
    tag: "LANDING PAGE",
    subtitle:
      "Digital token ecosystem featuring $BALZ symbol and artwork, focused on community engagement and symbolic expression rather than financial investment.",
    features: [
      "BALZ token ecosystem with symbolic artwork integration",
      "Clear legal disclaimer and compliance framework",
      "Community engagement through symbolic expression",
      "Professional corporate structure with Singapore base",
      "Non-investment focused token utility",
      "Associated website platform for community interaction",
      "Clear distinction from political or governmental associations",
    ],
    benefits: [
      "Clear legal positioning distinguishing from investment securities",
      "Community-focused approach to token engagement",
      "Symbolic expression platform for supporters",
      "Non-political stance ensuring broader accessibility",
      "Professional legal framework and compliance",
    ],
    year: 2025,
    client: "Advisory Tech",
    results:
      "Established token project with clear legal framework and community focus, emphasizing symbolic value and engagement over investment returns.",
    image: "/projects/musky-balzac/musky-balzac-project.png",
    url: "https://www.muskybalzac.com/",
    moreImages: [
      "/projects/musky-balzac/musky-balzac-project-2.png",
      "/projects/musky-balzac/musky-balzac-project-3.png",
      "/projects/musky-balzac/musky-balzac-project-4.png",
      "/projects/musky-balzac/musky-balzac-project-5.png",
    ],
  },
  {
    slug: "answering-machine-landing-page",
    title: "Answering Machine",
    description:
      "Professional AI answering service landing page that showcases intelligent phone automation for businesses, featuring real-time demos and comprehensive service explanations.",
    tag: "LANDING PAGE",
    subtitle:
      "Modern landing page built to convert visitors into customers with interactive demos, clear pricing, and compelling testimonials for AI phone services.",
    features: [
      "Hero section with compelling value proposition and CTA",
      "Interactive demo showcasing AI voice capabilities",
      "Clear pricing tiers with feature comparisons",
      "Comprehensive FAQ section addressing common concerns",
      "Partner integrations and testimonials section",
      "Mobile-responsive design for all devices",
    ],
    benefits: [
      "Converts visitors into paying customers with clear value demonstration.",
      "Reduces sales friction through interactive product demos.",
      "Builds trust with transparent pricing and customer testimonials.",
      "Optimized for mobile traffic and fast loading speeds.",
    ],
    year: 2025,
    client: "Answering Machine",
    results:
      "High-converting landing page that effectively demonstrates AI capabilities through interactive demos, resulting in increased trial signups and customer acquisition.",
    image: "/projects/answering-machine-website/answering-machine-website.png",
    url: "https://www.tryansweringmachine.com/",
    moreImages: [
      "/projects/answering-machine-website/answering-machine-website-2.png",
      "/projects/answering-machine-website/answering-machine-website-3.png",
      "/projects/answering-machine-website/answering-machine-website-4.png",
      "/projects/answering-machine-website/answering-machine-website-5.png",
    ],
  },
  {
    slug: "veloce-ai",
    title: "Veloce AI",
    description:
      "A personal productivity and solution-finding platform by DistrictZero, focused on helping users resolve personal blockers and find targeted solutions.",
    tag: "WEB APP",
    subtitle:
      "Minimal landing page for Veloce platform offering personal blocker resolution tools, solution search capabilities, and educational resources.",
    features: [
      "Personal blocker resolution system",
      "Solution search functionality",
      "Educational video content integration",
      "White-paper resource downloads",
      "Upcoming brand store marketplace",
      "Clean, minimalist interface design",
    ],
    benefits: [
      "Helps users overcome personal and professional obstacles.",
      "Provides targeted solutions through intelligent search.",
      "Offers educational resources for continuous learning.",
      "Streamlines problem-solving with curated content.",
      "Builds productivity through systematic blocker resolution.",
    ],
    year: 2022,
    client: "DistrictZero",
    results:
      "Early-stage platform positioning for personal productivity market with focus on solution-finding and blocker resolution, preparing for brand store launch.",
    image: "/projects/veloce-ai/veloce-project.png",
    url: "https://www.goveloce.com/",
    moreImages: [
      "/projects/veloce-ai/veloce-project-2.png",
      "/projects/veloce-ai/veloce-project-3.png",
      "/projects/veloce-ai/veloce-project-4.png",
      "/projects/veloce-ai/veloce-project-5.png",
    ],
  },
  {
    slug: "stellar-sleep",
    title: "Stellar Sleep",
    description:
      "Science-backed mobile app for chronic insomnia treatment using Cognitive Behavioral Therapy for Insomnia (CBT-I), developed at Harvard Innovation Labs to help users fall asleep faster and stay asleep longer.",
    tag: "WEB APP",
    subtitle:
      "Award-winning digital sleep therapy platform that combines clinical psychology with personalized daily programming to permanently solve chronic insomnia through proven behavioral techniques.",
    features: [
      "10-week structured CBT-I daily programming with personalized guidance",
      "Sleep tracking and interactive sleep diary with trend analysis",
      "Native integrations with Fitbit, Oura Ring, and Apple Health",
      "1000+ minutes of on-demand content including meditations and bedtime stories",
      "Sleep restriction therapy and stimulus control techniques",
      "Cognitive restructuring and anxiety management tools",
      "Bookmarking system for favorite lessons and content",
      "Gratitude and worry journaling features",
      "30-night challenge for sleep goal maintenance",
    ],
    benefits: [
      "Clinically proven 50% more effective than sleeping pills for chronic insomnia.",
      "80% of users see dramatic sleep improvement in less than 4 weeks.",
      "Addresses root psychological causes rather than surface-level symptoms.",
      "FSA/HSA eligible with potential $3,700 cost savings per employee over 2 years.",
      "Accessible alternative to 12+ month wait times for sleep therapists.",
    ],
    year: 2023,
    client: "Stellar Sleep (Harvard Innovation Labs venture)",
    results:
      "Over 10,000 users helped with 4.8/5 star rating across platforms. Clinical assessment shows significant improvement within 5 weeks, with users reporting increases from 3-5 hours to 7-8 hours of sleep nightly.",
    image: "/projects/stellar-sleep/stellar-sleep-project.png",
    url: "https://stellarsleep.com/",
    moreImages: [
      "/projects/stellar-sleep/stellar-sleep-project-2.png",
      "/projects/stellar-sleep/stellar-sleep-project-3.png",
      "/projects/stellar-sleep/stellar-sleep-project-4.png",
      "/projects/stellar-sleep/stellar-sleep-project-5.png",
    ],
  },
  {
    slug: "vivas-home-solutions",
    title: "Vivas Home Solutions",
    description:
      "Vivas Home Solutions offers comprehensive home improvement services, including pool systems, interior design, air conditioning, and home automation, tailored to enhance residential living spaces.",
    tag: "LANDING PAGE",
    subtitle:
      "Comprehensive solutions for modernizing and enhancing your home environment.",
    features: [
      "Pool system installation and maintenance",
      "Interior design and home decoration",
      "Ventilation and air conditioning services",
      "CCTV and security system setup",
      "Garden design and landscaping",
      "Home automation integration",
      "Solar roof installation",
      "Wallpaper and curtain services",
    ],
    benefits: [
      "Enhances home comfort and aesthetics.",
      "Improves energy efficiency with modern solutions.",
      "Increases property value through quality upgrades.",
      "Provides security and peace of mind with advanced systems.",
      "Offers personalized services tailored to homeowner needs.",
    ],
    year: 2023,
    client: "Vivas Home Solutions",
    results:
      "Established as a trusted provider of comprehensive home improvement services, delivering customized solutions to homeowners seeking to enhance their living spaces.",
    image: "/projects/vivas-home-solutions/vivas-home-solutions-project.png",
    url: "https://www.vivashomesolutions.com/",
    moreImages: [
      "/projects/vivas-home-solutions/vivas-home-solutions-project-2.png",
      "/projects/vivas-home-solutions/vivas-home-solutions-project-3.png",
      "/projects/vivas-home-solutions/vivas-home-solutions-project-4.png",
      "/projects/vivas-home-solutions/vivas-home-solutions-project-5.png",
    ],
  },
  {
    slug: "transfer-book",
    title: "Transfer Book",
    description:
      "Transfer Book is an online platform offering accounting solutions, providing users with tools to manage financial transactions and records efficiently.",
    tag: "WEB APP",
    subtitle:
      "Streamlined accounting platform for managing financial transactions and records.",
    features: [
      "User-friendly interface for financial management",
      "Secure login with email and password",
      "Comprehensive transaction tracking",
      "Financial reporting and analysis tools",
      "Data export and import capabilities",
      "Cloud-based storage for data accessibility",
    ],
    benefits: [
      "Simplifies financial management for individuals and businesses.",
      "Enhances accuracy in financial record-keeping.",
      "Provides real-time insights into financial health.",
      "Ensures data security and privacy.",
    ],
    year: 2025,
    client: "Oscar Calamita",
    results:
      "Established as a reliable accounting solution, aiding users in efficient financial management and decision-making.",
    image: "/projects/transfer-book/transfer-book-project.png",
    url: "https://www.transfer-book.com/",
    moreImages: [
      "/projects/transfer-book/transfer-book-2.png",
      "/projects/transfer-book/transfer-book-3.png",
      "/projects/transfer-book/transfer-book-4.png",
      "/projects/transfer-book/transfer-book-5.png",
    ],
  },
];

const getAllProjects = () => projects;

const getLimitedProjects = () => {
  return projects.slice(0, 4);
};

const getProject = (slug: string) => {
  return projects.find((project) => project.slug === slug);
};

const getMoreProjects = (slug: string) => {
  // Get all projects except the current one, shuffle them randomly, then pick the first three
  return projects
    .filter((project) => project.slug !== slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
};

export type { Project };

export { getProject, getAllProjects, getLimitedProjects, getMoreProjects };
