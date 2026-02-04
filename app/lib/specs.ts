import { promises as fs } from "fs";
import path from "path";

export type ProductSpec = {
  key: string;
  value: string;
};

export async function getProductSpecs(fileName: string): Promise<ProductSpec[]> {
  const filePath = path.join(process.cwd(), "public", "specs", fileName);

  try {
    const csv = await fs.readFile(filePath, "utf-8");
    return parseSpecs(csv);
  } catch {
    return [];
  }
}

function parseSpecs(csv: string): ProductSpec[] {
  return csv
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const delimiter = line.includes(",")
        ? ","
        : line.includes(";")
          ? ";"
          : line.includes("\t")
            ? "\t"
            : null;

      if (!delimiter) {
        const [key, ...rest] = line.split(":");
        return {
          key: key?.trim() ?? "",
          value: rest.join(":").trim(),
        };
      }

      const [key, ...rest] = line.split(delimiter);
      return {
        key: key?.trim() ?? "",
        value: rest.join(delimiter).trim(),
      };
    })
    .filter((item) => item.key.length > 0);
}
