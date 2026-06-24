const fs = require('fs');
const path = require('path');

const layoutContent = `import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "\u0410\u0431\u0430\u0442\u0443\u0440\u043e\u0432 \u2014 \u0421\u0435\u043c\u0435\u0439\u043d\u044b\u0439 \u041a\u043e\u043d\u0446\u0435\u043f\u0442",
  description: "\u0418\u0441\u0442\u0438\u043d\u0430. \u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435. \u0424\u0438\u043b\u043e\u0441\u043e\u0444\u0438\u044f. \u0421\u0435\u043c\u0435\u0439\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 \u0410\u0431\u0430\u0442\u0443\u0440\u043e\u0432\u044b\u0445.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}<Analytics /></body>
    </html>
  );
}
`;

const targetPath = path.join(__dirname, 'src', 'app', 'layout.tsx');
fs.writeFileSync(targetPath, layoutContent, 'utf8');
console.log('OK: layout.tsx fixed');