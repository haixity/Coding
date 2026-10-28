"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";
import { YouTubeIcon, GitHubIcon } from "@/components/Icons";
import styles from "./CommunityJoin.module.css";

export default function CommunityJoin() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.7 },
        colors: ["#8b5cf6", "#06b6d4", "#10b981", "#ff0033"],
      });
    } catch {
      // ignore
    }
  };

  return (
    <section id="community" className={`section-padding ${styles.communitySection}`}>
      <div className="container">
        <div className={styles.joinCard}>
          <div className={styles.pioneerPill}>
            <Sparkles size={14} color="#06b6d4" />
            <span>HAIXITY DEVELOPER COLLECTIVE • JOIN THE COMMUNITY</span>
          </div>

          <h2 className={styles.joinTitle}>
            Ready to <span className="gradient-text-primary">Master Code</span> &amp; Build Real Systems?
          </h2>

          <p className={styles.joinDesc}>
            Subscribe to get early access to full-stack project blueprints, weekly
            system design cheat sheets, and notifications when new masterclasses drop.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className={styles.inputGroup}>
              <input
                type="email"
                placeholder="Enter your developer email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.emailInput}
              />
              <button type="submit" className={styles.submitBtn}>
                <span>Join Community</span>
                <Send size={15} />
              </button>
            </form>
          ) : (
            <div className={styles.successMessage}>
              <CheckCircle2 size={18} />
              <span>
                Welcome to the Haixity Community! Check your inbox shortly.
              </span>
            </div>
          )}

          {/* Social Links Row */}
          <div className={styles.socialRow}>
            <a
              href="https://www.youtube.com/@Haixity"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
            >
              <YouTubeIcon size={16} color="#ff0033" />
              <span>YouTube (@Haixity)</span>
            </a>

            <a
              href="https://github.com/haixity"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
            >
              <GitHubIcon size={16} />
              <span>GitHub (github.com/haixity)</span>
            </a>

            <a
              href="https://www.youtube.com/@Haixity/community"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
            >
              <MessageCircle size={16} color="#06b6d4" />
              <span>Community Discussions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
