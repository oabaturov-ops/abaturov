import Link from "next/link";
import { books } from "@/data/books";
import Nav from "@/components/Nav";

export default function LibraryPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#080810", color: "#eee" }}>
      <Nav />
      <main style={{ marginLeft: 260, padding: "60px 48px" }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, color: "#d4af37", marginBottom: 12 }}>
          {"\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430"}
        </h1>
        <p style={{ color: "#999", fontSize: 16, marginBottom: 48, maxWidth: 600 }}>
          {"\u041A\u043D\u0438\u0433\u0438 \u0438 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438 \u043F\u043E \u0444\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u0438 \u0438\u043C\u0435\u043D\u0438, \u0434\u0443\u0445\u043E\u0432\u043D\u043E\u043C\u0443 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044E \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044E."}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 28 }}>
          {books.map((book) => (
            <Link
              key={book.id}
              href={`/library/${book.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div style={{
                background: "#111122",
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid #1a1a2e",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}>
                <div style={{
                  height: 200,
                  background: "linear-gradient(135deg, #1a1a2e 0%, #0d0d1a 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#d4af37", textAlign: "center", padding: "0 24px" }}>
                    {book.title}
                  </span>
                </div>
                <div style={{ padding: 24 }}>
                  <p style={{ color: "#d4af37", fontSize: 13, marginBottom: 8, fontWeight: 600 }}>
                    {book.author}
                  </p>
                  <p style={{ color: "#999", fontSize: 14, lineHeight: 1.6, marginBottom: 12, minHeight: 48 }}>
                    {book.description}
                  </p>
                  <span style={{ color: "#666", fontSize: 12 }}>
                    {book.pdfUrl ? "\u041C\u0435\u0441\u0442\u043D\u044B\u0439 PDF" : "\u041D\u0430 Google Drive"}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}