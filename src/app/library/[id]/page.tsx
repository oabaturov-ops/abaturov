import { notFound } from "next/navigation";
import Link from "next/link";
import { books } from "@/data/books";
import Nav from "@/components/Nav";

export default async function BookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    notFound();
  }

  const isLocalPdf = !!book.pdfUrl;
  const isExternal = !!book.externalUrl;

  return (
    <div style={{ minHeight: "100vh", background: "#080810", color: "#eee" }}>
      <Nav />
      <main style={{ marginLeft: 260, padding: "60px 48px", maxWidth: 820 }}>
        <Link
          href="/library"
          style={{
            color: "#d4af37",
            textDecoration: "none",
            fontSize: 14,
            display: "inline-block",
            marginBottom: 32,
          }}
        >
          &larr; \u041D\u0430\u0437\u0430\u0434 \u043A \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0435
        </Link>

        <div
          style={{
            background: "#111122",
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid #1a1a2e",
          }}
        >
          <div
            style={{
              height: 280,
              background: "linear-gradient(135deg, #1a1a2e 0%, #0d0d1a 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 32,
                color: "#d4af37",
                textAlign: "center",
                padding: "0 40px",
              }}
            >
              {book.title}
            </span>
          </div>

          <div style={{ padding: 36 }}>
            <p
              style={{
                color: "#d4af37",
                fontSize: 15,
                marginBottom: 12,
                fontWeight: 600,
              }}
            >
              {book.author}
            </p>

            <p
              style={{
                color: "#ccc",
                fontSize: 16,
                lineHeight: 1.8,
                marginBottom: 32,
                fontFamily: "'Merriweather', serif",
              }}
            >
              {book.description}
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {isLocalPdf && (
                <a
                  href={book.pdfUrl}
                  download
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#d4af37",
                    color: "#060610",
                    padding: "14px 28px",
                    borderRadius: 8,
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: 700,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  \u0421\u043A\u0430\u0447\u0430\u0442\u044C PDF
                </a>
              )}

              {isExternal && (
                <a
                  href={book.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(212,175,55,0.15)",
                    color: "#d4af37",
                    padding: "14px 28px",
                    borderRadius: 8,
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: 700,
                    border: "1px solid rgba(212,175,55,0.3)",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  \u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043D\u0430 Google Drive
                </a>
              )}
            </div>

            <div style={{ marginTop: 24, padding: "16px 20px", background: "rgba(212,175,55,0.05)", borderRadius: 8, borderLeft: "3px solid #d4af37" }}>
              <p style={{ color: "#999", fontSize: 13, margin: 0 }}>
                {isLocalPdf
                  ? "\u0424\u0430\u0439\u043B \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0434\u043B\u044F \u0441\u043A\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u044F (\u043C\u0435\u043D\u0435\u0435 100 \u041C\u0411). \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443, \u0447\u0442\u043E\u0431\u044B \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043D\u0430 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E."
                  : "\u0424\u0430\u0439\u043B \u0431\u043E\u043B\u044C\u0448\u043E\u0433\u043E \u043E\u0431\u044A\u0451\u043C\u0430 (\u0431\u043E\u043B\u0435\u0435 100 \u041C\u0411). \u041E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u043D\u0430 Google Drive \u0434\u043B\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u0438 \u0441\u043A\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u044F."}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}