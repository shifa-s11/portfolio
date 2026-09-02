"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type SkillItem = {
  name: string;
  level: number;
};

type SkillCapability = {
  id: string;
  icon: string;
  title: string;
  subtext: string;
  tagline: string;
  description: string;
  skills: SkillItem[];
};

type ExperienceItem = {
  company: string;
  role: string;
  dates: string;
  location?: string;
  link?: string;
  linkText?: string;
  isCurrent?: boolean;
  points: string[];
};

type ProjectItem = {
  title: string;
  date: string;
  status?: string;
  stack: string[];
  description: string;
  impact: string[];
  github?: string | null;
  live?: string | null;
  size?: "wide" | "tall";
};

const roles = [
  "Full Stack Developer",
  "Freelance Developer",
  "Frontend Engineer",
  "GenAI Focused Developer",
];

const heroNameLines = ["SHIFA", "SAEED"];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const timelineMoments = [
  {
    label: "Nov 2022",
    title: "Started B.Tech in Computer Science",
    body: "Began building a foundation in systems thinking, algorithms, and production-oriented web development at Dr. A.P.J. Abdul Kalam Technical University.",
  },
  {
    label: "Sep 2023 - Present",
    title: "Blockchain Research Lab",
    body: "Contributed as a React Developer and coordinator, pairing frontend performance work with event leadership across a growing technical community.",
  },
  {
    label: "Sep 2025 - Feb 2026",
    title: "Internship Sprint",
    body: "Shipped frontend and full-stack work across SpiceCatch and Webinar Leads Hub, with measurable gains in performance, system reuse, and real-time operations.",
  },
  {
    label: "Apr 2026 - Present",
    title: "Fundvice & Freelance Platforms",
    body: "Architecting multi-tenant AI recruitment platforms (fawin.in) with Next.js and Supabase, alongside engineering freelance client web platforms like Pangea Performance.",
  },
];

const educationItems = [
  {
    institution: "Dr. A.P.J. Abdul Kalam Technical University",
    location: "Ghaziabad, Uttar Pradesh",
    program: "Bachelor in Computer Science and Engineering",
    score: "8.7 / 10",
    duration: "2022 - Present",
  },
  {
    institution: "Sanfort World School",
    location: "Moradabad, Uttar Pradesh",
    program: "XII (CBSE)",
    score: "82.8%",
    duration: "2020 - 2021",
  },
  {
    institution: "S.S. Children Academy",
    location: "Moradabad, Uttar Pradesh",
    program: "X (CBSE)",
    score: "94.2%",
    duration: "2018 - 2019",
  },
];

const skillCapabilities: SkillCapability[] = [
  {
    id: "frontend",
    icon: "⚛️",
    title: "Frontend Systems",
    subtext: "React.js, Next.js & UI",
    tagline: "High-performance interfaces, responsive design, and fluid motion",
    description:
      "Interface systems shaped around responsive performance, reusable component systems, accessible primitives, and state clarity.",
    skills: [
      { name: "React.js", level: 93 },
      { name: "Next.js", level: 91 },
      { name: "Tailwind CSS", level: 89 },
      { name: "Zustand", level: 82 },
      { name: "Redux", level: 84 },
      { name: "React Native", level: 68 },
    ],
  },
  {
    id: "backend",
    icon: "⚡",
    title: "Backend & APIs",
    subtext: "Node, Express & Supabase",
    tagline: "Scalable services, multi-tenant isolation, and secure APIs",
    description:
      "API-driven systems with secure workspace isolation, role-based access control, real-time webhooks, and scalable relational data flows.",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "REST APIs", level: 90 },
      { name: "Express.js", level: 84 },
      { name: "Supabase", level: 86 },
      { name: "FastAPI", level: 73 },
    ],
  },
  {
    id: "languages",
    icon: "💻",
    title: "Core Languages",
    subtext: "TypeScript, Python & C++",
    tagline: "Type-safe logic, algorithms, and production problem-solving",
    description:
      "Foundational languages used for day-to-day product execution, algorithmic problem solving, system programming, and data manipulation.",
    skills: [
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "HTML5 / CSS3", level: 94 },
      { name: "Python", level: 80 },
      { name: "C / C++", level: 85 },
    ],
  },
  {
    id: "databases",
    icon: "🗄️",
    title: "Databases & Cache",
    subtext: "MongoDB, PostgreSQL & Redis",
    tagline: "Relational modeling, document stores, and high-speed caching",
    description:
      "Relational databases and NoSQL document stores with Redis session management, atomic credit transaction logging, and indexed search.",
    skills: [
      { name: "MongoDB", level: 86 },
      { name: "PostgreSQL / SQL", level: 79 },
      { name: "Redis", level: 76 },
    ],
  },
  {
    id: "realtime",
    icon: "🔄",
    title: "Real-Time & FSM",
    subtext: "WebSocket, Socket.IO & Events",
    tagline: "Live data feeds, finite state machines, and event orchestration",
    description:
      "Engineered candidate lifecycle state engines with FSM, live booking holds with Socket.IO, and real-time visitor management.",
    skills: [
      { name: "WebSocket", level: 82 },
      { name: "Socket.IO", level: 85 },
      { name: "FSM State Engines", level: 88 },
      { name: "Event Webhooks", level: 86 },
    ],
  },
  {
    id: "genai",
    icon: "🧠",
    title: "GenAI & Voice",
    subtext: "LLM APIs & Voice Screening",
    tagline: "Contextual prompt pipelines, voice screening, and AI agents",
    description:
      "Integrated automated voice screening, contextual LLM follow-up interview logic, adaptive difficulty, and AI-generated scorecards.",
    skills: [
      { name: "LLM APIs", level: 85 },
      { name: "Voice Screening", level: 82 },
      { name: "Contextual AI Workflows", level: 80 },
    ],
  },
  {
    id: "devops",
    icon: "🚀",
    title: "DevOps & Cloud",
    subtext: "Docker, AWS, Vercel & CI/CD",
    tagline: "Containerization, edge delivery, and continuous deployment",
    description:
      "The deployment layer for fast iteration, edge optimization with Cloudflare, Vercel hosting, AWS services, and automated CI/CD pipelines.",
    skills: [
      { name: "Git / GitHub / CI/CD", level: 88 },
      { name: "Vercel & Cloudflare", level: 78 },
      { name: "AWS", level: 75 },
      { name: "Docker", level: 72 },
    ],
  },
  {
    id: "algorithms",
    icon: "📊",
    title: "DSA & Data Science",
    subtext: "250+ LeetCode, Pandas & NumPy",
    tagline: "Algorithmic thinking, data transformation, and visualization",
    description:
      "Strong data structures and algorithms foundation with 250+ LeetCode problems solved, paired with Python data analysis toolkits.",
    skills: [
      { name: "Data Structures & Algorithms", level: 90 },
      { name: "Pandas", level: 80 },
      { name: "NumPy", level: 76 },
      { name: "Matplotlib & Seaborn", level: 72 },
    ],
  },
];

