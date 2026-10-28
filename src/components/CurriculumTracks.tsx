"use client";

import { useState } from "react";
import {
  Globe,
  Server,
  Layers,
  Binary,
  Cpu,
  Bot,
  ArrowRight,
  Hammer,
  X,
  BookOpen,
} from "lucide-react";
import { YouTubeIcon } from "@/components/Icons";
import styles from "./CurriculumTracks.module.css";

interface Track {
  id: string;
  category: "web" | "backend" | "fullstack" | "dsa" | "system" | "ai";
  title: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Comprehensive";
  icon: typeof Globe;
  iconStyle: string;
  description: string;
  tech: string[];
  whatYouBuild: string;
  modules: string[];
}

const TRACKS_DATA: Track[] = [
  {
    id: "web-dev",
    category: "web",
    title: "Modern Web Development",
    difficulty: "Comprehensive",
    icon: Globe,
    iconStyle: styles.iconCyan,
    description:
      "Master the essential modern web stack. Go from modern HTML/CSS foundations and ES6+ JavaScript to cutting-edge React 19 and Next.js 15 App Router architecture.",
    tech: ["HTML5", "CSS3 / Modern CSS", "ES6+ JavaScript", "React 19", "Next.js 15", "TypeScript"],
    whatYouBuild:
      "Interactive high-performance web applications, animated portfolios, and component design systems.",
    modules: [
      "Semantic HTML5 & Modern Responsive CSS Layouts (Grid/Flexbox)",
      "Modern JavaScript Deep Dive: Closures, Event Loop, Async/Await",
      "React 19 Essentials: Hooks, Compiler, Suspense & Streaming",
      "Next.js 15 App Router: Server Components, Server Actions & Turbopack",
      "Performance Optimization, Core Web Vitals & Production Deployment",
    ],
  },
  {
    id: "backend-dev",
    category: "backend",
    title: "Backend Engineering",
    difficulty: "Intermediate",
    icon: Server,
    iconStyle: styles.iconEmerald,
    description:
      "Build bulletproof server-side architectures. Understand Node.js runtime internals, Express.js REST APIs, MongoDB schema design, JWT authentication, and security best practices.",
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "JWT / Auth"],
    whatYouBuild:
      "Scalable multi-tenant RESTful backend with role-based auth, rate limiting, and database indexing.",
    modules: [
      "Node.js Event Loop, Streams, Buffers & Thread Pool Internals",
      "Express.js Architecture, Custom Middleware & Robust Error Handling",
      "MongoDB & Mongoose: Aggregation Pipelines, Indexes & Data Modeling",
      "Secure Authentication: JWTs, Refresh Tokens, OAuth & CSRF Protection",
      "API Testing with Jest/Supertest & Docker Containerization",
    ],
  },
  {
    id: "fullstack-projects",
    category: "fullstack",
    title: "App Dev & Full-Stack Projects",
    difficulty: "Advanced",
    icon: Layers,
    iconStyle: styles.iconBox,
    description:
      "Tackle complete production-ready full-stack applications. Connect frontend interfaces with robust backends, integrate payment gateways, cloud databases, and automated CI/CD.",
    tech: ["Next.js", "Node.js", "MongoDB / PostgreSQL", "Stripe", "Prisma", "Docker", "Vercel"],
    whatYouBuild:
      "Full-featured SaaS platforms, e-commerce engines with real checkout, and collaborative live apps.",
    modules: [
      "Full-Stack Architecture Planning: Monoliths vs Microservices vs Serverless",
      "State Management, Optimistic UI Updates & Server Synchronization",
      "Payment Processing with Stripe Webhooks & Subscription Management",
      "Real-Time Capabilities with WebSockets & Server-Sent Events",
      "End-to-End Testing (Playwright), Monitoring, and Production Rollouts",
    ],
  },
  {
    id: "dsa-interview",
    category: "dsa",
    title: "Data Structures & Algorithms",
    difficulty: "Intermediate",
    icon: Binary,
    iconStyle: styles.iconAmber,
    description:
      "Learn to think like a software engineer. Don't memorize solutions—master core algorithmic patterns, solve LeetCode problems with clarity, and crack technical interviews.",
    tech: ["Arrays & HashMaps", "Two Pointers", "Sliding Window", "Trees & Graphs", "Dynamic Programming"],
    whatYouBuild:
      "Algorithmic pattern handbook with visual walkthroughs and optimized Big-O benchmarks.",
    modules: [
      "Big-O Time & Space Complexity Analysis from First Principles",
      "Core Patterns: Two Pointers, Fast & Slow Pointers, Sliding Window",
      "Trees & Graph Traversal: BFS, DFS, Dijkstra, Union-Find",
      "Dynamic Programming: Memoization, Tabulation & Space Optimization",
      "Mock Technical Interview Breakdowns and Behavioral Strategy",
    ],
  },
  {
    id: "system-design",
    category: "system",
    title: "System Design & Architecture",
    difficulty: "Advanced",
    icon: Cpu,
    iconStyle: styles.iconBlue,
    description:
      "Learn how modern tech companies scale systems to millions of users. Master database sharding, caching strategies, load balancing, message queues, and microservices.",
    tech: ["Microservices", "Redis Caching", "Kafka / RabbitMQ", "CDN", "Load Balancers", "Sharding"],
    whatYouBuild:
      "Architectural blueprints for scalable systems like YouTube, URL Shorteners, and Distributed Messengers.",
    modules: [
      "Vertical vs Horizontal Scaling, High Availability & CAP Theorem",
      "Distributed Caching Strategies with Redis: Cache-Aside, Write-Through",
      "Message Queues, Event-Driven Architecture & Asynchronous Processing",
      "Database Partitioning, Replication, Consistent Hashing & ACID vs BASE",
      "Real-World Case Studies: Scaling Video Streaming, Live Feeds, and Rate Limiters",
    ],
  },
  {
    id: "ai-agents",
    category: "ai",
    title: "AI, Automation & AI Agents",
    difficulty: "Advanced",
    icon: Bot,
    iconStyle: styles.iconRose,
    description:
      "Step into the future of software engineering. Build autonomous AI agents, tool-calling pipelines, RAG systems, and automated workflows using state-of-the-art LLMs.",
    tech: ["LangChain", "OpenAI / Gemini API", "Vector DBs", "Function Calling", "Agent Workflows", "Python"],
    whatYouBuild:
      "Self-directed AI coding agents, customer support agents with vector retrieval, and workflow automation bots.",
    modules: [
      "LLM Foundations: Prompts, Tokens, Embeddings & Structured JSON Outputs",
      "Building ReAct Agents: Thought, Action, Observation Loops",
      "Function Calling & Tool Execution: Integrating APIs, Browsers & Databases",
      "Retrieval-Augmented Generation (RAG) with Vector Databases (Pinecone/pgvector)",
      "Deploying Autonomous Multi-Agent Swarms for Automated Code Generation",
    ],
  },
];

