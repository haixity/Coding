"use client";

import { useState } from "react";
import {
  Star,
  GitFork,
  ExternalLink,
  Copy,
  Check,
  FolderGit2,
} from "lucide-react";
import { GitHubIcon } from "@/components/Icons";
import styles from "./GitHubShowcase.module.css";

const REPOSITORIES = [
  {
    name: "haixity-next15-starter",
    desc: "Production-ready full-stack template featuring Next.js 15, React 19, TypeScript, Server Actions, Auth, MongoDB & Tailwind/Vanilla CSS.",
    tags: ["Next.js 15", "TypeScript", "Auth", "MongoDB", "Stripe"],
    stars: 28,
    forks: 9,
    language: "TypeScript",
    langColor: "#3178c6",
    cloneUrl: "https://github.com/haixity/haixity-next15-starter.git",
  },
  {
    name: "autonomous-ai-agent-toolkit",
    desc: "Minimalist yet extensible ReAct agent loop implementation. Equip LLMs with bash, web scrapers, and dynamic vector RAG search.",
    tags: ["Python", "AI Agents", "LangChain", "Gemini", "RAG"],
    stars: 44,
    forks: 14,
    language: "Python",
    langColor: "#3572A5",
    cloneUrl: "https://github.com/haixity/autonomous-ai-agent-toolkit.git",
  },
  {
    name: "system-design-blueprints",
    desc: "Interactive architecture diagrams, latency cheat sheets, caching blueprints, and microservice design patterns for tech interviews.",
    tags: ["Architecture", "System Design", "Redis", "Distributed Systems"],
    stars: 62,
    forks: 19,
    language: "Markdown / Docs",
    langColor: "#8b5cf6",
    cloneUrl: "https://github.com/haixity/system-design-blueprints.git",
  },
  {
    name: "dsa-patterns-mastery",
    desc: "Curated solution sets for the top 50 LeetCode patterns with visual diagrams, edge-case breakdowns, and Big-O proofs.",
    tags: ["Algorithms", "LeetCode", "Data Structures", "Big-O"],
    stars: 37,
    forks: 11,
    language: "TypeScript / Python",
    langColor: "#f59e0b",
    cloneUrl: "https://github.com/haixity/dsa-patterns-mastery.git",
  },
];

export default function GitHubShowcase() {
  const [copiedRepo, setCopiedRepo] = useState<string | null>(null);

  const handleCopyClone = (repoName: string, url: string) => {
    navigator.clipboard.writeText(`git clone ${url}`);
    setCopiedRepo(repoName);
    setTimeout(() => setCopiedRepo(null), 2000);
  };

  return (
    <section id="github" className={`section-padding ${styles.githubSection}`}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="badge">
            <GitHubIcon size={14} />
            Open Source Ecosystem
          </span>
          <h2 className="section-title">
            Explore Codebases on <span className="gradient-text-primary">GitHub</span>
          </h2>
          <p className="section-subtitle">
            All code written in Haixity tutorials is 100% open source. Clone,
            experiment, and build your own production projects.
          </p>
        </div>

        {/* Repos Grid */}
        <div className={styles.reposGrid}>
          {REPOSITORIES.map((repo) => (
            <div key={repo.name} className={styles.repoCard}>
              <div>
                <div className={styles.repoHeader}>
                  <div className={styles.repoTitleArea}>
                    <FolderGit2 size={18} color="#06b6d4" />
                    <a
                      href="https://github.com/haixity"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.repoTitle}
                    >
                      {repo.name}
                    </a>
                  </div>
                  <span className={styles.badgePublic}>Public</span>
                </div>

                <p className={styles.repoDesc}>{repo.desc}</p>

                <div className={styles.tagsRow}>
                  {repo.tags.map((t, idx) => (
                    <span key={idx} className={styles.tagPill}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Clone Command */}
                <div className={styles.cloneRow}>
                  <span className={styles.cloneCommand}>
                    git clone {repo.cloneUrl}
                  </span>
                  <button
                    className={styles.copyBtn}
                    onClick={() => handleCopyClone(repo.name, repo.cloneUrl)}
                    title="Copy git clone command"
                  >
                    {copiedRepo === repo.name ? (
                      <>
                        <Check size={13} color="#34d399" />
                        <span style={{ color: "#34d399" }}>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Repo Footer */}
              <div className={styles.repoFooter}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      backgroundColor: repo.langColor,
                      display: "inline-block",
                    }}
                  />
                  <span>{repo.language}</span>
                </div>

                <div className={styles.statGroup}>
                  <div className={styles.statItem} title="Stars">
                    <Star size={14} fill="currentColor" color="#fbbf24" />
                    <span>{repo.stars}</span>
                  </div>
                  <div className={styles.statItem} title="Forks">
                    <GitFork size={14} />
                    <span>{repo.forks}</span>
                  </div>
                  <a
                    href="https://github.com/haixity"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", color: "#38bdf8" }}
                    title="View repository on GitHub"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Organization Banner */}
        <div className={styles.githubProfileCta}>
          <div>
            <h3 style={{ fontSize: "1.25rem", color: "#fff", fontWeight: 800, marginBottom: "0.3rem" }}>
              Collaborate with the Haixity Community
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
              Found a bug or want to contribute a feature? Open an issue or submit a PR on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/haixity"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ padding: "0.75rem 1.4rem" }}
          >
            <GitHubIcon size={18} />
            <span>Follow @haixity on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
