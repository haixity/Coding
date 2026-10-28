"use client";

import { useState } from "react";
import {
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Database,
  Terminal,
  Server,
  Zap,
} from "lucide-react";
import styles from "./ArchitectureLab.module.css";

interface LabStep {
  stepNum: string;
  title: string;
  desc: string;
  deepDive: string;
  insight: string;
  payload: string;
}

interface LabScenario {
  id: string;
  title: string;
  badge: string;
  icon: typeof Server;
  steps: LabStep[];
}

const LAB_SCENARIOS: LabScenario[] = [
  {
    id: "nextjs",
    title: "Next.js 15 Server Action Lifecycle",
    badge: "Fullstack Architecture",
    icon: Server,
    steps: [
      {
        stepNum: "01",
        title: "Client Action Dispatch",
        desc: "User submits form; Next.js intercepts without full page reload.",
        deepDive:
          "Instead of a heavyweight client bundle with API fetch boilerplate, React 19 creates a lightweight RPC POST request directly to the Next.js Server Action endpoint with serialized formData.",
        insight: "Zero client API fetch code required; Type-safe end-to-end.",
        payload: `POST /api/actions HTTP/2
Host: haixity.dev
Next-Action: "c82b0a94"
Content-Type: multipart/form-data

{"courseId": "ai-agents-01", "userId": "usr_99"}`,
      },
      {
        stepNum: "02",
        title: "Server Authentication & Validation",
        desc: "Server decrypts session token and validates schema with Zod.",
        deepDive:
          "Execution runs entirely inside the secure Node.js server sandbox. Secrets like JWT private keys, Stripe API tokens, and DB passwords never leak to client JavaScript.",
        insight: "Guaranteed server-side validation before any database touch.",
        payload: `// Server-side Zod validation
const validated = EnrollmentSchema.safeParse(data);
if (!validated.success) throw new ValidationError();
const user = await verifyAuthToken(req.cookies.token);
// user.verified: true`,
      },
      {
        stepNum: "03",
        title: "Database Mutation & Cache Invalidation",
        desc: "Updates MongoDB / PostgreSQL cluster & revalidates cache tag.",
        deepDive:
          "Next.js revalidateTag('user-courses') purges the Data Cache on CDN edge nodes instantly so other queries get fresh data without manual refetch triggers.",
        insight: "Targeted On-Demand Cache Invalidation in sub-5ms.",
        payload: `await db.enrollments.create({ userId, courseId });
revalidateTag("user-courses");
return { success: true, timestamp: Date.now() };`,
      },
      {
        stepNum: "04",
        title: "Incremental UI Re-Render & Stream",
        desc: "Server streams only the updated UI slice to the browser.",
        deepDive:
          "React Server Components stream differential flight data back to the client. The browser patches the DOM seamlessly without re-rendering unrelated UI trees.",
        insight: "Instant UI update with 0 hydration lag.",
        payload: `HTTP/2 200 OK
Content-Type: text/x-component

1:{"status":"active","enrolledAt":"2026-10-28T11:00:00Z"}
0:["$","div",null,{"className":"success-toast"}]`,
      },
    ],
  },
  {
    id: "ai-agent",
    title: "Autonomous AI Agent ReAct Loop",
    badge: "AI & Autonomous Tools",
    icon: Cpu,
    steps: [
      {
        stepNum: "01",
        title: "User Prompt & Goal Ingestion",
        desc: "Goal analyzed and converted into execution plan.",
        deepDive:
          "The Haixity Agent framework injects system instructions, available tool definitions (REST API, DB, GitHub CLI), and few-shot examples into the LLM context window.",
        insight: "Structured JSON schema enforcement guarantees predictable tool calling.",
        payload: `User Goal: "Scaffold a scalable Express + MongoDB cluster with rate limiting"
Active Tools: [shell_exec, file_write, api_client, linter]
Model: Gemini 2.5 Flash / Claude 3.5 Sonnet`,
      },
      {
        stepNum: "02",
        title: "Reasoning & Thought Generation",
        desc: "LLM produces structured Thought and selects first tool.",
        deepDive:
          "The agent uses Chain-of-Thought (CoT) reasoning to break down the user's objective into discrete dependencies: dependencies install -> schema config -> express server -> tests.",
        insight: "Agent reasons step-by-step to prevent hallucinations.",
        payload: `{
  "thought": "Need to check if MongoDB driver and express-rate-limit are in package.json.",
  "tool": "file_read",
  "parameters": { "path": "./package.json" }
}`,
      },
      {
        stepNum: "03",
        title: "Deterministic Tool Execution",
        desc: "Sandbox executes tool and captures output.",
        deepDive:
          "The agent runtime executes the declared tool in an isolated sandbox. Standard output, exit codes, or error stacks are captured and sent back to the agent as an Observation.",
        insight: "Code runs safely in controlled sandboxed environment.",
        payload: `Observation from tool [file_read]:
{
  "dependencies": {
    "express": "^4.21.0",
    "mongoose": "^8.7.0"
  }
}
Missing: "express-rate-limit"`,
      },
      {
        stepNum: "04",
        title: "Self-Correction & Goal Mastery",
        desc: "Agent remedies missing package and verifies test suite.",
        deepDive:
          "Upon observing the missing dependency, the agent autonomously issues `npm install express-rate-limit`, updates the server middleware, and runs unit tests until 100% pass.",
        insight: "Autonomous self-healing development loop.",
        payload: `Thought: "I will install express-rate-limit and inject middleware."
Tool [shell_exec]: npm install express-rate-limit
Result: Code 0
Status: System operational and benchmarked.`,
      },
    ],
  },
  {
    id: "system-design",
    title: "High-Scale Distributed Caching Flow",
    badge: "System Design & Scale",
    icon: Layers,
    steps: [
      {
        stepNum: "01",
        title: "Edge CDN & Anycast Routing",
        desc: "User request terminates at closest Point of Presence (PoP).",
        deepDive:
          "Cloudflare / CloudFront edge routers use Anycast DNS to route requests to the nearest edge location, terminating SSL/TLS within 10ms.",
        insight: "90% of static requests served directly from edge without hitting origin.",
        payload: `GET /videos/haixity-nextjs-masterclass HTTP/2
CF-Ray: 8da24bb91-BOM
CF-IPCountry: IN
TLS: TLSv1.3 / AES_128_GCM`,
      },
      {
        stepNum: "02",
        title: "Distributed Rate Limiter Verification",
        desc: "Token Bucket algorithm checks client quota in Redis.",
        deepDive:
          "Before executing expensive backend computation, an atomic Redis Lua script checks client IP and API key tokens. If bucket is empty, returns HTTP 429 Too Many Requests.",
        insight: "Prevents DDoS and scrapers with 1.2ms latency penalty.",
        payload: `EVALSHA redis_token_bucket 1 "rate:ip:49.36.12.9" 100 60
// Tokens remaining: 84 / 100
// Action: ALLOW`,
      },
      {
        stepNum: "03",
        title: "Redis Cache-Aside Lookup",
        desc: "Checks in-memory Redis cluster for hot metadata.",
        deepDive:
          "If Cache HIT: returns serialized JSON in under 2ms. If Cache MISS: falls through to primary database cluster and updates Redis with TTL.",
        insight: "Sub-millisecond memory lookups handle 50,000+ QPS.",
        payload: `REDIS GET "channel:haixity:metrics"
[CACHE HIT]
{
  "subscribers": 2,
  "status": "rapid_growth",
  "videos": 12,
  "cachedAt": 1729002931
}`,
      },
      {
        stepNum: "04",
        title: "Database Read Replicas & Connection Pool",
        desc: "Reads distributed across read-replicas with Prisma / PgBouncer.",
        deepDive:
          "Write operations go to primary leader node; read operations are load balanced across 3 read replicas with connection pooling to eliminate connection exhaustion.",
        insight: "Zero bottleneck database scalability.",
        payload: `SELECT * FROM courses WHERE is_published = true 
ORDER BY popularity DESC LIMIT 10;
// Latency: 4.8ms via Read-Replica-02
// Active Pool Connections: 18/50`,
      },
    ],
  },
];

