"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type SkillGroup = {
  title: string;
  accent: "teal" | "amber";
  description: string;
  skills: Array<{ name: string; level: number }>;
};

type ExperienceItem = {
  company: string;
  role: string;
  dates: string;
  location?: string;
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
    label: "Now",
    title: "Focused on thoughtful product engineering",
    body: "Building fast, API-driven interfaces that feel polished, accessible, and dependable under real usage.",
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

const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    accent: "teal",
    description: "Core languages used for product delivery, problem solving, and day-to-day implementation.",
    skills: [
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "HTML", level: 94 },
      { name: "Python", level: 80 },
      { name: "C / C++", level: 85},
    ],
  },
  {
    title: "Frontend",
    accent: "amber",
    description: "Interface systems shaped around responsiveness, reusable UI, and state clarity.",
    skills: [
      { name: "React.js", level: 93 },
      { name: "Next.js", level: 91 },
      { name: "Tailwind CSS", level: 89 },
      { name: "Redux", level: 84 },
      { name: "Zustand", level: 82 },
      { name: "React Native", level: 68 },
    ],
  },
  {
    title: "Backend",
    accent: "teal",
    description: "API-driven systems with secure flows, real-time communication, and service integrations.",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 84 },
      { name: "REST APIs", level: 90 },
      { name: "WebSocket", level: 82 },
      { name: "FastAPI", level: 73 },
    ],
  },
  {
    title: "Data Analysis",
    accent: "teal",
    description: "Libraries used for data handling, analysis workflows, and exploratory problem solving.",
    skills: [
      { name: "NumPy", level: 76 },
      { name: "Pandas", level: 80 },
      { name: "Matplotlib", level: 72 },
      { name: "Seaborn", level: 70 },
    ],
  },
  {
    title: "Tools",
    accent: "amber",
    description: "The delivery layer for deployment, collaboration, infrastructure, and iteration speed.",
    skills: [
      { name: "MongoDB", level: 86 },
      { name: "PostgreSQL / SQL", level: 79 },
      { name: "Redis", level: 76 },
      { name: "Docker", level: 72 },
      { name: "AWS / Cloudflare / Vercel", level: 75 },
      { name: "Git / GitHub / CI/CD", level: 88 },
    ],
  },
];

