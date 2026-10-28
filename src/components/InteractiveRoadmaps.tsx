"use client";

import { useState } from "react";
import {
  Compass,
  Check,
  Globe,
  Server,
  Bot,
  Binary,
  Trophy,
  RotateCcw,
} from "lucide-react";
import confetti from "canvas-confetti";
import styles from "./InteractiveRoadmaps.module.css";

interface Milestone {
  id: string;
  title: string;
  duration: string;
  summary: string;
  skills: string[];
}

interface Roadmap {
  id: string;
  title: string;
  icon: typeof Globe;
  description: string;
  milestones: Milestone[];
}

const ROADMAPS: Roadmap[] = [
  {
    id: "frontend",
    title: "Frontend Architect",
    icon: Globe,
    description: "From modern HTML/CSS foundations to high-scale React 19 & Next.js 15 apps.",
    milestones: [
      {
        id: "fe-1",
        title: "Stage 1: Core Foundations & Modern JS",
        duration: "Weeks 1–3",
        summary: "Semantic HTML5, CSS Grid/Flexbox, ES6+ features, Event Loop, Closures & Fetch API.",
        skills: ["HTML5", "CSS3 Layouts", "ES6+ JavaScript", "DOM API", "Async/Await"],
      },
      {
        id: "fe-2",
        title: "Stage 2: TypeScript & Component Systems",
        duration: "Weeks 4–6",
        summary: "Strict TypeScript typing, React 19 Hooks, Custom hooks, component state machines & styling.",
        skills: ["TypeScript", "React 19", "Hooks", "Component Design", "Tailwind / Vanilla CSS"],
      },
      {
        id: "fe-3",
        title: "Stage 3: Next.js 15 App Router & SSR",
        duration: "Weeks 7–9",
        summary: "Server Components, Server Actions, Dynamic Routing, Metadata SEO & Turbopack.",
        skills: ["Next.js 15", "App Router", "Server Actions", "Streaming SSR", "Turbopack"],
      },
      {
        id: "fe-4",
        title: "Stage 4: Performance, Testing & Production",
        duration: "Weeks 10–12",
        summary: "Core Web Vitals, Lighthouse 100/100, Vitest, Playwright E2E, and Edge CDN deployment.",
        skills: ["Web Vitals", "Lighthouse", "Playwright", "Edge Caching", "Vercel / AWS"],
      },
    ],
  },
  {
    id: "backend",
    title: "Backend Engineer",
    icon: Server,
    description: "Master Node.js internals, MongoDB/PostgreSQL databases, and distributed systems.",
    milestones: [
      {
        id: "be-1",
        title: "Stage 1: Node.js Internals & Express",
        duration: "Weeks 1–3",
        summary: "Node.js libuv thread pool, Streams, REST API design with Express, and structured middleware.",
        skills: ["Node.js", "Express", "Streams & Buffers", "RESTful Architecture", "Middleware"],
      },
      {
        id: "be-2",
        title: "Stage 2: Database Modeling & Transactions",
        duration: "Weeks 4–6",
        summary: "MongoDB aggregations, PostgreSQL relational modeling, indexing, and ACID transactions.",
        skills: ["MongoDB", "PostgreSQL", "Prisma ORM", "Mongoose", "Database Indexing"],
      },
      {
        id: "be-3",
        title: "Stage 3: Authentication, Security & Queues",
        duration: "Weeks 7–9",
        summary: "JWT auth, OAuth 2.0, Rate Limiting, CORS, BullMQ/RabbitMQ background job processing.",
        skills: ["JWT / OAuth", "Redis", "Security Best Practices", "BullMQ", "WebSockets"],
      },
      {
        id: "be-4",
        title: "Stage 4: Microservices & Docker Deployment",
        duration: "Weeks 10–12",
        summary: "Containerization with Docker, API Gateways, gRPC, and production Kubernetes/Cloud monitoring.",
        skills: ["Docker", "Microservices", "gRPC", "Prometheus", "CI/CD Pipelines"],
      },
    ],
  },
  {
    id: "ai",
    title: "AI & Autonomous Agent Engineer",
    icon: Bot,
    description: "Step into modern AI software engineering with LLMs, Tool Calling, and Multi-Agent Workflows.",
    milestones: [
      {
        id: "ai-1",
        title: "Stage 1: Prompt Engineering & LLM APIs",
        duration: "Weeks 1–2",
        summary: "Tokenization, Structured JSON schemas, Gemini/OpenAI API integration, and function calling.",
        skills: ["Prompt Architecture", "Structured Outputs", "Gemini API", "OpenAI SDK", "Python / TypeScript"],
      },
      {
        id: "ai-2",
        title: "Stage 2: RAG Systems & Vector Databases",
        duration: "Weeks 3–5",
        summary: "Embeddings, semantic chunking, Pinecone/pgvector search, and hybrid retrieval techniques.",
        skills: ["Embeddings", "Vector Databases", "pgvector", "RAG Pipeline", "LangChain"],
      },
      {
        id: "ai-3",
        title: "Stage 3: Autonomous ReAct Agents",
        duration: "Weeks 6–8",
        summary: "Building thought-action-observation loops, granting agents browser/terminal execution tools.",
        skills: ["ReAct Framework", "Tool Calling", "Autonomous Loops", "Sandboxed Execution", "LangGraph"],
      },
      {
        id: "ai-4",
        title: "Stage 4: Multi-Agent Swarms & Production",
        duration: "Weeks 9–12",
        summary: "Supervisor-worker agent architectures, self-correcting code generation, and eval benchmarks.",
        skills: ["Multi-Agent Swarms", "Agentic Workflows", "Evals & Benchmarks", "Streaming UX"],
      },
    ],
  },
  {
    id: "dsa",
    title: "DSA & Interview Mastery",
    icon: Binary,
    description: "Crack coding interviews by mastering patterns, not memorizing questions.",
    milestones: [
      {
        id: "dsa-1",
        title: "Stage 1: Complexity & Two-Pointer Patterns",
        duration: "Weeks 1–3",
        summary: "Big-O mastery, HashMaps, Two Pointers, and Sliding Window algorithmic techniques.",
        skills: ["Big-O Complexity", "HashMaps", "Two Pointers", "Sliding Window", "Array Manipulation"],
      },
      {
        id: "dsa-2",
        title: "Stage 2: Linked Lists, Stacks & Queues",
        duration: "Weeks 4–5",
        summary: "Monotonic stacks, fast/slow pointers, and recursive linked list manipulations.",
        skills: ["Linked Lists", "Monotonic Stack", "Queue Design", "Recursion", "Binary Search"],
      },
      {
        id: "dsa-3",
        title: "Stage 3: Trees, Graphs & Traversal",
        duration: "Weeks 6–8",
        summary: "Binary Search Trees, BFS & DFS on matrices and graphs, Dijkstra, and Union-Find.",
        skills: ["Binary Trees", "Graphs (BFS/DFS)", "Dijkstra Algorithm", "Topological Sort", "Union-Find"],
      },
      {
        id: "dsa-4",
        title: "Stage 4: Dynamic Programming & System Design",
        duration: "Weeks 9–12",
        summary: "1D/2D DP memoization & tabulation, plus foundational system design interview questions.",
        skills: ["Dynamic Programming", "Knapsack", "System Design Basics", "Mock Interviews"],
      },
    ],
  },
];

