import { books } from "@/data/books";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return books.map((b) => ({ id: String(b.id) }));
}

export default async function BookPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const book = books.find((b) => b.id === Number(id));
  if (!book) notFound();

  return (
    <div style={{ background: "#0a0a0a", color: "#e0e0e0", minHeight: "100vh" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px" }}>
        <Link href="/library" style={{ color: "#c9a84c", textDecoration: "none", fontSize: 15, display: "inline-block", marginBottom: 32 }}>← Назад к библиотеке</Link>

        <h1 style={{ fontSize: 36, color: "#c9a84c", marginBottom: 8, fontWeight: 700 }}>{book.title}</h1>
        <p style={{ fontSize: 16, color: "#888", marginBottom: 24 }}>{book.author}</p>
        <p style={{ fontSize: 16, color: "#bbb", lineHeight: 1.8, marginBottom: 32 }}>{book.description}</p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {book.pdfUrl && (
            <a href={book.pdfUrl} target="_blank" rel="noopener noreferrer" style={{ background: "#c9a84c", color: "#000", padding: "12px 24px", borderRadius: 8, textDecoration: "none", fontWeight: 600, fontSize: 14 }}>Скачать PDF</a>
          )}
          {book.externalUrl && (
            <a href={book.externalUrl} target="_blank" rel="noopener noreferrer" style={{ border: "1px solid #c9a84c", color: "#c9a84c", padding: "12px 24px", borderRadius: 8, textDecoration: "none", fontWeight: 600, fontSize: 14 }}>Читать онлайн</a>
          )}
        </div>
      </div>
    </div>
  );
}