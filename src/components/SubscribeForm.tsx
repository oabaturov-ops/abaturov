"use client";
import { useState, FormEvent } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (res.ok) { setStatus("done"); setEmail(""); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const btnBg = status === "done" ? "#2a6e2a" : status === "loading" ? "#333" : "#d4af37";
  const btnColor = status === "done" || status === "loading" ? "#666" : "#000";
  const btnText = status === "loading" ? "..." : status === "done" ? "Готово!" : "Подписаться";
  const btnCursor = status === "loading" || status === "done" ? "default" : "pointer";

  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ color: "#aaa", fontSize: 16, marginBottom: 20 }}>
        Подпишитесь на обновления и новые материалы
      </p>
      <form onSubmit={submit} style={{ display: "flex", gap: 10, maxWidth: 500, margin: "0 auto" }}>
        <input
          type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="Ваш email" required
          style={{
            flex: 1, background: "#111", border: "1px solid #333", borderRadius: 6,
            padding: "12px 16px", color: "#fff", fontSize: 15, outline: "none"
          }}
        />
        <button type="submit" disabled={status === "loading" || status === "done"}
          style={{
            background: btnBg, color: btnColor, border: "none", borderRadius: 6,
            padding: "12px 24px", fontSize: 15, fontWeight: 600, cursor: btnCursor,
            transition: "background 0.3s"
          }}
        >{btnText}</button>
      </form>
    </div>
  );
}