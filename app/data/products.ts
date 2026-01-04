export interface Product {
  id: string;
  categoryId: number;
  name: string;
  nameFa: string;
  description?: string;
  descriptionFa?: string;
  image?: string;
  images?: string[];
  specifications?: Record<string, string>;
  price?: number;
  inStock?: boolean;
}

export const products: Product[] = [
  {
    id: "ljb-1s",
    categoryId: 4,
    name: "LJB 1S",
    nameFa: "LJB 1S",
    description: "Selector switch for control and command systems",
    descriptionFa: "سوئیچ قطع و وصل کنترلی سلکتوری مدل LJB1-S شرکت ماشین سازی شمال برای انتخاب و تغییر حالت بین چندین وضعیت یا مدار مختلف در یک سیستم الکتریکی استفاده می‌شود. این سوئیچ‌ها به طور گسترده در سیستم‌های کنترلی و صنعتی برای تغییر وضعیت تجهیزات، مدارها یا فرآیندها به کار می‌روند.",
    image: "https://ext.same-assets.com/2455557907/3250288881.png",
    inStock: true,
  },
];

export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getProductsByCategory(categoryId: number): Promise<Product[]> {
  return products.filter((p) => p.categoryId === categoryId);
}

export async function getProduct(id: string): Promise<Product | undefined> {
  return products.find((p) => p.id === id);
}

