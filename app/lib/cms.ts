import type { Product } from "../data/products";
import { getProducts, getProductsByCategory, getProduct } from "../data/products";

export interface CMSConfig {
  provider: "static" | "pages-cms" | "custom";
  apiUrl?: string;
  apiKey?: string;
}

export const cmsConfig: CMSConfig = {
  provider: "static",
};

export async function fetchProductsFromCMS(): Promise<Product[]> {
  switch (cmsConfig.provider) {
    case "static":
      return getProducts();
    case "pages-cms":
      if (!cmsConfig.apiUrl) {
        throw new Error("CMS API URL is not configured");
      }
      const response = await fetch(`${cmsConfig.apiUrl}/products`, {
        headers: cmsConfig.apiKey
          ? {
              Authorization: `Bearer ${cmsConfig.apiKey}`,
            }
          : {},
      });
      if (!response.ok) {
        throw new Error("Failed to fetch products from CMS");
      }
      return response.json();
    default:
      return getProducts();
  }
}

export async function fetchProductsByCategoryFromCMS(
  categoryId: number
): Promise<Product[]> {
  switch (cmsConfig.provider) {
    case "static":
      return getProductsByCategory(categoryId);
    case "pages-cms":
      if (!cmsConfig.apiUrl) {
        throw new Error("CMS API URL is not configured");
      }
      const response = await fetch(
        `${cmsConfig.apiUrl}/products?categoryId=${categoryId}`,
        {
          headers: cmsConfig.apiKey
            ? {
                Authorization: `Bearer ${cmsConfig.apiKey}`,
              }
            : {},
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch products from CMS");
      }
      return response.json();
    default:
      return getProductsByCategory(categoryId);
  }
}

export async function fetchProductFromCMS(id: string): Promise<Product | undefined> {
  switch (cmsConfig.provider) {
    case "static":
      return getProduct(id);
    case "pages-cms":
      if (!cmsConfig.apiUrl) {
        throw new Error("CMS API URL is not configured");
      }
      const response = await fetch(`${cmsConfig.apiUrl}/products/${id}`, {
        headers: cmsConfig.apiKey
          ? {
              Authorization: `Bearer ${cmsConfig.apiKey}`,
            }
          : {},
      });
      if (!response.ok) {
        return undefined;
      }
      return response.json();
    default:
      return getProduct(id);
  }
}

