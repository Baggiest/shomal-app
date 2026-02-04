import { promises as fs } from "fs";
import path from "path";

export interface ProductCategory {
  id: number;
  title: string;
  titleFa: string;
  image: string;
}

const categoriesDir = path.join(process.cwd(), "content", "product-categories");

export async function getProductCategories(): Promise<ProductCategory[]> {
  const files = await fs.readdir(categoriesDir);
  const items = await Promise.all(
    files
      .filter((file) => file.endsWith(".json"))
      .map(async (file) => {
        const filePath = path.join(categoriesDir, file);
        const contents = await fs.readFile(filePath, "utf-8");
        return JSON.parse(contents) as ProductCategory;
      })
  );

  return items.sort((a, b) => a.id - b.id);
}

