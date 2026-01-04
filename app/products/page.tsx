"use client";

import { Navbar } from "../components/Navbar";
import { productCategories } from "../data/productCategories";
import { fetchProductsFromCMS, fetchProductsByCategoryFromCMS } from "../lib/cms";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import type { Product } from "../data/products";

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const initialCategory = categoryParam ? parseInt(categoryParam, 10) : null;
  
  const [selectedCategory, setSelectedCategory] = useState<number | null>(initialCategory);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      try {
        if (selectedCategory) {
          const categoryProducts = await fetchProductsByCategoryFromCMS(selectedCategory);
          setProducts(categoryProducts);
        } else {
          const allProducts = await fetchProductsFromCMS();
          setProducts(allProducts);
        }
      } catch (error) {
        console.error("Error loading products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, [selectedCategory]);

  const selectedCategoryData = selectedCategory
    ? productCategories.find((cat) => cat.id === selectedCategory)
    : null;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#383e42] mb-8 text-center">محصولات</h1>

          <div className="mb-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  selectedCategory === null
                    ? "bg-[#b89139] text-white"
                    : "bg-gray-200 text-[#383e42] hover:bg-gray-300"
                }`}
              >
                همه محصولات
              </button>
              {productCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-lg transition-colors ${
                    selectedCategory === category.id
                      ? "bg-[#b89139] text-white"
                      : "bg-gray-200 text-[#383e42] hover:bg-gray-300"
                  }`}
                >
                  {category.titleFa}
                </button>
              ))}
            </div>
          </div>

          {selectedCategoryData && (
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-[#383e42] mb-2">
                {selectedCategoryData.titleFa}
              </h2>
            </div>
          )}

          {loading ? (
            <div className="text-center py-12">
              <p className="text-[#6d6b64]">در حال بارگذاری...</p>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[#6d6b64]">محصولی یافت نشد</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="product-card bg-white rounded-lg overflow-hidden cursor-pointer"
                >
                  {product.image && (
                    <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                      <img
                        src={product.image}
                        alt={product.nameFa}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-[#383e42] font-bold text-lg mb-2">{product.nameFa}</h3>
                    {product.descriptionFa && (
                      <p className="text-sm text-[#6d6b64] leading-relaxed mb-4">
                        {product.descriptionFa}
                      </p>
                    )}
                    {product.inStock !== undefined && (
                      <span
                        className={`inline-block px-3 py-1 rounded text-sm ${
                          product.inStock
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {product.inStock ? "موجود" : "ناموجود"}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center py-12">
              <p className="text-[#6d6b64]">در حال بارگذاری...</p>
            </div>
          </div>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}

