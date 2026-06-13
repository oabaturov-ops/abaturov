import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "\u0410\u0431\u0430\u0442\u0443\u0440\u043E\u0432 \u2014 \u0421\u0435\u043C\u0435\u0439\u043D\u044B\u0439 \u043A\u043E\u043D\u0446\u0435\u043F\u0442",
  description: "\u0418\u0441\u0442\u0438\u043D\u0430. \u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435. \u0424\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u044F. \u0421\u0435\u043C\u0435\u0439\u043D\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442 \u0410\u0431\u0430\u0442\u0443\u0440\u043E\u0432\u044B\u0445.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}