const experiences: ExperienceItem[] = [
  {
    company: "Gulnazion Technologies",
    role: "Frontend Developer Intern",
    dates: "Jun 2025 - Aug 2025",
    points: [
      "Built core CRM and lead pipeline experiences including list and Kanban views, 7-stage drag-and-drop tracking, and one-click lead-to-client conversion flows.",
      "Implemented qualification scoring, follow-up activity workflows, CSV lead import, and decision-maker tracking to streamline agency sales operations.",
    ],
  },
  {
    company: "SpiceCatch",
    role: "Frontend Developer Intern",
    dates: "Sep 2025 - Dec 2025",
    points: [
      "Developed and refined Next.js interfaces with Zustand, reducing page load time by 35% and improving engagement.",
      "Built reusable Radix UI components that improved design consistency and accelerated development by 40%.",
    ],
  },
  {
    company: "Webinar Leads Hub",
    role: "Full Stack Developer Intern",
    dates: "Dec 2025 - Feb 2026",
    points: [
      "Integrated WhatsApp automation, Zoom APIs, and event-driven webhooks into a CRM-style webinar platform.",
      "Enabled real-time communication workflows and smoother coordination across webinar operations.",
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
    date: "Live Project",
    status: "GenAI Build",
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

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef<HTMLCanvasElement | null>(null);
  const projectOrder = [
    "EduVerse",
    "AI Mock Interview Platform",
    "BuzzBook",
    "Vigilance+",
    "Droom",
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
    const nav = document.querySelector<HTMLElement>("[data-navbar]");
    if (!nav) {
      return;
    }

    const onScroll = () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="page-shell">
      <canvas ref={heroRef} className="hero-canvas" aria-hidden="true" />
      <div className="page-noise" aria-hidden="true" />

      <header className="site-header" data-navbar>
        <a className="brand-mark" href="#top" aria-label="Go to top">
          <span>S</span>
          <div>
            <strong>Shifa Saeed</strong>
            <p>Full-stack developer</p>
          </div>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-copy">
          <div className="eyebrow reveal is-visible">
            Developer portfolio for product-focused, frontend-driven full-stack work
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

      <section className="section" id="about">
        <div className="section-heading reveal" data-reveal>
          <span className="section-kicker">About</span>
          <h2>A timeline-shaped profile with product instincts at the center.</h2>
        </div>

        <div className="about-grid">
          <article className="about-card gradient-card reveal" data-reveal>
            <div className="profile-frame">
              <Image
                src="/images/shifa-profiles.jpeg"
                alt="Portrait of Shifa Saeed"
                fill
                sizes="(max-width: 900px) 280px, 320px"
                className="profile-image"
                priority
              />
            </div>

            <div className="about-copy">
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

        <div className="timeline-list timeline-list-grid">
          {timelineMoments.map((item) => (
            <article key={item.title} className="timeline-card reveal" data-reveal>
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading reveal" data-reveal>
          <span className="section-kicker">Skills</span>
          <h2>Chosen stacks for clarity, scale, and consistent product delivery.</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className={`skill-card accent-${group.accent} reveal`}
              data-reveal
            >
              <div className="skill-card-head">
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-meta">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-track">
                      <div
                        className="skill-fill"
                        data-skill-bar
                        data-width={skill.level}
                        style={{ ["--target-width" as string]: "0%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-heading reveal" data-reveal>
          <span className="section-kicker">Experience</span>
          <h2>Measured contributions across product, performance, and platform work.</h2>
        </div>

        <div className="experience-rail" data-line-grow>
          {experiences.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="experience-card reveal"
              data-reveal
            >
              <div className="experience-dot" />
              <div className="experience-content">
                <span>{item.dates}</span>
                <h3>{item.role}</h3>
                <h4>{item.company}</h4>
                {item.location ? <p className="experience-location">{item.location}</p> : null}
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="position-of-responsibility">
        <div className="section-heading reveal" data-reveal>
          <span className="section-kicker">Position of Responsibility</span>
          <h2>Leadership, coordination, and frontend ownership in community-driven work.</h2>
        </div>

        <article className="responsibility-card reveal" data-reveal>
          <div className="responsibility-head">
            <div>
              <span>{responsibility.dates}</span>
              <h3>{responsibility.role}</h3>
              <h4>{responsibility.organization}</h4>
              <p className="experience-location">{responsibility.location}</p>
            </div>
          </div>

          <ul>
            {responsibility.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section" id="projects">
        <div className="section-heading reveal" data-reveal>
          <span className="section-kicker">Projects</span>
          <h2>Selected builds presented in an editorial bento grid.</h2>
        </div>

        <div className="projects-grid">
          {orderedProjects.map((project) => (
            <article
              key={project.title}
              className={[
                "project-card",
                project.size === "wide" ? "project-wide" : "",
                project.size === "tall" ? "project-tall" : "",
                "reveal",
              ]
                .filter(Boolean)
                .join(" ")}
              data-reveal
              data-tilt-card
            >
              <div className="project-header">
                <div className="project-meta">
                  <span>{project.date}</span>
                  {project.status ? (
                    <em
                      className={`project-status project-status-${getProjectStatusTone(
                        project.status,
                      )}`}
                    >
                      {project.status.replace("Â·", "-")}
                    </em>
                  ) : null}
                </div>
                <div className="project-links">
                  {project.github ? (
                    <a href={resolveLink(project.github)} {...linkProps(project.github)}>
                      GitHub <IconArrow />
                    </a>
                  ) : null}
                  {project.live ? (
                    <a href={resolveLink(project.live)} {...linkProps(project.live)}>
                      Live <IconArrow />
                    </a>
                  ) : null}
                </div>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tag-row">
                {project.stack.map((tag) => (
                  <span key={`${project.title}-${tag}`}>{tag}</span>
                ))}
              </div>

              <ul>
                {project.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-split" id="education">
        <article className="education-card reveal" data-reveal>
          <span className="section-kicker">Education</span>
          <h2>Academic Background</h2>
          <div className="education-list">
            {educationItems.map((item) => (
              <article key={item.institution} className="education-entry">
                <h3>{item.institution}</h3>
                <p>{item.location}</p>
                <div className="education-entry-meta">
                  <strong>{item.program}</strong>
                  <span>{item.score}</span>
                  <span>{item.duration}</span>
                </div>
              </article>
            ))}
          </div>
        </article>

        <article className="achievement-card reveal" id="achievements" data-reveal>
          <span className="section-kicker">Achievements</span>
          <h2>Competitive energy, technical depth, and consistent follow-through.</h2>
          <div className="achievement-list">
            {achievements.map((achievement) => (
              <div key={achievement} className="achievement-item">
                <span className="achievement-icon" aria-hidden="true">
                  <IconSpark />
                </span>
                <p>{achievement}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="section contact-section" id="contact">
        <div className="section-heading reveal" data-reveal>
          <span className="section-kicker">Contact</span>
          <h2>Let&apos;s build something useful, sharp, and memorable.</h2>
        </div>

        <div className="contact-card reveal" data-reveal>
          <div className="contact-copy">
            <p>
              Open to internships, frontend engineering roles, and full-stack
              opportunities where product quality and execution matter equally.
            </p>
            <a className="contact-mail" href={socialLinks.email}>
              1107shifa@gmail.com
            </a>
          </div>

          <div className="contact-actions">
            <div className="social-row">
              <a href={socialLinks.email} aria-label="Email Shifa">
                <IconMail />
              </a>
              <a
                href={resolveLink(socialLinks.linkedin)}
                {...linkProps(socialLinks.linkedin)}
                aria-label="LinkedIn profile"
              >
                <IconLinkedIn />
              </a>
              <a
                href={resolveLink(socialLinks.github)}
                {...linkProps(socialLinks.github)}
                aria-label="GitHub profile"
              >
                <IconGitHub />
              </a>
              <a
                href={resolveLink(socialLinks.leetcode)}
                {...linkProps(socialLinks.leetcode)}
                aria-label="LeetCode profile"
              >
                <IconLeetCode />
              </a>
            </div>

            <a
              className="button button-primary"
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