export default function ArchitectureLab() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>("nextjs");
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const scenario =
    LAB_SCENARIOS.find((s) => s.id === activeScenarioId) || LAB_SCENARIOS[0];
  const step = scenario.steps[activeStepIndex];

  return (
    <section id="simulator" className={`section-padding ${styles.labSection}`}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="badge badge-cyan">
            <Zap size={14} />
            Interactive Concept Visualizer
          </span>
          <h2 className="section-title">
            Understand the Architecture{" "}
            <span className="gradient-text-cyan">Step-by-Step</span>
          </h2>
          <p className="section-subtitle">
            &quot;Don&apos;t just watch code. Understand it.&quot; Walk through real-world
            execution flows that powering modern production apps.
          </p>
        </div>

        <div className={styles.labContainer}>
          {/* Scenario Selector */}
          <div className={styles.labSelector}>
            {LAB_SCENARIOS.map((s) => {
              const Icon = s.icon;
              return (
                <button
                  key={s.id}
                  className={`${styles.labTab} ${
                    activeScenarioId === s.id ? styles.labTabActive : ""
                  }`}
                  onClick={() => {
                    setActiveScenarioId(s.id);
                    setActiveStepIndex(0);
                  }}
                >
                  <Icon size={16} />
                  <span>{s.title}</span>
                </button>
              );
            })}
          </div>

          {/* Steps Timeline Grid */}
          <div className={styles.stepsTimeline}>
            {scenario.steps.map((st, idx) => {
              const isActive = idx === activeStepIndex;
              const isCompleted = idx < activeStepIndex;
              return (
                <div
                  key={idx}
                  className={`${styles.stepCard} ${
                    isActive ? styles.stepCardActive : ""
                  } ${isCompleted ? styles.stepCardCompleted : ""}`}
                  onClick={() => setActiveStepIndex(idx)}
                >
                  <div className={styles.stepHeader}>
                    <span className={styles.stepBadge}>STEP {st.stepNum}</span>
                    <span
                      className={`${styles.stepStatusDot} ${
                        isActive
                          ? styles.dotActive
                          : isCompleted
                          ? styles.dotCompleted
                          : ""
                      }`}
                    />
                  </div>
                  <h4 className={styles.stepTitle}>{st.title}</h4>
                  <p className={styles.stepDesc}>{st.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Inspector Detail Box */}
          <div className={styles.inspectorBox}>
            <div className={styles.inspectorLeft}>
              <div className={styles.insightPill}>
                <Sparkles size={13} />
                <span>Haixity Engineering Insight</span>
              </div>
              <h3 className={styles.inspectorTitle}>
                {step.stepNum}. {step.title}
              </h3>
              <p className={styles.inspectorText}>{step.deepDive}</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#34d399",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  marginTop: "0.5rem",
                }}
              >
                <CheckCircle size={15} />
                <span>Key takeaway: {step.insight}</span>
              </div>
            </div>

            {/* Right: Technical Payload Inspector */}
            <div className={styles.inspectorRight}>
              <div className={styles.payloadHeader}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <Terminal size={12} />
                  <span>Real Payload / Code Traces</span>
                </div>
                <span>JSON / HTTP</span>
              </div>
              <pre className={styles.payloadCode}>{step.payload}</pre>
            </div>
          </div>

          {/* Step Nav Row */}
          <div className={styles.navStepRow}>
            <button
              className="btn-secondary"
              disabled={activeStepIndex === 0}
              onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
              style={{
                opacity: activeStepIndex === 0 ? 0.4 : 1,
                cursor: activeStepIndex === 0 ? "not-allowed" : "pointer",
                padding: "0.6rem 1.2rem",
                fontSize: "0.85rem",
              }}
            >
              <ArrowLeft size={15} />
              <span>Previous Step</span>
            </button>

            <span style={{ fontSize: "0.85rem", color: "var(--text-dim)", fontFamily: "var(--font-mono)" }}>
              Step {activeStepIndex + 1} of {scenario.steps.length}
            </span>

            <button
              className="btn-primary"
              disabled={activeStepIndex === scenario.steps.length - 1}
              onClick={() =>
                setActiveStepIndex((prev) =>
                  Math.min(scenario.steps.length - 1, prev + 1)
                )
              }
              style={{
                opacity:
                  activeStepIndex === scenario.steps.length - 1 ? 0.4 : 1,
                cursor:
                  activeStepIndex === scenario.steps.length - 1
                    ? "not-allowed"
                    : "pointer",
                padding: "0.6rem 1.2rem",
                fontSize: "0.85rem",
              }}
            >
              <span>Next Step</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