export default function CurriculumTracks() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

  const filteredTracks =
    filter === "all"
      ? TRACKS_DATA
      : TRACKS_DATA.filter((t) => t.category === filter);

  return (
    <section id="curriculum" className={`section-padding ${styles.curriculumSection}`}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="badge">
            <BookOpen size={14} />
            Structured Learning Paths
          </span>
          <h2 className="section-title">
            What You&apos;ll Learn on{" "}
            <span className="gradient-text-primary">Haixity</span>
          </h2>
          <p className="section-subtitle">
            From basic syntax to production architecture. Clear explanations, practical
            hands-on examples, and real-world codebases.
          </p>
        </div>

        {/* Category Filters */}
        <div className={styles.filterRow}>
          {[
            { id: "all", label: "All 6 Disciplines" },
            { id: "web", label: "Web Development" },
            { id: "backend", label: "Backend Engineering" },
            { id: "fullstack", label: "Full-Stack Projects" },
            { id: "dsa", label: "DSA & Algorithms" },
            { id: "system", label: "System Design" },
            { id: "ai", label: "AI & AI Agents" },
          ].map((cat) => (
            <button
              key={cat.id}
              className={`${styles.filterBtn} ${
                filter === cat.id ? styles.filterBtnActive : ""
              }`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tracks Grid */}
        <div className={styles.tracksGrid}>
          {filteredTracks.map((track) => {
            const Icon = track.icon;
            return (
              <div key={track.id} className={styles.trackCard}>
                <div>
                  <div className={styles.cardHeader}>
                    <div className={`${styles.iconBox} ${track.iconStyle}`}>
                      <Icon size={26} />
                    </div>
                    <span className={styles.diffBadge}>{track.difficulty}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{track.title}</h3>
                  <p className={styles.cardDesc}>{track.description}</p>

                  {/* Tech Pills */}
                  <div className={styles.techPills}>
                    {track.tech.map((t, idx) => (
                      <span key={idx} className={styles.techPill}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* What you build */}
                  <div className={styles.buildHighlight}>
                    <span className={styles.buildLabel}>
                      <Hammer size={12} />
                      What You Build
                    </span>
                    <p className={styles.buildText}>{track.whatYouBuild}</p>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <button
                    className={styles.detailsBtn}
                    onClick={() => setSelectedTrack(track)}
                  >
                    <span>View Syllabus</span>
                    <ArrowRight size={14} />
                  </button>

                  <a
                    href="https://www.youtube.com/@Haixity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.ytLinkPill}
                  >
                    <YouTubeIcon size={13} color="#ff0033" />
                    <span>Watch Track</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Syllabus Modal */}
      {selectedTrack && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setSelectedTrack(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeModalBtn}
              onClick={() => setSelectedTrack(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "0.75rem" }}>
              <div className={`${styles.iconBox} ${selectedTrack.iconStyle}`}>
                <selectedTrack.icon size={24} />
              </div>
              <div>
                <span className={styles.diffBadge}>{selectedTrack.difficulty} Level</span>
                <h3 style={{ fontSize: "1.5rem", color: "#fff", fontWeight: 800 }}>
                  {selectedTrack.title}
                </h3>
              </div>
            </div>

            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
              {selectedTrack.description}
            </p>

            <div style={{ marginTop: "1.5rem" }}>
              <h4 style={{ fontSize: "1rem", color: "#fff", fontWeight: 700, marginBottom: "0.5rem" }}>
                Curriculum Syllabus &amp; Deep Dives:
              </h4>

              <div className={styles.syllabusList}>
                {selectedTrack.modules.map((mod, i) => (
                  <div key={i} className={styles.syllabusItem}>
                    <span className={styles.moduleNum}>0{i + 1}</span>
                    <span style={{ fontSize: "0.875rem", color: "#e2e8f0", lineHeight: 1.5 }}>
                      {mod}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: "1rem", marginTop: "1.75rem" }}>
              <a
                href="https://www.youtube.com/@Haixity"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-youtube"
                style={{ flex: 1, fontSize: "0.9rem" }}
              >
                <YouTubeIcon size={17} color="#ffffff" />
                <span>Explore on YouTube</span>
              </a>
              <button
                className="btn-secondary"
                onClick={() => setSelectedTrack(null)}
                style={{ fontSize: "0.9rem" }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