const experiences: ExperienceItem[] = [
  {
    company: "Fundvice",
    role: "Full Stack Developer Intern",
    dates: "Apr 2026 - Present",
    link: "https://fawin.in",
    linkText: "fawin.in",
    isCurrent: true,
    points: [
      "Architected and developed the full-stack infrastructure for a multi-tenant AI recruitment platform using Next.js, Supabase, and relational databases, establishing secure workspace isolation and granular role-based access control.",
      "Engineered a candidate lifecycle state engine using FSM to orchestrate recruiting pipelines, integrating automated voice screening, real-time webhooks, and atomic credit transaction logging.",
    ],
  },
  {
    company: "Webinar Leads Hub",
    role: "Full Stack Developer Intern",
    dates: "Dec 2025 - Feb 2026",
    points: [
      "Integrated third-party services such as WhatsApp automation, Zoom APIs, and event-driven webhooks into a CRM-style webinar platform built with React/Nest.js enabling real-time communication workflows and seamless coordination.",
    ],
  },
  {
    company: "SpiceCatch",
    role: "Frontend Developer Intern",
    dates: "Sep 2025 - Dec 2025",
    points: [
      "Built a performant Next.js frontend using Zustand and Radix UI, reducing page load time by 35% and boosting development efficiency by 40% through reusable, accessible components that ensured a consistent, scalable design system.",
    ],
  },
  {
    company: "Gulnazion Technologies",
    role: "Frontend Developer Intern",
    dates: "Jun 2025 - Aug 2025",
    points: [
      "Built core CRM and lead pipeline experiences including list and Kanban views, 7-stage drag-and-drop tracking, and one-click lead-to-client conversion flows.",
      "Implemented qualification scoring, follow-up activity workflows, CSV lead import, and decision-maker tracking to streamline agency sales operations.",
    ],
  },
];

const responsibility = {
  organization: "Blockchain Research Lab | BRL",
  role: "React Developer, Coordinator",
  dates: "Sep 2023 - Present",
  location: "Ghaziabad, Uttar Pradesh",
  points: [
    "Streamlined frontend architecture to achieve 30% faster load times during peak traffic with 500+ concurrent users.",
    "Led 38 members across 7 technical events with more than 1,200 participants.",
  ],
};

const projects: ProjectItem[] = [
  {
    title: "Pangea Performance",
    date: "2026",
    status: "Freelance Project",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
    description:
      "A client-focused freelance web application developed with modern frontend architecture, responsive design, and seamless interactive workflows.",
    impact: [
      "Architected and delivered the responsive frontend and user interface tailored to client specifications with modern UI/UX principles.",
      "Optimized rendering speed, asset delivery, and interactive workflows across devices to provide a fluid, accessible digital experience.",
    ],
    github: null,
    live: "https://pangeaperformance.com",
    size: "wide",
  },
  {
    title: "EduVerse",
    date: "Sep 2025",
    status: "Featured",
    stack: ["Next.js", "Node.js", "MongoDB", "Razorpay", "RTK Query", "Redis"],
    description:
      "A full-stack EdTech platform that combines secure payments, admin tooling, and real-time learning workflows.",
    impact: [
      "Built a role-based dashboard for course, user, and order management.",
      "Implemented JWT plus Redis-backed auth and Razorpay payments for secure, scalable access.",
    ],
    github: "https://github.com/shifa-s11/lms-client",
    live: "https://lms-client-three-omega.vercel.app",
    size: "wide",
  },
  {
    title: "AI Mock Interview Platform",
    date: "Mar 2026",
    status: "Completed",
    stack: ["Next.js", "TypeScript", "LLM APIs", "Voice Interaction"],
    description:
      "A GenAI-powered mock interview platform designed for contextual follow-up questioning, adaptive difficulty, and realistic interview practice.",
    impact: [
      "Built a mock interview workflow with Next.js, TypeScript, and LLM APIs, achieving 90%+ contextual relevance in follow-up questions and reducing response latency by 40%.",
      "Implemented adaptive difficulty, voice interaction, and AI-generated scorecards, increasing user engagement by 60% and improving interview simulation accuracy by 35%.",
    ],
    github: "https://github.com/shifa-s11/[PLACEHOLDER]",
    live: "[PLACEHOLDER]",
    size: "wide",
  },
  {
    title: "BuzzBook",
    date: "Live Project",
    status: "Team Project · Ongoing",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Socket.IO",
      "Razorpay",
      "shadcn/ui",
      "Google Maps API",
    ],
    description:
      "A full-stack movie ticket booking platform with a customer-facing app and admin dashboard for discovery, seat selection, snack add-ons, and secure checkout.",
    impact: [
      "Built authentication, movie and theatre discovery, seat selection, wishlist support, snack add-ons, and Razorpay-based checkout across the customer and admin flows.",
      "Developed real-time booking and management workflows with Socket.IO, including live seat holds, temporary booking sync, theatre and movie administration, and dashboard stats for bookings, users, movies, and revenue.",
    ],
    github: "https://github.com/Anshika2608/buzzbook_project",
    live: "https://buzzbook-project.vercel.app",
    size: "wide",
  },
  {
    title: "Droom",
    date: "Jul 2025",
    status: "Featured",
    stack: ["Next.js", "Stream SDK", "Clerk", "TypeScript", "shadcn/ui"],
    description:
      "A video meeting platform designed for fast session setup, smooth recordings, and reliable participant flows.",
    impact: [
      "Improved UI responsiveness by 30% through optimized pagination, recordings, and custom hook-based state handling.",
      "Reduced setup latency by 40% while supporting hundreds of participants.",
    ],
    github: "https://github.com/shifa-s11/droom",
    live: "https://droom-pi.vercel.app",
    size: "wide",
  },
  {
    title: "Vigilance+",
    date: "Jan 2024 - Present",
    status: "Team Project · Ongoing",
    stack: ["React.js", "Tailwind CSS", "JavaScript", "Next UI", "WebSocket"],
    description:
      "An ongoing team project for real-time visitor management, focused on lower entry friction, better accuracy, and automated reporting.",
    impact: [
      "Reduced entry errors by 78% across 100+ daily records using WebSocket-based workflows.",
      "Improved report accuracy by 95% and saved 10 administrative hours per week.",
    ],
    github: null,
    live: null,
    size: "wide",
  },
  {
    title: "OpsLens AI",
    date: "Upcoming",
    status: "Python + GenAI Idea",
    stack: ["Python", "FastAPI", "Next.js", "LLM APIs", "Vector Search"],
    description:
      "A real-world operations assistant for small teams that ingests SOPs, invoices, support chats, and internal documents to answer questions, flag issues, and generate action-ready summaries.",
    impact: [
      "Would use Python-based ingestion and retrieval pipelines to turn scattered business documents into a searchable GenAI workspace.",
      "Could save teams hours each week by automating summaries, follow-up tasks, and operational question answering in one place.",
    ],
    github: null,
    live: null,
    size: "wide",
  },
];

const achievements = [
  "Won Shankara Hackathon in the most innovative idea category from 75+ teams and received a cash prize.",
  "Won third prize in SCROLLS'23, a national-level research paper presentation competition.",
  "Solved 250+ LeetCode problems, strengthening data structures and algorithms fluency.",
];

const heroStats = [
  { value: "250+", label: "LeetCode problems solved" },
  { value: "35%", label: "Page-load improvement shipped" },
  { value: "1,200+", label: "Participants supported across events" },
];

const socialLinks = {
  email: "mailto:1107shifa@gmail.com",
  linkedin: "https://www.linkedin.com/in/shifa-saeed-2b5965268",
  github: "https://github.com/shifa-s11",
  leetcode: "https://leetcode.com/u/shifa_s1107/",
};

