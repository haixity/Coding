"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  MessageSquare,
  HelpCircle,
  TrendingUp,
} from "lucide-react";
import confetti from "canvas-confetti";
import { YouTubeIcon } from "@/components/Icons";
import styles from "./YouTubeShowcase.module.css";

const FEATURED_VIDEOS = [
  {
    id: "vid-1",
    tag: "Next.js 15 Masterclass",
    title: "Next.js 15 Full-Stack: Server Components, Server Actions & Stripe",
    duration: "48:12",
    summary:
      "A complete from-scratch guide to building a production SaaS app with Next.js 15 App Router, React 19, MongoDB, and webhook payments.",
    gradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
  },
  {
    id: "vid-2",
    tag: "AI Engineering",
    title: "Build an Autonomous AI Coding Agent with Tool Calling & Python",
    duration: "42:30",
    summary:
      "Understand the ReAct agent loop from first principles. Give LLMs safe file-system access, terminal execution, and automated test correction.",
    gradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
  },
  {
    id: "vid-3",
    tag: "System Design",
    title: "System Design: Scaling to 10M Concurrent Users with Redis & Kafka",
    duration: "36:45",
    summary:
      "How to architect distributed systems that never crash under load. Caching patterns, rate limiting, and database replication explained simply.",
    gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
  },
  {
    id: "vid-5",
    tag: "Backend & DBs",
    title: "Production Node.js & MongoDB Architecture: Clean Code & Security",
    duration: "39:15",
    summary:
      "Express.js enterprise directory structures, Mongoose aggregation pipelines, indexing strategies, and JWT token rotation mechanics.",
    gradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
  },
  {
    id: "vid-6",
    tag: "Full-Stack Deployment",
    title: "Zero-Downtime Deployment with Docker, GitHub Actions & VPS",
    duration: "27:50",
    summary:
      "Step-by-step CI/CD pipeline setup. Containerizing Next.js and Node.js microservices and deploying on Linux with Nginx reverse proxy.",
    gradient: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
  },
];

const INITIAL_POLL = [
  { id: "p1", text: "AI Agent Swarms (Multi-Agent Workflows)", votes: 64 },
  { id: "p2", text: "Next.js 15 Full E-Commerce with Stripe", votes: 89 },
  { id: "p3", text: "System Design: Designing YouTube / Netflix", votes: 72 },
  { id: "p4", text: "Fullstack SaaS: Multi-Tenant Architecture", votes: 53 },
];

