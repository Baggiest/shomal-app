import { promises as fs } from "fs";
import path from "path";

export interface Product {
  id: string;
  slug: string;
  categoryId: number;
  name: string;
  nameFa: string;
  description?: string;
  descriptionFa?: string;
  image?: string;
  images?: string[];
  pdfFile?: string;
  specCsvFile?: string;
  inStock?: boolean;
}

const productsDir = path.join(process.cwd(), "content", "products");

async function readProducts(): Promise<Product[]> {
  const files = await fs.readdir(productsDir);
  const items = await Promise.all(
    files
      .filter((file) => file.endsWith(".json"))
      .map(async (file) => {
        const filePath = path.join(productsDir, file);
        const contents = await fs.readFile(filePath, "utf-8");
        return JSON.parse(contents) as Product;
      })
  );

  return items.sort((a, b) => a.nameFa.localeCompare(b.nameFa, "fa"));
}

export async function getProducts(): Promise<Product[]> {
  return readProducts();
}

export async function getProductsByCategory(categoryId: number): Promise<Product[]> {
  const products = await readProducts();
  return products.filter((p) => p.categoryId === categoryId);
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  const products = await readProducts();
  return products.find((p) => p.slug === slug || p.id === slug);
}