function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 6h18v12H3z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 9v8" />
      <path d="M7 5.5v.01" />
      <path d="M11 9v8" />
      <path d="M11 12.5a3.5 3.5 0 0 1 7 0V17" />
      <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 19c-4 1.2-4-2-6-2" />
      <path d="M15 22v-3.1a3.4 3.4 0 0 0-.9-2.6c3 0 6-1.8 6-6a4.7 4.7 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.3 1.3a11.1 11.1 0 0 0-6 0C7.1 3.6 6 3.9 6 3.9a4.3 4.3 0 0 0-.1 3.2 4.7 4.7 0 0 0-1.3 3.2c0 4.2 3 6 6 6a3.4 3.4 0 0 0-.9 2.6V22" />
      <path d="M9 18c-5 1.5-5-2.5-7-3" />
    </svg>
  );
}

function IconSpark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v5" />
      <path d="M12 16v5" />
      <path d="M3 12h5" />
      <path d="M16 12h5" />
      <path d="m6.4 6.4 3.5 3.5" />
      <path d="m14.1 14.1 3.5 3.5" />
      <path d="m17.6 6.4-3.5 3.5" />
      <path d="m9.9 14.1-3.5 3.5" />
    </svg>
  );
}

function IconLeetCode() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15.5 5 9 11.5l6.5 6.5" />
      <path d="M18.5 12H10" />
      <path d="m10.5 4.5-5 5a3.5 3.5 0 0 0 0 5l5 5" />
    </svg>
  );
}

function resolveLink(href?: string | null) {
  if (!href || href === "[PLACEHOLDER]") {
    return "#contact";
  }

  if (href.startsWith("www.")) {
    return `//${href}`;
  }

  return href;
}

function linkProps(href?: string | null) {
  return !href || href === "[PLACEHOLDER]"
    ? { "aria-label": "Placeholder link", title: "Add link later" }
    : { target: "_blank", rel: "noreferrer" };
}

function getProjectStatusTone(status?: string) {
  if (!status) {
    return "live";
  }

  const normalized = status.toLowerCase();

  if (normalized.includes("freelance")) {
    return "freelance";
  }

  if (normalized.includes("upcoming")) {
    return "upcoming";
  }

  if (normalized.includes("ongoing")) {
    return "ongoing";
  }

  if (normalized.includes("featured")) {
    return "featured";
  }

  return "live";
}

function getProjectStatusClass(status?: string) {
  const tone = getProjectStatusTone(status);

  if (tone === "featured") {
    return "bg-[rgba(0,212,170,0.1)] border border-[rgba(0,212,170,0.2)] text-[var(--teal)]";
  }

  if (tone === "freelance") {
    return "bg-[rgba(0,212,170,0.14)] border border-[rgba(0,212,170,0.3)] text-[var(--teal)]";
  }

  if (tone === "ongoing") {
    return "bg-[rgba(245,166,35,0.12)] border border-[rgba(245,166,35,0.24)] text-[#ffd089]";
  }

  if (tone === "upcoming") {
    return "bg-white/[0.07] border border-white/[0.14] text-[var(--muted-strong)]";
  }

  return "bg-[rgba(64,156,255,0.12)] border border-[rgba(64,156,255,0.24)] text-[#8fc2ff]";
}

function getProjectCardTone(index: number) {
  if (index % 3 === 0) {
    return "before:bg-[linear-gradient(135deg,rgba(0,212,170,0.12),transparent_34%),linear-gradient(225deg,rgba(245,166,35,0.05),transparent_30%)] after:bg-[radial-gradient(circle,rgba(0,212,170,0.14),transparent_68%)]";
  }

  if (index % 3 === 1) {
    return "before:bg-[linear-gradient(135deg,rgba(245,166,35,0.1),transparent_34%),linear-gradient(225deg,rgba(0,212,170,0.06),transparent_30%)] after:bg-[radial-gradient(circle,rgba(245,166,35,0.12),transparent_68%)]";
  }

  return "before:bg-[linear-gradient(135deg,rgba(143,248,228,0.08),transparent_34%),linear-gradient(225deg,rgba(64,156,255,0.08),transparent_30%)] after:bg-[radial-gradient(circle,rgba(64,156,255,0.14),transparent_68%)]";
}