export default function InteractiveRoadmaps() {
  const [activeRoadmapId, setActiveRoadmapId] = useState<string>("frontend");
  const [completedMap, setCompletedMap] = useState<Record<string, boolean>>({});

  const roadmap =
    ROADMAPS.find((r) => r.id === activeRoadmapId) || ROADMAPS[0];

  const toggleMilestone = (id: string) => {
    setCompletedMap((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      
      // Check if all milestones in this roadmap are now completed
      const allDone = roadmap.milestones.every((m) => next[m.id]);
      if (allDone && !prev[id]) {
        try {
          confetti({
            particleCount: 100,
            spread: 80,
            origin: { y: 0.6 },
            colors: ["#10b981", "#06b6d4", "#8b5cf6"],
          });
        } catch {
          // ignore
        }
      }
      return next;
    });
  };

  const completedCount = roadmap.milestones.filter(
    (m) => completedMap[m.id]
  ).length;
  const progressPercent = Math.round(
    (completedCount / roadmap.milestones.length) * 100
  );

  const resetRoadmap = () => {
    setCompletedMap((prev) => {
      const next = { ...prev };
      roadmap.milestones.forEach((m) => {
        delete next[m.id];
      });
      return next;
    });
  };

  return (
    <section id="roadmaps" className={`section-padding ${styles.roadmapSection}`}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="badge">
            <Compass size={14} />
            Career Roadmaps
          </span>
          <h2 className="section-title">
            Step-by-Step <span className="gradient-text-primary">Mastery Tracks</span>
          </h2>
          <p className="section-subtitle">
            Track your progress across structured learning journeys. Check off
            stages as you master them on Haixity.
          </p>
        </div>

        {/* Roadmap Tabs */}
        <div className={styles.roadmapTabs}>
          {ROADMAPS.map((r) => {
            const Icon = r.icon;
            return (
              <button
                key={r.id}
                className={`${styles.tabBtn} ${
                  activeRoadmapId === r.id ? styles.tabBtnActive : ""
                }`}
                onClick={() => setActiveRoadmapId(r.id)}
              >
                <Icon size={16} />
                <span>{r.title}</span>
              </button>
            );
          })}
        </div>

        {/* Progress Card */}
        <div className={styles.progressCard}>
          <div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 750, color: "#fff", marginBottom: "0.25rem" }}>
              {roadmap.title} Progress
            </h3>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              {roadmap.description}
            </p>
          </div>

          <div className={styles.progressBarContainer}>
            <div className={styles.progressLabelRow}>
              <span>
                {completedCount} of {roadmap.milestones.length} Stages Completed
              </span>
              <span style={{ fontWeight: 700, color: "#38bdf8" }}>
                {progressPercent}%
              </span>
            </div>
            <div className={styles.progressTrack}>
              <div
                className={styles.progressFill}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <button
            onClick={resetRoadmap}
            className="btn-secondary"
            style={{ padding: "0.45rem 0.85rem", fontSize: "0.78rem" }}
            title="Reset progress for this track"
          >
            <RotateCcw size={13} />
            <span>Reset</span>
          </button>
        </div>

        {/* Milestones Timeline */}
        <div className={styles.milestonesGrid}>
          {roadmap.milestones.map((ms) => {
            const isDone = !!completedMap[ms.id];
            return (
              <div
                key={ms.id}
                className={`${styles.milestoneCard} ${
                  isDone ? styles.milestoneDone : ""
                }`}
              >
                <button
                  className={`${styles.checkTrigger} ${
                    isDone ? styles.checkTriggerDone : ""
                  }`}
                  onClick={() => toggleMilestone(ms.id)}
                  aria-label={isDone ? "Mark as incomplete" : "Mark as complete"}
                >
                  <Check size={16} strokeWidth={3} />
                </button>

                <div className={styles.milestoneContent}>
                  <div className={styles.milestoneTop}>
                    <h4 className={styles.milestoneTitle}>{ms.title}</h4>
                    <span className={styles.milestoneWeeks}>{ms.duration}</span>
                  </div>

                  <p className={styles.milestoneSummary}>{ms.summary}</p>

                  <div className={styles.skillsTags}>
                    {ms.skills.map((sk, idx) => (
                      <span key={idx} className={styles.skillTag}>
                        #{sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

