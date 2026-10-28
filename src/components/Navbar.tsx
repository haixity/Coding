"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { YouTubeIcon, GitHubIcon } from "@/components/Icons";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.navWrapper}>
      <div className={styles.navContainer}>
        {/* Brand */}
        <Link href="/" className={styles.brand}>
          <Image
            src="/haixity-logo.jpg"
            alt="Haixity Brand Logo"
            width={40}
            height={40}
            className={styles.logoImg}
            priority
          />
          <div className={styles.brandText}>
            <span className={styles.brandName}>HAIXITY</span>
            <span className={styles.brandHandle}>@Haixity • Code &amp; Build</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.navLinks}>
          <a href="#curriculum" className={styles.navLink}>
            Curriculum
          </a>
          <a href="#roadmaps" className={styles.navLink}>
            Roadmaps
          </a>
          <a href="#simulator" className={styles.navLink}>
            Architecture Lab
          </a>
          <a href="#youtube" className={styles.navLink}>
            Videos
          </a>
          <a href="#github" className={styles.navLink}>
            Open Source
          </a>
          <a href="#community" className={styles.navLink}>
            Community
          </a>
        </nav>

        {/* Actions */}
        <div className={styles.navActions}>
          <div className={styles.subBadge} title="Early Pioneer Cohort">
            <span className={styles.liveDot} />
            <span>2+ Pioneers</span>
          </div>

          <a
            href="https://github.com/haixity"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubBtn}
          >
            <GitHubIcon size={16} />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.youtube.com/@Haixity?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ytBtn}
          >
            <YouTubeIcon size={17} color="#ffffff" />
            <span>Subscribe</span>
          </a>

          <button
            className={styles.menuBtn}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <a
            href="#curriculum"
            className={styles.mobileNavLink}
            onClick={() => setIsOpen(false)}
          >
            Curriculum (6 Tracks)
          </a>
          <a
            href="#roadmaps"
            className={styles.mobileNavLink}
            onClick={() => setIsOpen(false)}
          >
            Interactive Roadmaps
          </a>
          <a
            href="#simulator"
            className={styles.mobileNavLink}
            onClick={() => setIsOpen(false)}
          >
            Architecture Lab
          </a>
          <a
            href="#youtube"
            className={styles.mobileNavLink}
            onClick={() => setIsOpen(false)}
          >
            YouTube Channel &amp; Showcase
          </a>
          <a
            href="#github"
            className={styles.mobileNavLink}
            onClick={() => setIsOpen(false)}
          >
            GitHub Code Repos
          </a>
          <a
            href="#community"
            className={styles.mobileNavLink}
            onClick={() => setIsOpen(false)}
          >
            Community &amp; Newsletter
          </a>

          <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.5rem" }}>
            <a
              href="https://www.youtube.com/@Haixity?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ytBtn}
              style={{ flex: 1, justifyContent: "center" }}
            >
              <YouTubeIcon size={17} color="#ffffff" />
              <span>Subscribe on YouTube</span>
            </a>
            <a
              href="https://github.com/haixity"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubBtn}
              style={{ padding: "0.55rem 0.85rem" }}
            >
              <GitHubIcon size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
