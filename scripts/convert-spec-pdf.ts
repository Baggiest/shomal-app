import { promises as fs } from "fs";
import path from "path";
import pdf from "pdf-parse";

type SpecRow = {
  key: string;
  value: string;
};

async function run() {
  const [inputPath, outputPath] = process.argv.slice(2);

  if (!inputPath || !outputPath) {
    console.error("Usage: tsx scripts/convert-spec-pdf.ts <input.pdf> <output.csv>");
    process.exit(1);
  }

  const pdfBuffer = await fs.readFile(path.resolve(inputPath));
  const { text } = await pdf(pdfBuffer);
  const rows = parseText(text);
  const csv = rows.map((row) => `${escapeCsv(row.key)},${escapeCsv(row.value)}`).join("\n");

  await fs.writeFile(path.resolve(outputPath), csv, "utf-8");
}

function parseText(text: string): SpecRow[] {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      if (line.includes(":")) {
        const [key, ...rest] = line.split(":");
        return { key: key.trim(), value: rest.join(":").trim() };
      }

      const parts = line.split(/\s{2,}/).filter(Boolean);
      if (parts.length >= 2) {
        const [key, ...rest] = parts;
        return { key: key.trim(), value: rest.join(" ").trim() };
      }

      return { key: line.trim(), value: "" };
    })
    .filter((row) => row.key.length > 0);
}

function escapeCsv(value: string) {
  const escaped = value.replace(/"/g, "\"\"");
  return `"${escaped}"`;
}

run();
