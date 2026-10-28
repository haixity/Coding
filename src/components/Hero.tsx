"use client";

import { useState } from "react";
import {
  Play,
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  Copy,
  Check,
  Sparkles,
  Terminal,
} from "lucide-react";
import confetti from "canvas-confetti";
import { YouTubeIcon, GitHubIcon } from "@/components/Icons";
import styles from "./Hero.module.css";

const CODE_SNIPPETS = {
  nextjs: {
    filename: "Next15AgentApp.tsx",
    language: "typescript",
    lines: [
      "// Haixity Fullstack Next.js 15 + AI Agent Pipeline",
      "import { streamText } from 'ai';",
      "import { google } from '@ai-sdk/google';",
      "",
      "export async function POST(req: Request) {",
      "  const { prompt } = await req.json();",
      "  ",
      "  // Autonomous Reasoning & Tool Execution",
      "  const stream = streamText({",
      "    model: google('gemini-2.5-flash'),",
      "    system: 'You are Haixity AI: Understand, Build, Master.',",
      "    prompt,",
      "  });",
      "",
      "  return stream.toDataStreamResponse();",
      "}",
    ],
    output:
      "✓ Next.js 15 Server Route initialized\n✓ AI Streaming active\n✓ Response latency: 142ms\n[HAIXITY] Status: Ready to deploy to production",
  },
  ai: {
    filename: "AutonomousAgent.py",
    language: "python",
    lines: [
      "# Haixity AI Agent Toolkit: ReAct Autonomous Loop",
      "class AutonomousAgent:",
      "    def __init__(self, name: str, tools: list):",
      "        self.name = name",
      "        self.tools = {t.name: t for t in tools}",
      "",
      "    async def think_and_act(self, goal: str):",
      "        print(f'🚀 [Haixity Agent] Deciding plan for: {goal}')",
      "        plan = await self.llm.generate_plan(goal)",
      "        for step in plan.actions:",
      "            result = await self.execute_tool(step.tool, step.args)",
      "            print(f'⚡ Step executed: {result.summary}')",
      "        return 'Goal Mastered!'",
    ],
    output:
      "🚀 [Haixity Agent] Deciding plan for: Build Real-World Microservice\n⚡ Tool [ScaffoldSystem]: Created Express + MongoDB cluster\n⚡ Tool [Benchmark]: 42,000 req/sec sustained\nGoal Mastered!",
  },
  system: {
    filename: "DistributedCache.ts",
    language: "typescript",
    lines: [
      "// System Design: Cache-Aside with Redis & Fallback",
      "export class ScalableDataStore<T> {",
      "  constructor(private redis: RedisClient, private db: DBCluster) {}",
      "",
      "  async getOrCompute(key: string, ttl: number, compute: () => Promise<T>): Promise<T> {",
      "    const cached = await this.redis.get(key);",
      "    if (cached) return JSON.parse(cached);",
      "",
      "    const fresh = await compute();",
      "    await this.redis.setex(key, ttl, JSON.stringify(fresh));",
      "    return fresh;",
      "  }",
      "}",
    ],
    output:
      "⚡ Redis cache hit ratio: 98.4%\n⚡ P99 Database latency reduced from 840ms -> 3.2ms\n⚡ Horizontal replica scale: 12 nodes auto-balanced",
  },
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"nextjs" | "ai" | "system">("nextjs");
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const handleCopy = () => {
    const text = CODE_SNIPPETS[activeTab].lines.join("\n");
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setIsRunning(true);
    setShowOutput(false);
    setTimeout(() => {
      setIsRunning(false);
      setShowOutput(true);
    }, 450);
  };

  const handleSubscribeConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#ff0033", "#8b5cf6", "#06b6d4", "#ffffff"],
      });
    } catch {
      // fallback
    }
  };

  const snippet = CODE_SNIPPETS[activeTab];

  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroGrid}>
          {/* Left Column: Mission & Messaging */}
          <div className={styles.heroContent}>
            <div className={styles.badgeWrapper}>
              <span className="badge">
                <Sparkles size={14} />
                🚀 Official Developer Hub
              </span>
              <span className="badge badge-cyan">
                Code • Learn • Build • Grow
              </span>
            </div>

            <h1 className={styles.mainTitle}>
              Don&apos;t Just Watch Code.{" "}
              <span className={styles.gradientLine}>
                Understand It. Build It. Master It.
              </span>
            </h1>

            <p className={styles.heroSubtitle}>
              Welcome to <strong>Haixity</strong> — the destination for developers
              ready to move beyond tutorial hell. We teach modern Full-Stack Next.js,
              backend architectures, DSA problem solving, and autonomous AI agents
              through production-grade real-world projects.
            </p>

            {/* CTA Buttons */}
            <div className={styles.heroCtaRow}>
              <a href="#curriculum" className="btn-primary">
                <span>Explore 6 Tracks</span>
                <ArrowRight size={17} />
              </a>

              <a
                href="https://www.youtube.com/@Haixity?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-youtube"
                onClick={handleSubscribeConfetti}
              >
                <YouTubeIcon size={19} color="#ffffff" />
                <span>Join on YouTube</span>
              </a>

              <a
                href="https://github.com/haixity"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <GitHubIcon size={18} />
                <span>github.com/haixity</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className={styles.statsBar}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>6</span>
                <span className={styles.statLabel}>Core Disciplines</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>100%</span>
                <span className={styles.statLabel}>Hands-on Projects</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>Zero</span>
                <span className={styles.statLabel}>Fluff Guarantee</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>Open</span>
                <span className={styles.statLabel}>Source Codebases</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code & Architecture Lab */}
          <div className={styles.terminalCard}>
            <div className={styles.terminalHeader}>
              <div className={styles.windowControls}>
                <span className={styles.dotRed} />
                <span className={styles.dotYellow} />
                <span className={styles.dotGreen} />
              </div>

              {/* Snippet Tabs */}
              <div className={styles.tabs}>
                <button
                  className={`${styles.tabBtn} ${
                    activeTab === "nextjs" ? styles.tabActive : ""
                  }`}
                  onClick={() => {
                    setActiveTab("nextjs");
                    setShowOutput(false);
                  }}
                >
                  <Code2 size={13} />
                  Next15App.tsx
                </button>
                <button
                  className={`${styles.tabBtn} ${
                    activeTab === "ai" ? styles.tabActive : ""
                  }`}
                  onClick={() => {
                    setActiveTab("ai");
                    setShowOutput(false);
                  }}
                >
                  <Cpu size={13} />
                  AgentLoop.py
                </button>
                <button
                  className={`${styles.tabBtn} ${
                    activeTab === "system" ? styles.tabActive : ""
                  }`}
                  onClick={() => {
                    setActiveTab("system");
                    setShowOutput(false);
                  }}
                >
                  <Layers size={13} />
                  SystemDesign.ts
                </button>
              </div>

              <button
                className={styles.copyBtn}
                onClick={handleCopy}
                title="Copy snippet"
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            {/* Code Body */}
            <div className={styles.terminalBody}>
              {snippet.lines.map((line, idx) => (
                <div key={idx} className={styles.codeLine}>
                  <span className={styles.lineNum}>{idx + 1}</span>
                  <span className={styles.codeText}>{line}</span>
                </div>
              ))}
            </div>

            {/* Terminal Actions */}
            <div className={styles.terminalFooter}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Terminal size={14} color="#64748b" />
                <span style={{ fontSize: "0.76rem", color: "#64748b" }}>
                  Interactive Haixity Code Engine
                </span>
              </div>

              <button
                className={styles.runBtn}
                onClick={handleRun}
                disabled={isRunning}
              >
                <Play size={13} fill="currentColor" />
                <span>{isRunning ? "Simulating..." : "Run Simulation"}</span>
              </button>
            </div>

            {/* Output Drawer */}
            {showOutput && (
              <div className={styles.outputDrawer}>
                <span className={styles.outputHeader}>
                  <Sparkles size={11} color="#34d399" />
                  Terminal Execution Result:
                </span>
                <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>
                  {snippet.output}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
