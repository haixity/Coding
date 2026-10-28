"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { GitHubIcon } from "@/components/Icons";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.navWrapper}>
      <div className={styles.navContainer}>
        {/* Brand */}
        <Link href="/" className={styles.brand}>
          <Image
            src="/haixity-logo.jpg?v=2"
            alt="Haixity Brand Logo"
            width={40}
            height={40}
            className={styles.logoImg}
            priority
            unoptimized
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
          <a href="#community" className={styles.navLink}>
            Community
          </a>
        </nav>

        {/* Actions */}
        <div className={styles.navActions}>
          <a
            href="https://github.com/haixity"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubBtn}
          >
            <GitHubIcon size={16} />
            <span>GitHub</span>
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
            Curriculum
          </a>
          <a
            href="#community"
            className={styles.mobileNavLink}
            onClick={() => setIsOpen(false)}
          >
            Community
          </a>

          <div style={{ display: "flex", marginTop: "0.5rem" }}>
            <a
              href="https://github.com/haixity"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubBtn}
              style={{ width: "100%", justifyContent: "center" }}
            >
              <GitHubIcon size={18} />
              <span>GitHub (haixity)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
