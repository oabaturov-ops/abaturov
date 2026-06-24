import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Абатуров — Семейный Концепт",
  description: "Истина. Управление. Философия. Семейный проект Абатуровых.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}<Analytics /></body>
    </html>
  );
}