function getSkillLevelLabel(level: number) {
  if (level >= 90) {
    return "Signature";
  }

  if (level >= 82) {
    return "Strong";
  }

  if (level >= 72) {
    return "Working";
  }

  return "Exploring";
}

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [selectedCapabilityIndex, setSelectedCapabilityIndex] = useState(0);
  const selectedCapability =
    skillCapabilities[selectedCapabilityIndex] ?? skillCapabilities[0];
  const heroRef = useRef<HTMLCanvasElement | null>(null);
  const projectOrder = [
    "EduVerse",
    "Pangea Performance",
    "AI Mock Interview Platform",
    "Droom",
    "BuzzBook",
    "Vigilance+",
    "OpsLens AI",
  ];
  const orderedProjects = [...projects].sort(
    (a, b) => projectOrder.indexOf(a.title) - projectOrder.indexOf(b.title),
  );

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          const next = currentRole.slice(0, typedText.length + 1);
          setTypedText(next);
          if (next === currentRole) {
            window.setTimeout(() => setIsDeleting(true), 1100);
          }
          return;
        }

        const next = currentRole.slice(0, typedText.length - 1);
        setTypedText(next);
        if (!next) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      },
      isDeleting ? 44 : 90,
    );

    return () => window.clearTimeout(timeout);
  }, [isDeleting, roleIndex, typedText]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches || !heroRef.current) {
      return;
    }

    const canvas = heroRef.current;
    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let frame = 0;
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.0007,
      speedY: (Math.random() - 0.5) * 0.0007,
    }));

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = () => {
      frame = window.requestAnimationFrame(draw);
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      context.clearRect(0, 0, width, height);
      context.strokeStyle = "rgba(255,255,255,0.04)";
      context.lineWidth = 1;

      for (let x = 0; x <= width; x += 36) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }

      for (let y = 0; y <= height; y += 36) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }

      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > 1) {
          particle.speedX *= -1;
        }
        if (particle.y < 0 || particle.y > 1) {
          particle.speedY *= -1;
        }

        context.beginPath();
        context.fillStyle =
          index % 5 === 0
            ? "rgba(245, 166, 35, 0.38)"
            : "rgba(0, 212, 170, 0.46)";
        context.arc(
          particle.x * width,
          particle.y * height,
          particle.size,
          0,
          Math.PI * 2,
        );
        context.fill();
      });
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const skillBars = document.querySelectorAll<HTMLElement>("[data-skill-bar]");
    const lineItems = document.querySelectorAll<HTMLElement>("[data-line-grow]");

    if (reducedMotion.matches) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      skillBars.forEach((item) =>
        item.style.setProperty("--target-width", `${item.dataset.width ?? 0}%`),
      );
      lineItems.forEach((item) => item.classList.add("line-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");

          if (entry.target instanceof HTMLElement && entry.target.dataset.skillBar) {
            entry.target.style.setProperty(
              "--target-width",
              `${entry.target.dataset.width ?? 0}%`,
            );
          }

          if (entry.target instanceof HTMLElement && entry.target.dataset.lineGrow) {
            entry.target.classList.add("line-visible");
          }

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.16 },
    );

    revealItems.forEach((item) => observer.observe(item));
    skillBars.forEach((item) => observer.observe(item));
    lineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      return;
    }

    const cards = document.querySelectorAll<HTMLElement>("[data-tilt-card]");

    const cleanups = Array.from(cards).map((card) => {
      const handleMove = (event: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = (x / rect.width - 0.5) * 10;
        const rotateX = (0.5 - y / rect.height) * 8;

        card.style.transform =
          `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      };

      const handleLeave = () => {
        card.style.transform =
          "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)";
      };

      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", handleLeave);

      return () => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", handleLeave);
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setIsNavScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="page-shell">
      <canvas ref={heroRef} className="hero-canvas" aria-hidden="true" />
      <div className="page-noise" aria-hidden="true" />

      <header
        className={[
          "sticky top-3 z-20 isolate mx-auto mt-[0.95rem] flex w-[min(1180px,calc(100%-2rem))] items-center justify-between gap-[1.4rem] rounded-full border border-white/8 px-[1.1rem] py-4 backdrop-blur-[18px] shadow-[0_16px_34px_rgba(0,0,0,0.18)] transition-[background-color,border-color,box-shadow] duration-220",
          isNavScrolled
            ? "bg-[rgba(7,11,21,0.82)] border-white/10 shadow-[0_18px_42px_rgba(0,0,0,0.26)]"
            : "bg-[rgba(7,11,21,0.58)]",
        ].join(" ")}
      >
        <a
          className="flex shrink-0 items-center gap-[0.85rem] whitespace-nowrap"
          href="#top"
          aria-label="Go to top"
        >
          <span className="grid size-[2.6rem] place-items-center rounded-full bg-[linear-gradient(135deg,var(--teal),#90ffeb)] font-[family-name:var(--font-display)] text-[1.1rem] font-extrabold text-[#071118]">
            S
          </span>
          <div>
            <strong className="block whitespace-nowrap text-[0.95rem]">
              Shifa Saeed
            </strong>
            <p className="mt-[0.16rem] text-[0.82rem] text-[var(--muted)]">
              Full-stack developer &amp; freelancer
            </p>
          </div>
        </a>

        <nav
          className="hidden flex-wrap justify-end gap-[0.35rem] md:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-[0.82rem] py-[0.55rem] text-[0.93rem] text-[var(--muted)] transition-[transform,background-color,border-color,box-shadow,color,opacity] duration-220 hover:bg-white/[0.045] hover:text-[var(--text)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <div className="eyebrow reveal is-visible">
            Developer &amp; Freelancer portfolio for product-focused, full-stack work
          </div>

          <p className="hero-intro reveal is-visible">
            Building scalable web experiences with a strong eye for clarity, motion,
            and production polish.
          </p>

          <h1 className="hero-title" aria-label="Shifa Saeed">
            {heroNameLines.map((line, lineIndex) => (
              <span key={line} className="hero-line">
                {line.split("").map((letter, letterIndex) => (
                  <span
                    key={`${line}-${letter}-${letterIndex}`}
                    className="hero-letter"
                    style={{
                      animationDelay: `${(lineIndex * 6 + letterIndex) * 0.055}s`,
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <p className="hero-role">
            <span>{typedText}</span>
            <span className="caret" aria-hidden="true" />
          </p>

          <p className="hero-summary">
            Computer Science undergraduate with hands-on experience building
            production-grade applications using React, Next.js, Node.js, and
            MongoDB. Strong in Data Structures and Algorithms, with practical
            experience shipping scalable, secure, and real-time systems.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore Projects
            </a>
            <a
              className="button button-secondary"
              href="/resume/Shifa-Saeed-Resume.pdf"
              download
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-aside reveal is-visible">
          <div className="hero-panel hero-panel-feature">
            <span className="hero-panel-label">Snapshot</span>
            <h2>Interfaces with discipline. Systems with momentum.</h2>
            <p>
              Shifa blends frontend craft with backend execution, building products
              that feel expressive on the surface and dependable underneath.
            </p>
          </div>

          <div className="hero-metrics">
            {heroStats.map((item) => (
              <article key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-[1] mx-auto w-[min(1180px,calc(100%-2rem))] py-12 max-sm:w-[min(100%-1.15rem,1180px)]" id="about">
        <div className="section-heading reveal mb-8 max-w-[48rem]" data-reveal>
          <span className="section-kicker inline-flex items-center gap-[0.55rem] text-[0.8rem] uppercase tracking-[0.18em] text-[var(--teal)] before:h-px before:w-[2.6rem] before:bg-[linear-gradient(90deg,transparent,currentColor)] before:content-['']">
            About
          </span>
          <h2 className="mt-[0.8rem] font-[family-name:var(--font-display)] text-[clamp(2rem,4.7vw,3.5rem)] leading-[1.14] tracking-[-0.05em] text-balance">
            A timeline-shaped profile with product instincts at the center.
          </h2>
        </div>

        <div>
          <article
            className="reveal grid h-fit gap-[1.8rem] rounded-[var(--radius-xl)] border border-[var(--surface-border)] bg-[linear-gradient(180deg,rgba(0,212,170,0.08),transparent_34%),linear-gradient(120deg,rgba(255,255,255,0.035),rgba(255,255,255,0.02)),var(--surface-strong)] p-[1.55rem] shadow-[var(--shadow)] backdrop-blur-[16px] md:grid-cols-[minmax(250px,290px)_minmax(0,1fr)]"
            data-reveal
          >
            <div className="relative mx-auto h-[360px] w-[min(100%,280px)] overflow-hidden rounded-[var(--radius-lg)] border border-white/8 bg-[radial-gradient(circle_at_top,rgba(0,212,170,0.1),transparent_44%),rgba(255,255,255,0.03)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_50px_rgba(0,0,0,0.28)] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-[34%] after:bg-[linear-gradient(180deg,transparent,rgba(10,15,30,0.18))] after:content-['']">
              <Image
                src="/images/shifa-profiles.jpeg"
                alt="Portrait of Shifa Saeed"
                fill
                sizes="(max-width: 900px) 280px, 320px"
                quality={100}
                className="object-cover [object-position:center_22%]"
                priority
              />
            </div>

            <div className="[&_p]:mb-4 [&_p]:text-[var(--muted)] [&_p]:leading-[1.8] [&_p]:text-pretty [&_p:last-child]:mb-0">
              <p>
                Shifa works across frontend systems, APIs, and real-time
                integrations, translating operational complexity into interfaces that
                feel calm, fast, and easy to trust.
              </p>
              <p>
                Her recent work spans EdTech, webinar tooling, visitor management,
                and internal product systems, with an emphasis on usability,
                performance, and maintainable architecture.
              </p>
              <p>
                She is exploring opportunities to build something meaningful where
                visual refinement and engineering rigor reinforce each other.
              </p>
            </div>
          </article>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {timelineMoments.map((item, index) => (
            <article
              key={item.title}
              className={[
                "reveal rounded-[var(--radius-xl)] border p-[1.55rem] shadow-[var(--shadow)] backdrop-blur-[16px]",
                index === 0
                  ? "border-[rgba(0,212,170,0.14)] bg-[linear-gradient(135deg,rgba(0,212,170,0.12),rgba(255,255,255,0.025)_55%,rgba(16,24,45,0.92))]"
                  : index === 1
                    ? "border-[rgba(245,166,35,0.16)] bg-[linear-gradient(135deg,rgba(245,166,35,0.12),rgba(255,255,255,0.02)_52%,rgba(16,24,45,0.92))]"
                    : index === 2
                      ? "border-[rgba(130,170,255,0.18)] bg-[linear-gradient(135deg,rgba(130,170,255,0.12),rgba(255,255,255,0.02)_50%,rgba(14,22,40,0.94))]"
                      : "border-[rgba(255,255,255,0.12)] bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(0,212,170,0.04)_45%,rgba(16,24,45,0.94))]",
              ].join(" ")}
              data-reveal
            >
              <span className="text-[0.86rem] uppercase tracking-[0.09em] text-[var(--amber)]">
                {item.label}
              </span>
              <h3 className="mt-[0.55rem] mb-[0.55rem] font-[family-name:var(--font-display)] text-[1.45rem] leading-[1.16]">
                {item.title}
              </h3>
              <p className="text-[var(--muted)] leading-[1.8] text-pretty">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="relative z-[1] mx-auto w-[min(1180px,calc(100%-2rem))] py-16 max-sm:w-[min(100%-1.15rem,1180px)]"
        id="skills"
      >
        {/* Section Heading - Centered Pangea Style */}
        <div className="reveal mb-12 text-center" data-reveal>
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(245,166,35,0.35)] bg-[rgba(245,166,35,0.08)] px-4 py-1.5 text-[0.76rem] font-semibold uppercase tracking-[0.2em] text-[var(--amber)] shadow-[0_0_20px_rgba(245,166,35,0.12)]">
              <span className="size-1.5 rounded-full bg-[var(--amber)] animate-pulse" />
              Core Capabilities &amp; Stack
            </span>
          </div>

          <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.08] tracking-[-0.04em] text-white text-balance">
            Skills We Command
          </h2>

          <p className="mx-auto mt-4 max-w-[42rem] text-[0.98rem] leading-[1.75] text-[var(--muted)] text-pretty">
            Modern frameworks, scalable backend architectures, and production toolchains calibrated for high-performance software engineering.
          </p>
        </div>

        {/* Constellation Canvas with Staggered Capability Cards */}
        <div className="relative py-4">
          {/* Orbital Background Vector Lines & Star Nodes */}
          <svg
            className="pointer-events-none absolute inset-0 -top-6 h-[calc(100%+3rem)] w-full opacity-35"
            viewBox="0 0 1000 480"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 40 140 Q 280 40 520 160 T 960 110"
              fill="none"
              stroke="rgba(245, 166, 35, 0.22)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
            <path
              d="M 60 360 Q 320 460 620 330 T 940 380"
              fill="none"
              stroke="rgba(245, 166, 35, 0.18)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
            <path
              d="M 120 70 Q 500 260 880 160"
              fill="none"
              stroke="rgba(0, 212, 170, 0.16)"
              strokeWidth="1"
              strokeDasharray="3 7"
            />
            <circle cx="120" cy="70" r="3" fill="var(--amber)" opacity="0.9" />
            <circle cx="280" cy="40" r="2.5" fill="var(--amber)" opacity="0.7" />
            <circle cx="520" cy="160" r="3.5" fill="var(--amber)" opacity="0.9" />
            <circle cx="720" cy="130" r="2.5" fill="var(--teal)" opacity="0.7" />
            <circle cx="880" cy="160" r="3" fill="var(--amber)" opacity="0.8" />
            <circle cx="320" cy="460" r="3" fill="var(--amber)" opacity="0.8" />
            <circle cx="620" cy="330" r="3.5" fill="var(--amber)" opacity="0.9" />
            <circle cx="940" cy="380" r="2.5" fill="var(--teal)" opacity="0.7" />
          </svg>

          {/* Desktop & Tablet Constellation Field (Organic, Randomized, Floating, Zero Overlap) */}
          <div
            className="reveal relative z-[1] mx-auto hidden min-h-[460px] w-full max-w-[1080px] md:block"
            data-reveal
          >
            {skillCapabilities.map((item, index) => {
              const isSelected = selectedCapabilityIndex === index;
              const positions = [
                "left-[2%] top-[6%]",
                "left-[27%] top-[2%]",
                "left-[53%] top-[9%]",
                "right-[2%] top-[3%]",
                "left-[4%] bottom-[6%]",
                "left-[29%] bottom-[2%]",
                "left-[55%] bottom-[10%]",
                "right-[3%] bottom-[5%]",
              ];
              const floatClass = `card-float-${index % 8}`;

              return (
                <div
                  key={item.id}
                  className={`absolute ${positions[index % positions.length]} ${floatClass}`}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedCapabilityIndex(index)}
                    className={[
                      "group relative flex min-h-[108px] w-[192px] flex-col items-center justify-between rounded-2xl p-3.5 text-center transition-all duration-220 cursor-pointer backdrop-blur-md",
                      isSelected
                        ? "bg-[rgba(245,166,35,0.14)] border-2 border-[var(--amber)] shadow-[0_0_32px_rgba(245,166,35,0.34),inset_0_0_18px_rgba(245,166,35,0.08)] scale-105 z-10"
                        : "bg-[#0b0e18]/90 border border-white/10 hover:border-white/25 hover:bg-[#121626] hover:scale-105 active:scale-95",
                    ].join(" ")}
                    aria-pressed={isSelected}
                    aria-label={`${item.title} capability - click to inspect details`}
                  >
                    {/* Top: Icon & Indicator Dot */}
                    <div className="flex w-full items-center justify-between">
                      <span className="text-2xl transition-transform duration-220 group-hover:scale-110">
                        {item.icon}
                      </span>
                      <span
                        className={[
                          "size-2 rounded-full transition-all duration-220",
                          isSelected
                            ? "bg-[var(--amber)] shadow-[0_0_8px_var(--amber)] scale-125"
                            : "bg-white/15 group-hover:bg-white/40",
                        ].join(" ")}
                      />
                    </div>

                    {/* Middle & Bottom: Title & Monospace Subtext */}
                    <div className="mt-2 w-full">
                      <h3
                        className={[
                          "font-[family-name:var(--font-display)] text-[0.92rem] font-bold tracking-tight transition-colors line-clamp-1",
                          isSelected ? "text-white" : "text-[var(--text)] group-hover:text-white",
                        ].join(" ")}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={[
                          "mt-1 text-[0.72rem] font-mono leading-tight transition-colors line-clamp-1",
                          isSelected ? "text-[var(--amber)]" : "text-[var(--muted)] group-hover:text-white/75",
                        ].join(" ")}
                      >
                        {item.subtext}
                      </p>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Mobile Grid (< md): Scaled Floating Cards */}
          <div
            className="reveal relative z-[1] grid grid-cols-2 gap-3 max-w-[460px] mx-auto md:hidden"
            data-reveal
          >
            {skillCapabilities.map((item, index) => {
              const isSelected = selectedCapabilityIndex === index;
              const floatClass = `card-float-${index % 8}`;

              return (
                <div key={`mob-${item.id}`} className={floatClass}>
                  <button
                    type="button"
                    onClick={() => setSelectedCapabilityIndex(index)}
                    className={[
                      "group relative flex min-h-[102px] w-full flex-col items-center justify-between rounded-xl p-3 text-center transition-all duration-220 cursor-pointer backdrop-blur-md",
                      isSelected
                        ? "bg-[rgba(245,166,35,0.14)] border-2 border-[var(--amber)] shadow-[0_0_24px_rgba(245,166,35,0.3)] scale-[1.03]"
                        : "bg-[#0b0e18]/90 border border-white/10 hover:border-white/25 hover:bg-[#121626]",
                    ].join(" ")}
                    aria-pressed={isSelected}
                    aria-label={`${item.title} capability`}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span className="text-2xl">{item.icon}</span>
                      <span
                        className={[
                          "size-2 rounded-full",
                          isSelected
                            ? "bg-[var(--amber)] shadow-[0_0_6px_var(--amber)]"
                            : "bg-white/15",
                        ].join(" ")}
                      />
                    </div>
                    <div className="mt-1.5 w-full">
                      <h3
                        className={[
                          "font-[family-name:var(--font-display)] text-[0.86rem] font-bold tracking-tight line-clamp-1",
                          isSelected ? "text-white" : "text-[var(--text)]",
                        ].join(" ")}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={[
                          "mt-0.5 text-[0.68rem] font-mono leading-tight line-clamp-1",
                          isSelected ? "text-[var(--amber)]" : "text-[var(--muted)]",
                        ].join(" ")}
                      >
                        {item.subtext}
                      </p>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Detailed Skill Inspection Drawer for Selected Capability */}
          <div
            className="reveal relative z-[1] mt-14 rounded-[var(--radius-xl)] border border-[rgba(245,166,35,0.24)] bg-[linear-gradient(180deg,rgba(245,166,35,0.09),rgba(11,14,24,0.94)),var(--surface)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-[20px] sm:p-8"
            data-reveal
          >
            <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3.5">
                <span className="grid size-12 place-items-center rounded-2xl border border-[rgba(245,166,35,0.35)] bg-[rgba(245,166,35,0.14)] text-2xl shadow-[0_0_20px_rgba(245,166,35,0.22)]">
                  {selectedCapability.icon}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="font-[family-name:var(--font-display)] text-[1.4rem] font-bold text-white">
                      {selectedCapability.title}
                    </h3>
                    <span className="rounded-full border border-[rgba(245,166,35,0.25)] bg-[rgba(245,166,35,0.1)] px-2.5 py-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--amber)]">
                      Verified Stack
                    </span>
                  </div>
                  <p className="mt-1 text-[0.88rem] text-[var(--muted)] text-pretty">
                    {selectedCapability.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.76rem] font-mono text-[var(--muted-strong)]">
                  {selectedCapability.skills.length} core tools
                </span>
              </div>
            </div>

            {/* Proficiency Bars */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {selectedCapability.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="rounded-[18px] border border-white/8 bg-white/[0.035] p-4 transition-all duration-200 hover:border-white/15 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[0.95rem] font-medium text-[var(--text)]">
                      {skill.name}
                    </span>
                    <span className="rounded-full bg-[rgba(245,166,35,0.12)] px-2.5 py-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[var(--amber)]">
                      {getSkillLevelLabel(skill.level)}
                    </span>
                  </div>
                  <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white/[0.07]">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,rgba(245,166,35,0.45),var(--amber))] transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Call to Action - Pangea Performance Style */}
          <div className="reveal mt-12 flex justify-center" data-reveal>
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-2xl bg-[linear-gradient(135deg,var(--amber),#ffc870)] px-9 py-4 font-mono text-[0.92rem] font-extrabold text-[#120b02] shadow-[0_0_30px_rgba(245,166,35,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(245,166,35,0.55)] active:scale-95"
            >
              <span>Explore Projects &amp; Builds</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      <section
        className="relative z-[1] mx-auto w-[min(1180px,calc(100%-2rem))] py-12 max-sm:w-[min(100%-1.15rem,1180px)]"
        id="experience"
      >
        <div className="section-heading reveal mb-8 max-w-[48rem]" data-reveal>
          <span className="section-kicker inline-flex items-center gap-[0.55rem] text-[0.8rem] uppercase tracking-[0.18em] text-[var(--teal)] before:h-px before:w-[2.6rem] before:bg-[linear-gradient(90deg,transparent,currentColor)] before:content-['']">
            Experience
          </span>
          <h2 className="mt-[0.8rem] font-[family-name:var(--font-display)] text-[clamp(2rem,4.7vw,3.5rem)] leading-[1.14] tracking-[-0.05em] text-balance">
            Measured contributions across product, performance, and platform work.
          </h2>
        </div>

        <div
          className="experience-rail relative grid gap-[1.2rem] pl-8 max-sm:pl-[1.35rem]"
          data-line-grow
        >
          {experiences.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="reveal relative rounded-[var(--radius-xl)] border border-[var(--surface-border)] bg-[var(--surface)] p-[1.55rem] shadow-[var(--shadow)] backdrop-blur-[16px]"
              data-reveal
            >
              <div className="absolute top-[1.7rem] -left-[1.95rem] h-4 w-4 rounded-full bg-[linear-gradient(135deg,var(--teal),var(--amber))] shadow-[0_0_0_5px_rgba(10,15,30,0.78)] max-sm:-left-[1.3rem]" />
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-[0.86rem] uppercase tracking-[0.09em] text-[var(--amber)]">
                      {item.dates}
                    </span>
                    {item.isCurrent ? (
                      <span className="inline-flex items-center rounded-full border border-[rgba(0,212,170,0.28)] bg-[rgba(0,212,170,0.12)] px-2.5 py-0.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--teal)]">
                        Current
                      </span>
                    ) : null}
                  </div>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.84rem] text-[var(--teal)] transition-all duration-220 hover:border-[rgba(0,212,170,0.32)] hover:bg-[rgba(0,212,170,0.1)] hover:text-white"
                    >
                      {item.linkText ?? "Website"} <IconArrow />
                    </a>
                  ) : null}
                </div>
                <h3 className="mt-[0.55rem] mb-[0.55rem] font-[family-name:var(--font-display)] text-[1.45rem] leading-[1.16]">
                  {item.role}
                </h3>
                <h4 className="mb-[0.4rem] text-[1.08rem] leading-[1.8] text-[var(--muted)]">
                  {item.company}
                </h4>
                {item.location ? (
                  <p className="mb-[0.8rem] text-[0.95rem] text-[var(--muted-strong)]">
                    {item.location}
                  </p>
                ) : null}
                <ul className="m-0 pl-[1.1rem] text-[var(--muted)]">
                  {item.points.map((point) => (
                    <li key={point} className="leading-[1.8] text-pretty">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="relative z-[1] mx-auto w-[min(1180px,calc(100%-2rem))] py-12 max-sm:w-[min(100%-1.15rem,1180px)]"
        id="position-of-responsibility"
      >
        <div className="section-heading reveal mb-8 max-w-[48rem]" data-reveal>
          <span className="section-kicker inline-flex items-center gap-[0.55rem] text-[0.8rem] uppercase tracking-[0.18em] text-[var(--teal)] before:h-px before:w-[2.6rem] before:bg-[linear-gradient(90deg,transparent,currentColor)] before:content-['']">
            Position of Responsibility
          </span>
          <h2 className="mt-[0.8rem] font-[family-name:var(--font-display)] text-[clamp(2rem,4.7vw,3.5rem)] leading-[1.14] tracking-[-0.05em] text-balance">
            Leadership, coordination, and frontend ownership in community-driven work.
          </h2>
        </div>

        <article
          className="responsibility-card reveal rounded-[var(--radius-xl)] border border-[var(--surface-border)] p-[1.55rem] shadow-[var(--shadow)] backdrop-blur-[16px]"
          data-reveal
        >
          <div>
            <div>
              <span className="text-[0.86rem] uppercase tracking-[0.09em] text-[var(--amber)]">
                {responsibility.dates}
              </span>
              <h3 className="mt-[0.55rem] mb-[0.35rem] font-[family-name:var(--font-display)] text-[1.7rem] leading-[1.14]">
                {responsibility.role}
              </h3>
              <h4 className="text-[1.05rem] leading-[1.7] text-[var(--muted)]">
                {responsibility.organization}
              </h4>
              <p className="mb-[0.8rem] text-[0.95rem] text-[var(--muted-strong)]">
                {responsibility.location}
              </p>
            </div>
          </div>

          <ul className="m-0 pl-[1.1rem] text-[var(--muted)]">
            {responsibility.points.map((point) => (
              <li key={point} className="leading-[1.8] text-pretty">
                {point}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section
        className="relative z-[1] mx-auto w-[min(1180px,calc(100%-2rem))] py-12 max-sm:w-[min(100%-1.15rem,1180px)]"
        id="projects"
      >
        <div className="section-heading reveal mb-8 max-w-[48rem]" data-reveal>
          <span className="section-kicker inline-flex items-center gap-[0.55rem] text-[0.8rem] uppercase tracking-[0.18em] text-[var(--teal)] before:h-px before:w-[2.6rem] before:bg-[linear-gradient(90deg,transparent,currentColor)] before:content-['']">
            Projects
          </span>
          <h2 className="mt-[0.8rem] font-[family-name:var(--font-display)] text-[clamp(2rem,4.7vw,3.5rem)] leading-[1.14] tracking-[-0.05em] text-balance">
            Selected builds presented in an editorial bento grid.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 min-[1081px]:grid-cols-12">
          {orderedProjects.map((project, index) => (
            <article
              key={project.title}
              className={[
                "reveal",
                "relative flex min-h-0 flex-col overflow-hidden rounded-[var(--radius-xl)] border border-[var(--surface-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.025),transparent_28%),var(--surface)] p-[1.55rem] shadow-[var(--shadow)] backdrop-blur-[16px] transition-[transform,border-color,box-shadow] duration-220 before:pointer-events-none before:absolute before:inset-0 before:opacity-90 before:content-[''] after:pointer-events-none after:absolute after:right-[-20%] after:bottom-[-35%] after:h-[180px] after:w-[180px] after:rounded-full after:content-[''] hover:border-white/[0.16] hover:shadow-[0_26px_80px_rgba(0,0,0,0.46)]",
                getProjectCardTone(index),
                project.size === "wide" ? "min-[1081px]:col-span-12 min-[1081px]:min-h-[320px]" : "min-[1081px]:col-span-6",
                index === 2 ? "min-[1081px]:col-span-7" : "",
                index === 3 ? "min-[1081px]:col-span-5" : "",
                index === 4 ? "min-[1081px]:col-span-5" : "",
                index === 5 ? "min-[1081px]:col-span-7" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              data-reveal
              data-tilt-card
            >
              <div className="relative z-[1] flex flex-col gap-4 border-b border-white/8 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex flex-wrap items-center gap-[0.55rem]">
                  <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-2 text-[0.72rem] font-semibold tracking-[0.18em] text-[var(--muted-strong)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.86rem] uppercase tracking-[0.09em] text-[var(--amber)]">
                    {project.date}
                  </span>
                  {project.status ? (
                    <em
                      className={[
                        "inline-flex items-center rounded-full px-[0.65rem] py-[0.35rem] text-[0.76rem] not-italic font-bold uppercase tracking-[0.08em]",
                        getProjectStatusClass(project.status),
                      ].join(" ")}
                    >
                      {project.status.replace("Â·", "-")}
                    </em>
                  ) : null}
                </div>
                <div className="relative z-[1] flex flex-wrap items-center gap-[0.8rem]">
                  {project.github ? (
                    <a
                      href={resolveLink(project.github)}
                      {...linkProps(project.github)}
                      className="inline-flex items-center gap-[0.35rem] text-[0.92rem] text-[var(--muted)] transition-colors duration-220 hover:text-[var(--text)]"
                    >
                      GitHub <IconArrow />
                    </a>
                  ) : null}
                  {project.live ? (
                    <a
                      href={resolveLink(project.live)}
                      {...linkProps(project.live)}
                      className="inline-flex items-center gap-[0.35rem] text-[0.92rem] text-[var(--muted)] transition-colors duration-220 hover:text-[var(--text)]"
                    >
                      Live <IconArrow />
                    </a>
                  ) : null}
                </div>
              </div>

              <div
                className={[
                  "relative z-[1] mt-5 grid gap-5 xl:items-start",
                  index % 2 === 0
                    ? "xl:grid-cols-[minmax(0,1.2fr)_minmax(220px,0.8fr)]"
                    : "xl:grid-cols-[minmax(220px,0.8fr)_minmax(0,1.2fr)]",
                ].join(" ")}
              >
                <div className={index % 2 === 0 ? "" : "xl:order-2"}>
                  <h3 className="font-[family-name:var(--font-display)] text-[clamp(1.45rem,3.6vw,2rem)] leading-[1.08]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-[var(--muted)] leading-[1.8] text-pretty">
                    {project.description}
                  </p>

                  <ul className="mt-5 m-0 pl-[1.1rem] text-[var(--muted)]">
                    {project.impact.map((item) => (
                      <li key={item} className="leading-[1.8] text-pretty">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className={[
                    "rounded-[24px] border p-4",
                    index % 3 === 0
                      ? "border-[rgba(0,212,170,0.14)] bg-[rgba(0,212,170,0.06)]"
                      : index % 3 === 1
                        ? "border-[rgba(245,166,35,0.16)] bg-[rgba(245,166,35,0.06)]"
                        : "border-white/10 bg-white/[0.04]",
                    index % 2 === 0 ? "" : "xl:order-1",
                  ].join(" ")}
                >
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted-strong)]">
                    Stack
                  </p>
                  <div className="mt-3 flex flex-wrap gap-[0.65rem]">
                    {project.stack.map((tag) => (
                      <span
                        key={`${project.title}-${tag}`}
                        className="rounded-full bg-white/[0.07] px-[0.76rem] py-[0.42rem] text-[0.8rem] text-[#d8def0]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 border-t border-white/8 pt-4">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--muted-strong)]">
                      Links
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {project.github ? (
                        <a
                          href={resolveLink(project.github)}
                          {...linkProps(project.github)}
                          className="inline-flex items-center gap-[0.35rem] rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[0.9rem] text-[var(--muted)] transition-colors duration-220 hover:text-[var(--text)]"
                        >
                          GitHub <IconArrow />
                        </a>
                      ) : null}
                      {project.live ? (
                        <a
                          href={resolveLink(project.live)}
                          {...linkProps(project.live)}
                          className="inline-flex items-center gap-[0.35rem] rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[0.9rem] text-[var(--muted)] transition-colors duration-220 hover:text-[var(--text)]"
                        >
                          Live <IconArrow />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        className="relative z-[1] mx-auto grid w-[min(1180px,calc(100%-2rem))] gap-[1.15rem] py-12 min-[1081px]:grid-cols-2 max-sm:w-[min(100%-1.15rem,1180px)]"
        id="education"
      >
        <article
          className="reveal rounded-[var(--radius-xl)] border border-[var(--surface-border)] bg-[var(--surface)] p-[1.55rem] shadow-[var(--shadow)] backdrop-blur-[16px]"
          data-reveal
        >
          <span className="section-kicker inline-flex items-center gap-[0.55rem] text-[0.8rem] uppercase tracking-[0.18em] text-[var(--teal)] before:h-px before:w-[2.6rem] before:bg-[linear-gradient(90deg,transparent,currentColor)] before:content-['']">
            Education
          </span>
          <h2 className="mt-[0.8rem] font-[family-name:var(--font-display)] text-[clamp(2rem,4.7vw,3.5rem)] leading-[1.14] tracking-[-0.05em] text-balance">
            Academic Background
          </h2>
          <div className="mt-[1.35rem] grid gap-4">
            {educationItems.map((item) => (
              <article
                key={item.institution}
                className="rounded-[18px] border border-white/8 bg-white/[0.025] px-[1.15rem] py-[1.1rem]"
              >
                <h3 className="text-[1.05rem] text-[var(--text)]">
                  {item.institution}
                </h3>
                <p className="mt-[0.35rem] mb-[0.8rem] text-[0.95rem] text-[var(--muted)]">
                  {item.location}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-[0.65rem]">
                  <strong className="text-[0.95rem] text-[var(--muted-strong)]">
                    {item.program}
                  </strong>
                  <span className="text-[0.83rem] uppercase tracking-[0.05em] text-[var(--amber)]">
                    {item.score}
                  </span>
                  <span className="text-[0.83rem] uppercase tracking-[0.05em] text-[var(--amber)]">
                    {item.duration}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </article>

        <article
          className="reveal rounded-[var(--radius-xl)] border border-[var(--surface-border)] bg-[var(--surface)] p-[1.55rem] shadow-[var(--shadow)] backdrop-blur-[16px]"
          id="achievements"
          data-reveal
        >
          <span className="section-kicker inline-flex items-center gap-[0.55rem] text-[0.8rem] uppercase tracking-[0.18em] text-[var(--teal)] before:h-px before:w-[2.6rem] before:bg-[linear-gradient(90deg,transparent,currentColor)] before:content-['']">
            Achievements
          </span>
          <h2 className="mt-[0.8rem] font-[family-name:var(--font-display)] text-[clamp(2rem,4.7vw,3.5rem)] leading-[1.14] tracking-[-0.05em] text-balance">
            Competitive energy, technical depth, and consistent follow-through.
          </h2>
          <div className="mt-[1.35rem] grid gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement}
                className="grid grid-cols-[auto_1fr] items-start gap-[0.8rem]"
              >
                <span
                  className="mt-[0.12rem] grid size-[2.1rem] place-items-center rounded-full bg-[linear-gradient(135deg,rgba(245,166,35,0.18),rgba(0,212,170,0.12))] text-[var(--amber)]"
                  aria-hidden="true"
                >
                  <IconSpark />
                </span>
                <p className="text-[var(--muted)] leading-[1.8] text-pretty">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section
        className="relative z-[1] mx-auto w-[min(1180px,calc(100%-2rem))] py-12 pb-16 max-sm:w-[min(100%-1.15rem,1180px)]"
        id="contact"
      >
        <div className="section-heading reveal mb-8 max-w-[48rem]" data-reveal>
          <span className="section-kicker inline-flex items-center gap-[0.55rem] text-[0.8rem] uppercase tracking-[0.18em] text-[var(--teal)] before:h-px before:w-[2.6rem] before:bg-[linear-gradient(90deg,transparent,currentColor)] before:content-['']">
            Contact
          </span>
          <h2 className="mt-[0.8rem] font-[family-name:var(--font-display)] text-[clamp(2rem,4.7vw,3.5rem)] leading-[1.14] tracking-[-0.05em] text-balance">
            Let&apos;s build something useful, sharp, and memorable.
          </h2>
        </div>

        <div
          className="reveal flex items-center justify-between gap-8 rounded-[var(--radius-xl)] border border-[var(--surface-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.025),transparent),var(--surface-strong)] p-[1.55rem] shadow-[var(--shadow)] backdrop-blur-[16px] max-[1080px]:grid"
          data-reveal
        >
          <div className="max-w-[36rem]">
            <p className="text-[var(--muted)] leading-[1.8] text-pretty">
              Open to freelance projects, engineering roles, and full-stack
              opportunities where product quality, speed, and execution matter equally.
            </p>
            <a
              className="mt-4 inline-block break-words font-[family-name:var(--font-display)] text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.16]"
              href={socialLinks.email}
            >
              1107shifa@gmail.com
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-[0.95rem] max-[1080px]:mt-0">
            <div className="flex flex-wrap items-center gap-[0.8rem]">
              <a
                href={socialLinks.email}
                aria-label="Email Shifa"
                className="grid size-12 place-items-center rounded-full border border-white/12 bg-white/[0.03] transition-[transform,background-color,border-color,box-shadow,color,opacity] duration-220 hover:-translate-y-0.5 hover:border-[rgba(0,212,170,0.32)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.2)]"
              >
                <IconMail />
              </a>
              <a
                href={resolveLink(socialLinks.linkedin)}
                {...linkProps(socialLinks.linkedin)}
                aria-label="LinkedIn profile"
                className="grid size-12 place-items-center rounded-full border border-white/12 bg-white/[0.03] transition-[transform,background-color,border-color,box-shadow,color,opacity] duration-220 hover:-translate-y-0.5 hover:border-[rgba(0,212,170,0.32)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.2)]"
              >
                <IconLinkedIn />
              </a>
              <a
                href={resolveLink(socialLinks.github)}
                {...linkProps(socialLinks.github)}
                aria-label="GitHub profile"
                className="grid size-12 place-items-center rounded-full border border-white/12 bg-white/[0.03] transition-[transform,background-color,border-color,box-shadow,color,opacity] duration-220 hover:-translate-y-0.5 hover:border-[rgba(0,212,170,0.32)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.2)]"
              >
                <IconGitHub />
              </a>
              <a
                href={resolveLink(socialLinks.leetcode)}
                {...linkProps(socialLinks.leetcode)}
                aria-label="LeetCode profile"
                className="grid size-12 place-items-center rounded-full border border-white/12 bg-white/[0.03] transition-[transform,background-color,border-color,box-shadow,color,opacity] duration-220 hover:-translate-y-0.5 hover:border-[rgba(0,212,170,0.32)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.2)]"
              >
                <IconLeetCode />
              </a>
            </div>

            <a
              className="inline-flex min-w-48 items-center justify-center rounded-full border border-[rgba(0,212,170,0.18)] bg-[linear-gradient(135deg,rgba(0,212,170,0.78),rgba(143,248,228,0.72))] px-[1.4rem] py-[0.96rem] font-bold text-[#07151a] shadow-[0_6px_14px_rgba(0,212,170,0.08)] transition-[transform,background-color,border-color,box-shadow,color,opacity] duration-220 hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(0,212,170,0.12)]"
              href="/resume/Shifa-Saeed-Resume.pdf"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p>Shifa Saeed © {new Date().getFullYear()}. Built with intention.</p>
      </footer>
    </main>
  );
}
