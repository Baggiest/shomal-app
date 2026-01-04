import { productCategories } from "../data/productCategories";

export function ProductCategories() {
  return (
    <section id="products" className="py-16 bg-[#f7f7f7]">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">دسته بندی محصولات</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((product) => (
            <a
              key={product.id}
              href={`/products?category=${product.id}`}
              className="product-card bg-white rounded-lg overflow-hidden cursor-pointer block"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-[#383e42] font-medium">{product.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

