import {
  Project,
  Experience,
  SkillCategory,
  Service,
  Achievement,
  Testimonial,
} from "../types";

export const PERSONAL_INFO = {
  name: "Hassan Raza",
  title: "Full Stack Developer",
  subtitle:
    "Full Stack Developer skilled in building scalable web applications using React.js, Next.js, Node.js, Express.js, MongoDB, and PostgreSQL.",
  location: "Karachi, Pakistan",
  email: "hassanraza.sudo@gmail.com",
  github: "https://github.com/hassanraza-sudo",
  linkedin: "https://linkedin.com/in/hassanraza-cs",
  resumeUrl: "#", // Handled via elegant modal or custom action
  availability: "Open to International Remote Roles",
  aboutMe:
    "I am a BS Computer Science graduate from Sukkur IBA University and a dedicated Full Stack Developer specializing in the MERN ecosystem. My passion lies in constructing clean, responsive, and robust web applications that solve real-world problems. With a rigorous analytical background and a meticulous attention to UI/UX, I bridge the gap between backend scalability and frontend craftsmanship. I thrive in remote, high-agency environments and am actively seeking software engineering positions at forward-thinking companies like Vercel, Stripe, and high-growth startups.",
};

export const STATISTICS: Achievement[] = [
  {
    id: "1",
    label: "Years of Experience",
    value: 2,
    suffix: "+",
    description: "Professional & freelance development",
  },
  {
    id: "2",
    label: "Completed Projects",
    value: 15,
    suffix: "+",
    description: "Production-ready web applications",
  },
  {
    id: "3",
    label: "GitHub Repositories",
    value: 24,
    suffix: "",
    description: "Open-source contributions",
  },
  {
    id: "4",
    label: "Total Commits",
    value: 1200,
    suffix: "+",
    description: "In the past 12 months alone",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    role: "Full Stack Developer (Remote)",
    company: "StudienRoute German Consultancy, Berlin, Germany",
    period: "Jan 2025 - Present",
    location: "Berlin, Germany (Remote)",
    achievements: [
      "Designed, developed, and deployed a full-stack study-abroad consultancy platform using the MERN Stack, streamlining student profiling and pathway mapping.",
      "Built reusable, highly interactive React UI components styled with Tailwind CSS, improving overall client onboarding conversion rate.",
      "Optimized user experiences and integrated secure RESTful APIs to handle dynamic document management, tracking checklists, and consultant bookings.",
    ],
    skills: [
      "MERN Stack",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
      "Tailwind CSS",
    ],
  },
  {
    id: "2",
    role: "Software Engineer Intern (Full Stack)",
    company: "ISPR, Rawalpindi",
    period: "Jun 2025 - Aug 2025",
    location: "Rawalpindi, Pakistan",
    achievements: [
      "Developed and deployed full-stack web applications inside secure infrastructure, significantly improving operational workflow efficiency across multiple internal departments.",
      "Built reusable, modular React.js frontend components and integrated RESTful APIs to achieve fast, dynamic data rendering under concurrent user access.",
      "Collaborated seamlessly within cross-functional teams using Git-based version control, adhering to strict production delivery schedules and agile workflows.",
    ],
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Git",
      "Agile Workflows",
    ],
  },
  {
    id: "3",
    role: "Web Developer",
    company: "FastTech, Sukkur",
    period: "May 2023 - Jul 2024",
    location: "Sukkur, Pakistan",
    achievements: [
      "Developed fully responsive, user-friendly, and accessible web applications, delivering optimized client layouts with seamless desktop and mobile rendering.",
      "Integrated external and internal APIs, debugged legacy application issues, and successfully delivered high-quality, production-ready web features under tight deadlines.",
      "Worked with clients to gather detailed specifications, translate user requirements into interactive designs, and provide technical guidance.",
    ],
    skills: [
      "React.js",
      "HTML5 & CSS3",
      "JavaScript",
      "API Integration",
      "Debugging",
      "Web Optimization",
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: "Expert" },
      { name: "Next.js", level: "Advanced" },
      { name: "TypeScript", level: "Expert" },
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "Redux", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Framer Motion", level: "Advanced" },
    ],
  },
  {
    title: "Backend Engineering",
    skills: [
      { name: "Node.js", level: "Expert" },
      { name: "Express.js", level: "Expert" },
      { name: "FastAPI", level: "Intermediate" },
      { name: "REST API Design", level: "Expert" },
      { name: "Socket.io", level: "Advanced" },
      { name: "JWT Authentication", level: "Expert" },
      { name: "bcrypt hashing", level: "Expert" },
    ],
  },
  {
    title: "Databases & ORM",
    skills: [
      { name: "MongoDB", level: "Expert" },
      { name: "Mongoose ODM", level: "Expert" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
    ],
  },
  {
    title: "Cloud & Developer Tools",
    skills: [
      { name: "Git & GitHub", level: "Expert" },
      { name: "Google Cloud Platform", level: "Intermediate" },
      { name: "Postman", level: "Expert" },
      { name: "VS Code", level: "Expert" },
      { name: "IntelliJ IDEA", level: "Advanced" },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Python", level: "Advanced" },
      { name: "Java", level: "Intermediate" },
      { name: "C++", level: "Advanced" },
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "eld-route-planner",
    title: "ELD Route Planner",
    subtitle: "FMCSA-Compliant Route Optimizer",
    description:
      "A robust full-stack routing and driver safety solution. Incorporates Federal Motor Carrier Safety Administration (FMCSA) Hours of Service (HOS) rules, OpenRouteService API mapping, and automated log sheet generation.",
    category: "Full Stack",
    tags: ["React", "Django REST", "OpenRouteService", "Python", "PostgreSQL"],
    githubUrl: "https://github.com/hassanraza-sudo/eld-route-planner",
    liveUrl: "https://eld-route-planner-theta.vercel.app/",
    problem:
      "Truck fleet dispatchers and long-haul drivers struggle to balance route efficiency with mandatory rest breaks, frequently causing costly federal FMCSA safety hours-of-service compliance violations.",
    solution:
      "Designed an interactive full-stack ELD Route Planner. It calculates the fastest cargo transit routes, overlays interactive rest stops along the path based on driver driving-time state machines, and compiles compliant digital logs.",
    keyFeatures: [
      "Automated rest break suggestions along the route using OpenRouteService API.",
      "Dynamic FMCSA Hours of Service (HOS) compliance validation engines.",
      "Interactive vector map routing with custom vehicle weight & dimension configurations.",
      "Driver log generator compiling instant daily logs in standardized JSON and printer formats.",
    ],
    architecture:
      "Separated client-server architecture. Built on a modular React single page application communicating with a Python Django REST Framework compliance endpoint and spatial database.",
    challenges:
      "Translating continuous driving paths and speed profiles into discrete, rule-based rest break points on complex multi-state itineraries.",
    lessons:
      "Leveraging Python geodesic and network metrics with caching significantly optimized the computation speed of long-haul rest stop recommendations to under 120ms.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "equalpay",
    title: "EqualPay",
    subtitle: "Roommate communal expense-sharing ledger",
    description:
      "A modern financial ledger designed to track, category-tag, and automatically split roommate bills fairly, minimizing individual transaction transfers using a custom settlement graph algorithm.",
    category: "Full Stack",
    tags: ["React", "Supabase", "PostgreSQL", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/hassanraza-sudo/EqualPay",
    liveUrl: "https://equal-pay.vercel.app/",
    problem:
      "Communal household and group expense tracking is prone to delayed payments, manual split errors, and friction during balance resolution.",
    solution:
      "Engineered EqualPay, a lightweight expense ledger incorporating a real-time database. The system automatically computes and balances peer debts and runs a transaction reduction graph to resolve balances in the fewest steps.",
    keyFeatures: [
      "COMMUNAL expense logging with dynamic itemized split divisions.",
      "Optimized transaction-reduction algorithm to minimize individual peer transfers.",
      "Supabase database integration with automatic relational foreign key ledger updates.",
      "Responsive interface styled with Tailwind and fluid Framer Motion status cues.",
    ],
    architecture:
      "Serverless full-stack structure. Built with React + Vite frontend utilizing Supabase backend for secure authentication, relational query storage, and real-time ledger sync.",
    challenges:
      "Calculating optimal settlement matrices when roommates dynamically enter, exit, or unequal-split individual items.",
    lessons:
      "Successfully implemented database triggers on row insertions to auto-balance group ledgers, preventing floating-point rounding conflicts across large datasets.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "adsnexsus-digital",
    title: "AdsNexsus Digital",
    subtitle: "Modern Digital Marketing & Business Growth Platform",
    description:
      "Designed and developed a high-performance business website for AdsNexsus Digital, showcasing digital marketing services, lead generation solutions, and brand growth strategies with a modern, conversion-focused user experience.",
    category: "Full Stack",
    tags: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
      "Vercel",
    ],
    githubUrl: "https://github.com/hassanraza-sudo/DigitalAds_NexaForge",
    liveUrl: "https://www.adsnexsusdigital.com/",
    problem:
      "The client needed a modern online presence that effectively showcased digital marketing services, established credibility, and converted visitors into potential clients while maintaining fast performance and excellent user experience.",
    solution:
      "Built a responsive and SEO-friendly business website featuring service pages, company information, contact forms, smooth animations, and a conversion-focused design optimized for desktop and mobile users.",
    keyFeatures: [
      "Modern responsive UI optimized for all screen sizes.",
      "SEO-friendly architecture with fast page loading.",
      "Interactive service showcase with smooth Framer Motion animations.",
      "Contact and lead generation forms for customer inquiries.",
      "Professional branding with optimized user experience and accessibility.",
    ],
    architecture:
      "Built using React, TypeScript, Vite, and Tailwind CSS with a modular component-based architecture. Deployed on Vercel for high availability, fast global delivery, and excellent performance.",
    challenges:
      "Balancing modern visual design, performance optimization, responsive layouts, and SEO while creating a business-focused website that effectively converts visitors into leads.",
    lessons:
      "Strengthened expertise in modern frontend architecture, UI/UX design principles, performance optimization, SEO best practices, and deploying production-ready React applications.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "estatepro",
    title: "EstatePro",
    subtitle: "Multi-Role Property Portal",
    description:
      "An enterprise-grade full-stack real estate platform featuring secure role-based portals for Admins, Agents, Landlords, and Buyers alongside high-performance listings search.",
    category: "Full Stack",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "bcrypt"],
    githubUrl: "https://github.com/hassanraza-sudo/EstatePro",
    liveUrl: "https://estate-pro-one.vercel.app/",
    problem:
      "Property listings portals are frequently unorganized, slow to update, and lack structured portals for individual stakeholders (buyers, agents, landlords).",
    solution:
      "Created EstatePro, an all-in-one housing gateway matching users with tailored dashboards. Included advanced sub-50ms listing indexing, tour schedules, and secure chat pipelines.",
    keyFeatures: [
      "Advanced multi-stakeholder dashboards tailored for Buyer, Agent, Landlord, and Admin.",
      "Dynamic property listing wizards with structured amenities and multi-image uploads.",
      "JWT session management with secure HTTP-only cookies and bcrypt password hashing.",
      "Automated buyer tour scheduler and dynamic messaging notification hubs.",
    ],
    architecture:
      "Separated MERN architecture. The system leverages custom Express API routers and middleware layers to validate credentials and aggregate document lists.",
    challenges:
      "Designing highly complex query aggregations to support compound, multi-category real estate filters.",
    lessons:
      "Learned to set compound database indexes on frequently queried properties (location, price, tags) to reduce Mongo collection scanning latency from 340ms to under 15ms.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "school-website",
    title: "School Website",
    subtitle: "High-Performance Education Portal",
    description:
      "A fully responsive and accessible school management platform. Incorporates digital admissions portals, dynamic notices CMS, and secure Nodemailer email pipelines.",
    category: "Web Dev",
    tags: ["React.js", "TypeScript", "Node.js", "MongoDB", "Nodemailer"],
    githubUrl: "https://github.com/hassanraza-sudo/School_Website",
    liveUrl: "https://school-website-eight-snowy.vercel.app/",
    problem:
      "Edu websites are often poorly optimized, lack support for digital admission entries, and offer low accessibility scores on mobile networks.",
    solution:
      "Developed a comprehensive school hub featuring online student admissions, interactive school notices boards, and email templates for admission confirmations.",
    keyFeatures: [
      "Interactive online admissions module with live status evaluation.",
      "Custom notice board and event dashboard with reactive filtering.",
      "TypeScript type-safety implemented across all form payloads and models.",
      "Automated email templates for admissions and direct contact inquiries via Nodemailer.",
    ],
    architecture:
      "Full stack SPA. Built with a React + Vite + TypeScript frontend linked to a Node.js API and a MongoDB document collection.",
    challenges:
      "Optimizing heavy educational media assets (galleries, announcements) to maintain high performance scores on cellular networks.",
    lessons:
      "Leveraged Vite asset chunk splitting and lazy loaded dynamic routes, dropping initial page load bundles by over 42% and raising Lighthouse performance score to 98.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
];

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "Full Stack Development",
    description:
      "End-to-end web engineering. Building robust servers, relational & non-relational database models, and matching them with modern, hyper-responsive client interfaces.",
    iconName: "Database",
  },
  {
    id: "2",
    title: "React & Next.js Architecture",
    description:
      "Engineering highly scalable client-side products. Focusing on state management, optimized rendering pipelines, elegant layout transitions, and pixel-perfect responsiveness.",
    iconName: "Layout",
  },
  {
    id: "3",
    title: "Node.js API Engineering",
    description:
      "Designing restful, secure, and clean API networks. Outfitting route controllers with rigorous JWT verification, input validation, and consistent HTTP responses.",
    iconName: "Cpu",
  },
  {
    id: "4",
    title: "Performance & SEO Optimization",
    description:
      "Fine-tuning core web vitals. Auditing network payloads, introducing asset lazy-loading, caching assets, and structuring metadata to guarantee near-perfect search relevance.",
    iconName: "Zap",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "A full-stack developer who consistently delivers high-quality code. His ability to build complex backend APIs and combine them with beautiful frontends is rare and incredibly valuable.",
    author: "Independent Contract Client",
    role: "Lead Architect",
    company: "Fintech Startup",
  },
];
