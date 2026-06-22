"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "/#home", label: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F" },
  { href: "/#about", label: "\u041E \u043A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u0438" },
  { href: "/#projects", label: "\u041F\u0440\u043E\u0435\u043A\u0442\u044B" },
  { href: "/#contacts", label: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B" },
  { href: "/blog", label: "\u0411\u043B\u043E\u0433" },
  { href: "/library", label: "\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? "10px 30px" : "20px 30px",
      backgroundColor: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(10px)" : "none",
      transition: "0.3s", display: "flex", justifyContent: "space-between", alignItems: "center"
    }}>
      <a href="#home" style={{ color: "#d4af37", fontSize: 22, fontWeight: 700, textDecoration: "none", letterSpacing: 3, fontFamily: "'Playfair Display', serif" }}>
        Abatur Ministry
      </a>

      <div className="nav-links" style={{ display: "flex", gap: 30, alignItems: "center" }}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} style={{ color: "#ccc", textDecoration: "none", fontSize: 14, transition: "0.3s", letterSpacing: 1 }}>
            {link.label}
          </a>
        ))}
      </div>

      <button className="burger" onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", color: "#d4af37", fontSize: 28, cursor: "pointer" }}>
        {open ? "\u2715" : "\u2630"}
      </button>

      {open && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: "rgba(10,10,10,0.98)", display: "flex",
          flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 30
        }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}
              style={{ color: "#d4af37", textDecoration: "none", fontSize: 24, fontFamily: "'Playfair Display', serif" }}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}