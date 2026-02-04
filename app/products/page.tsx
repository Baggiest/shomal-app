import { Navbar } from "../components/Navbar";
import { getProductCategories } from "../data/productCategories";
import { getProducts } from "../data/products";
import { ProductsClient } from "./ProductsClient";

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getProductCategories(),
  ]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ProductsClient products={products} categories={categories} />
    </div>
  );
}

