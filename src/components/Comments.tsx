"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface Comment {
  id: number;
  article_slug: string;
  author: string;
  text: string;
  created_at: string;
}

export default function Comments({ articleSlug }: { articleSlug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("article_slug", articleSlug)
        .order("created_at", { ascending: false });

      if (!error && data) {
        setComments(data as Comment[]);
      }
      setLoading(false);
    };
    fetchComments();
  }, [articleSlug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;

    const { error } = await supabase.from("comments").insert([
      {
        article_slug: articleSlug,
        author: author.trim(),
        text: text.trim(),
      },
    ]);

    if (!error) {
      setComments((prev) => [
        {
          id: Date.now(),
          article_slug: articleSlug,
          author: author.trim(),
          text: text.trim(),
          created_at: new Date().toISOString(),
        },
        ...prev,
      ]);
      setAuthor("");
      setText("");
    }
  };

  return (
    <div style={{ marginTop: 48 }}>
      <h3 style={{ color: "#d4af37", fontSize: 24, marginBottom: 24, fontFamily: "'Playfair Display', serif" }}>
        {"\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438"}
      </h3>

      {loading ? (
        <p style={{ color: "#999" }}>{"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."}</p>
      ) : comments.length === 0 ? (
        <p style={{ color: "#777", fontStyle: "italic" }}>
          {"\u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432. \u0411\u0443\u0434\u044C\u0442\u0435 \u043F\u0435\u0440\u0432\u044B\u043C!"}
        </p>
      ) : (
        <div>
          {comments.map((c) => (
            <div key={c.id} style={{
              background: "#111122",
              borderRadius: 8,
              padding: "16px 20px",
              marginBottom: 12,
              borderLeft: "3px solid #d4af37",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ color: "#d4af37", fontWeight: 600, fontSize: 14 }}>{c.author}</span>
                <span style={{ color: "#666", fontSize: 12 }}>
                  {new Date(c.created_at).toLocaleDateString("ru-RU")}
                </span>
              </div>
              <p style={{ color: "#ccc", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{c.text}</p>
            </div>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ marginTop: 24 }}>
        <input
          type="text"
          placeholder={"\u0412\u0430\u0448\u0435 \u0438\u043C\u044F"}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={{
            width: "100%", padding: "12px 16px", marginBottom: 12,
            background: "#111122", border: "1px solid #333", borderRadius: 6,
            color: "#eee", fontSize: 14, outline: "none", boxSizing: "border-box",
          }}
        />
        <textarea
          placeholder={"\u0412\u0430\u0448 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439"}
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          style={{
            width: "100%", padding: "12px 16px", marginBottom: 12,
            background: "#111122", border: "1px solid #333", borderRadius: 6,
            color: "#eee", fontSize: 14, outline: "none", resize: "vertical", boxSizing: "border-box",
          }}
        />
        <button
          type="submit"
          style={{
            background: "#d4af37", color: "#060610", border: "none",
            padding: "12px 28px", borderRadius: 6, fontSize: 14, fontWeight: 700, cursor: "pointer",
          }}
        >
          {"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"}
        </button>
      </form>
    </div>
  );
}