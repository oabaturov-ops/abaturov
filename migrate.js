const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "src", "data", "articles.ts");
const destDir = path.join(__dirname, "content", "articles");

let raw = fs.readFileSync(src, "utf8");
if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1);

// Ищем массив ПОСЛЕ "export const articles", а не первый [ в файле
const marker = "export const articles";
const markerIdx = raw.indexOf(marker);
if (markerIdx === -1) {
  console.log("Error: export const articles not found");
  process.exit(1);
}
const start = raw.indexOf("[", markerIdx);
const end = raw.lastIndexOf("]");
if (start === -1 || end === -1) {
  console.log("Error: array not found");
  process.exit(1);
}

const arrayStr = raw.slice(start, end + 1);

// Создаём временный .js файл и загружаем через require
const tempFile = path.join(__dirname, "_migrate_temp.js");
fs.writeFileSync(tempFile, "module.exports = " + arrayStr + ";", "utf8");

let articles;
try {
  delete require.cache[require.resolve(tempFile)];
  articles = require(tempFile);
} catch (e) {
  console.log("Error:", e.message);
  fs.unlinkSync(tempFile);
  process.exit(1);
}
fs.unlinkSync(tempFile);

// Создаём папку и пишем JSON
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

let count = 0;
for (const a of articles) {
  const filePath = path.join(destDir, a.slug + ".json");
  fs.writeFileSync(filePath, JSON.stringify(a, null, 2), "utf8");
  console.log("+ " + a.slug + ".json");
  count++;
}

console.log("\nDone! " + count + " articles -> content/articles/");