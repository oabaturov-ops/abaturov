"use client";
import { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

export default function AnimatedSection({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(30px)",
      transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
      ...style
    }}>
      {children}
    </div>
  );
}