export default function YouTubeShowcase() {
  const [poll, setPoll] = useState(INITIAL_POLL);
  const [votedId, setVotedId] = useState<string | null>(null);

  const totalVotes = poll.reduce((acc, curr) => acc + curr.votes, 0);

  const handleVote = (id: string) => {
    if (votedId) return;
    setVotedId(id);
    setPoll((prev) =>
      prev.map((opt) => (opt.id === id ? { ...opt, votes: opt.votes + 1 } : opt))
    );

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#06b6d4", "#8b5cf6", "#ff0033"],
      });
    } catch {
      // ignore
    }
  };

  const handleSubscribe = () => {
    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.5 },
        colors: ["#ff0033", "#ffffff", "#8b5cf6"],
      });
    } catch {
      // ignore
    }
  };

  return (
    <section id="youtube" className={`section-padding ${styles.youtubeSection}`}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="badge badge-red">
            <YouTubeIcon size={14} color="#ff0033" />
            YouTube Channel Hub
          </span>
          <h2 className="section-title">
            Watch, Learn &amp; <span className="gradient-text-fire">Build With Us</span>
          </h2>
          <p className="section-subtitle">
            Every masterclass is crafted with clear diagrams, clean codebases, and zero
            unnecessary fluff. Learn by actually writing code.
          </p>
        </div>

        {/* Channel Hero Banner Card */}
        <div className={styles.channelHeroCard}>
          <div className={styles.channelInfo}>
            <Image
              src="/haixity-logo.jpg"
              alt="Haixity Official Channel Logo"
              width={72}
              height={72}
              className={styles.channelAvatar}
            />
            <div className={styles.channelMeta}>
              <h3 className={styles.channelName}>
                Haixity
                <span className={styles.verifiedBadge} title="Developer Channel">
                  ✓
                </span>
              </h3>
              <span className={styles.channelHandle}>
                @Haixity • Code. Learn. Build. Grow.
              </span>
              <div className={styles.pioneerBadge}>
                <TrendingUp size={12} />
                <span>Early Pioneer Cohort • Join our first 100 subscribers!</span>
              </div>
            </div>
          </div>

          <div className={styles.channelStatsRow}>
            <div className={styles.channelStat}>
              <span className={styles.statNum}>2+</span>
              <span className={styles.statDesc}>Subscribers</span>
            </div>
            <div className={styles.channelStat}>
              <span className={styles.statNum}>5</span>
              <span className={styles.statDesc}>Curriculum Tracks</span>
            </div>
            <div className={styles.channelStat}>
              <span className={styles.statNum}>100%</span>
              <span className={styles.statDesc}>Free Education</span>
            </div>

            <a
              href="https://www.youtube.com/@Haixity?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-youtube"
              onClick={handleSubscribe}
            >
              <YouTubeIcon size={19} color="#ffffff" />
              <span>Visit @Haixity on YouTube</span>
            </a>
          </div>
        </div>

        {/* Videos Grid */}
        <div className={styles.videoGrid}>
          {FEATURED_VIDEOS.map((vid) => (
            <div key={vid.id} className={styles.videoCard}>
              <div className={styles.thumbWrapper}>
                <div
                  className={styles.thumbBgGlow}
                  style={{ background: vid.gradient }}
                />
                <span className={styles.durationBadge}>{vid.duration}</span>
              </div>

              <div className={styles.videoBody}>
                <div>
                  <span className={styles.videoTag}>{vid.tag}</span>
                  <h4 className={styles.videoTitle}>{vid.title}</h4>
                  <p className={styles.videoSummary}>{vid.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Space */}
        <div className={styles.communityCard}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
              <HelpCircle size={16} color="#06b6d4" />
              <span style={{ fontSize: "0.8rem", color: "#38bdf8", fontWeight: 700, textTransform: "uppercase" }}>
                Haixity Community Poll
              </span>
            </div>
            <h3 className={styles.pollTitle}>
              Which Masterclass should Haixity drop next?
            </h3>
            <p className={styles.pollDesc}>
              Vote below to guide our next in-depth video tutorial and masterclass series.
            </p>

            <div className={styles.pollOptions}>
              {poll.map((opt) => {
                const percent = Math.round((opt.votes / totalVotes) * 100);
                const isSelected = votedId === opt.id;
                return (
                  <button
                    key={opt.id}
                    className={`${styles.pollBtn} ${
                      isSelected ? styles.pollBtnVoted : ""
                    }`}
                    onClick={() => handleVote(opt.id)}
                  >
                    <div
                      className={styles.pollFill}
                      style={{
                        width: votedId ? `${percent}%` : "0%",
                      }}
                    />
                    <span className={styles.pollText}>
                      {isSelected ? "✓ " : ""}
                      {opt.text}
                    </span>
                    {votedId && (
                      <span className={styles.pollPercent}>
                        {percent}% ({opt.votes})
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right side: Creator space & Sneak peek */}
          <div className={styles.communityRight}>
            <div style={{ display: "inline-flex", justifyContent: "center", marginBottom: "1rem" }}>
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  background: "rgba(139, 92, 246, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#c4b5fd",
                }}
              >
                <MessageSquare size={24} />
              </div>
            </div>
            <h4 style={{ fontSize: "1.25rem", color: "#fff", fontWeight: 800, marginBottom: "0.5rem" }}>
              Connect with Haixity
            </h4>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              &quot;Introducing a new space where viewers can start discussions with you and your audience.&quot;
              Participate in quizzes, sneak peeks, and direct Q&amp;As in our YouTube Community tab!
            </p>

            <a
              href="https://www.youtube.com/@Haixity/community"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: "0.9rem", alignSelf: "center" }}
            >
              <span>Visit Community Tab</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
