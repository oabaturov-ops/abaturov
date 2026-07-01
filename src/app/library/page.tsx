import { books } from "@/data/books";
import Link from "next/link";

export const metadata = { title: "Библиотека | Абатуров" };

export default function LibraryPage() {
  const categories = [...new Set(books.map(b => b.author))];

  return (
    <div style={{ background: "#0a0a0a", color: "#e0e0e0", minHeight: "100vh" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px" }}>
        <h1 style={{ fontSize: 48, color: "#c9a84c", marginBottom: 12, fontWeight: 700 }}>Библиотека</h1>
        <p style={{ fontSize: 18, color: "#999", marginBottom: 48 }}>Книги и материалы братьев Абатуровых</p>

        <div style={{ display: "flex", gap: 32, alignItems: "flex-start" }}>
          <div style={{ flex: 1 }}>
            {books.map((book) => (
              <Link key={book.id} href={"/library/" + book.id} style={{ textDecoration: "none", color: "inherit", display: "block", marginBottom: 20 }}>
                <div style={{ background: "#141414", border: "1px solid #2a2a2a", borderRadius: 12, padding: 24, transition: "border-color 0.3s" }}>
                  <h2 style={{ fontSize: 20, color: "#c9a84c", marginBottom: 8 }}>{book.title}</h2>
                  <p style={{ fontSize: 14, color: "#888", marginBottom: 8 }}>{book.author}</p>
                  <p style={{ fontSize: 15, color: "#aaa", lineHeight: 1.6 }}>{book.description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ width: 220, flexShrink: 0 }}>
            <h3 style={{ fontSize: 16, color: "#c9a84c", marginBottom: 16 }}>Авторы</h3>
            {categories.map((cat) => (
              <div key={cat} style={{ padding: "8px 0", fontSize: 14, color: "#999", borderBottom: "1px solid #222" }}>{cat}</div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid #222" }}>
          <Link href="/" style={{ color: "#c9a84c", textDecoration: "none", fontSize: 15 }}>← Назад к главной</Link>
        </div>
      </div>
    </div>
  );
}