import { image } from "framer-motion/client";

export const projectsData = [
  {
    id: 1,
    slug: "expense-manager",
    title: "Expense Manager",
    subtitle: "Full-Stack Personal Finance & Analytics Application",
    category: "Full-Stack",
    featured: true,
    tagline:
      "A full-stack expense tracking platform with secure CRUD operations, date-range filtering, and financial insights powered by React, Django REST Framework, and PostgreSQL.",
    description:
      "A full-stack expense management application built with React, Django REST Framework, and PostgreSQL, featuring expense tracking, date-based filtering, and organized transaction management.",
    fullDescription:
      "Expense Manager was engineered to provide a responsive, friction-free tool for managing personal finances. By pairing a responsive React interface with a robust Django REST backend and PostgreSQL database, the application handles comprehensive CRUD operations, transaction categorization, date-range filtering, and real-time expense breakdown charts.",
    problem:
      "Managing daily expenses can become difficult without a clear overview of spending, organized transaction records, and efficient ways to find past expenses. Users need a simple interface to track, manage, and review their financial activity.",
    solution:
      "Built a responsive Expense Manager with a React frontend and Django REST API backend, using PostgreSQL for structured data storage. The application supports expense creation, updates, deletion, and date-based search, helping users manage transactions through a clean interface.",
    technologies: [
      "React.js",
      "Django",
      "PostgreSQL",
      "REST APIs",
      "Tailwind CSS",
      "JavaScript",
    ],
    features: [
      "Complete Expense Management",
      "Category-Based Expense Tracking",
      "Date-Range Filtering & Search",
      "Expense Summary & Analytics",
      "Quick Edit & Delete Actions",
      "Fully Responsive Interface",
    ],
    challenges: [
      "Integrating the React frontend with Django REST APIs and configuring secure cross-origin requests.",
      "Connecting Django models with PostgreSQL to store and retrieve expense records reliably.",
      "Managing expense data and search filters while maintaining a consistent experience across screen sizes.",
    ],
    liveUrl: "https://expense-tracker-with-backend.vercel.app/",
    githubUrl: "https://github.com/priyansh-manav/Expense-Tracker-with-backend",
    accentColor: "#3B82F6",
    image: "/images/expense-manager.png",
    mockupGradient: "from-blue-600/30 to-violet-600/20",
    status: 'Live Project',
  },
  {
    id: 2,
    slug: "stylex-ecommerce",
    title: "StyleX E-Commerce",
    subtitle: "Modern Fashion Storefront with Dynamic Cart & Wishlist",
    category: "Frontend & UI",
    featured: true,
    tagline:
      "Fashion discovery platform with high-fidelity animated interactions, cart state, and curated catalogs.",
    description:
      "A responsive fashion e-commerce interface built with React and Tailwind CSS, featuring product browsing, interactive cart management, wishlist functionality, and animated UI transitions.",
    fullDescription:
      "StyleX E-Commerce focuses on delivering a boutique shopping experience through refined micro-interactions and instant state responsiveness. Developed with React.js and Tailwind CSS, it features an interactive product catalog with size/color selectors, dynamic shopping cart drawer with instant subtotal calculations, and persistent wishlist interactions.",
    problem:
      "Many retail storefronts suffer from clunky navigation, disjointed product cards, and slow cart updates that undermine user confidence during online shopping.",
    solution:
      "Implemented an animated, modern UI with clear typography, smooth micro-interactions, responsive grid layouts, and predictable state management for cart and wishlist functionality.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Web Design",
      "REST APIs",
    ],
    features: [
      "Curated product showcase with interactive hover previews",
      "Real-time shopping cart with item increment, decrement, and removal",
      "Interactive Wishlist toggle with visual feedback",
      "Category filtering (Streetwear, Minimal, Formal, Accessories)",
      "Fluid drawer navigation and mobile-first responsive layout",
      "Price computation with automatic shipping and tax estimation",
    ],
    challenges: [
      "Designing state workflows for cart items ensuring seamless quantity updates and total computations without redundant re-renders.",
      "Crafting accessible modal drawers and dropdowns that retain smooth 60fps animations across mobile devices.",
      "Maintaining consistent layout alignment across diverse aspect ratios of fashion photography.",
    ],
    liveUrl: "https://example.com/stylex-ecommerce",
    githubUrl: "https://github.com/priyanshmanav/stylex-ecommerce",
    image: "/images/e-com.png",
    accentColor: "#8B5CF6",
    mockupGradient: "from-violet-600/30 to-cyan-500/20",
  },
  {
    id: 3,
    slug: "daily-sadhana",
    title: "Daily Sadhana",
    subtitle: "Mindful Spiritual Routine & Prayer Tracking Web Application",
    category: "Web Application",
    featured: true,
    tagline:
      "Serene, distraction-free digital companion for prayer routines, meditation counters, and daily reflection.",
    description:
      "A spiritual practice tracking web application designed to help users maintain daily prayer routines, track mantra chanting, and build consistent spiritual habits through a clean, responsive interface.",
    fullDescription:
      "Daily Sadhana was created to offer an uncluttered, peaceful digital sanctuary for maintaining prayer schedules, chanting counters (japa), spiritual readings, and reflective journaling. Built with React and modern CSS, it emphasizes calm visual pacing, soothing color schemes, and seamless mobile responsiveness.",
    problem:
      "Most habit and tracking tools are loud, filled with gamified alerts, high-stimulation badges, and advertisements that run counter to spiritual focus and meditation.",
    solution:
      "Constructed a minimalist, tranquil web experience with soft contrast, intuitive counters, structured prayer lists, and zero distracting noise.",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Responsive UI Design",
    ],
    features: [
      "Daily prayer routine checklist",
      "Interactive Japa/Mantra counter with reset functionality",
      "Daily inspirational verses and personal reflections",
      "Lightweight local persistence to track routine consistency",
      "Calming dark aesthetic crafted for morning and evening meditation",
      "Fully responsive touch-friendly interface for phones and tablets",
    ],
    challenges: [
      "Balancing minimalistic visual tranquility with practical tracking utilities and clear typography.",
      "Ensuring seamless touch response for the interactive counter without double-tap zooming on iOS and Android browsers.",
      "Architecting resilient client-side state storage so user daily logs persist reliably.",
    ],
    liveUrl: "https://example.com/daily-sadhana",
    githubUrl: "https://github.com/priyanshmanav/daily-sadhana",
    image: "/images/daily-sadhana.png",
    accentColor: "#22D3EE",
    mockupGradient: "from-cyan-500/30 to-blue-600/20",
  },
];

export const getProjectBySlug = (slug) => {
  return projectsData.find((project) => project.slug === slug);
};
