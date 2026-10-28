import Image from "next/image";
import { Sparkles, ExternalLink } from "lucide-react";
import { YouTubeIcon, GitHubIcon } from "@/components/Icons";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <div className={styles.brandHeader}>
              <Image
                src="/haixity-logo.jpg"
                alt="Haixity Logo"
                width={38}
                height={38}
                className={styles.footerLogo}
              />
              <span className={styles.brandName}>HAIXITY</span>
            </div>

            <p className={styles.brandMission}>
              Your destination for learning coding, mastering development skills,
              and building real-world projects. Hands-on, practical, and clear.
            </p>

            <div className={styles.quoteBox}>
              &quot;Don&apos;t just watch code. Understand it. Build it. Master it.&quot;
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className={styles.colTitle}>Navigation</h4>
            <div className={styles.linkList}>
              <a href="#curriculum" className={styles.linkItem}>
                Curriculum Tracks
              </a>
              <a href="#roadmaps" className={styles.linkItem}>
                Career Roadmaps
              </a>
              <a href="#simulator" className={styles.linkItem}>
                Architecture Lab
              </a>
              <a href="#youtube" className={styles.linkItem}>
                YouTube Hub
              </a>
              <a href="#github" className={styles.linkItem}>
                Open Source Repos
              </a>
              <a href="#community" className={styles.linkItem}>
                Community Polls
              </a>
            </div>
          </div>

          {/* Curriculum Disciplines */}
          <div>
            <h4 className={styles.colTitle}>Tracks</h4>
            <div className={styles.linkList}>
              <a href="#curriculum" className={styles.linkItem}>
                Web Development
              </a>
              <a href="#curriculum" className={styles.linkItem}>
                Backend Engineering
              </a>
              <a href="#curriculum" className={styles.linkItem}>
                Full-Stack Apps
              </a>
              <a href="#curriculum" className={styles.linkItem}>
                DSA &amp; Algorithms
              </a>
              <a href="#curriculum" className={styles.linkItem}>
                System Design
              </a>
              <a href="#curriculum" className={styles.linkItem}>
                AI &amp; Autonomous Agents
              </a>
            </div>
          </div>

          {/* Official Channel Links */}
          <div>
            <h4 className={styles.colTitle}>Official Channels</h4>
            <div className={styles.linkList}>
              <a
                href="https://www.youtube.com/@Haixity"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkItem}
              >
                <YouTubeIcon size={15} color="#ff0033" />
                <span>YouTube (@Haixity)</span>
              </a>
              <a
                href="https://github.com/haixity"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkItem}
              >
                <GitHubIcon size={15} />
                <span>GitHub (github.com/haixity)</span>
              </a>
              <a
                href="https://www.youtube.com/@Haixity/community"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkItem}
              >
                <ExternalLink size={15} />
                <span>YouTube Community</span>
              </a>
              <span style={{ fontSize: "0.8rem", color: "var(--text-dim)", marginTop: "0.5rem" }}>
                📍 India • Joined 4 Jan 2025
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div>
            © 2026 Haixity. Code. Learn. Build. Grow. All rights reserved.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <span>Crafted for developers with Next.js 15 &amp; React 19</span>
            <Sparkles size={14} color="#06b6d4" />
          </div>
        </div>
      </div>
    </footer>
  );
}
