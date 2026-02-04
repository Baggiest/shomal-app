import { getProducts } from "../data/products";

export async function ProductShowcase() {
  const products = await getProducts();
  const featuredProduct = products.find((product) => product.slug === "ljb-1s") ?? products[0];

  if (!featuredProduct) {
    return null;
  }

  return (
    <section className="relative">
      <img
        src="/images/product-showcase-background.jpeg"
        alt="Factory View"
        className="w-full h-[500px] object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
        <div className="container mx-auto">
          <div className="flex items-end justify-between">
            <div className="text-white max-w-2xl text-right">
              <h2 className="text-2xl font-bold mb-2">{featuredProduct.nameFa}</h2>
              {featuredProduct.descriptionFa && (
                <p className="text-sm leading-relaxed">
                  {featuredProduct.descriptionFa}
                </p>
              )}
            </div>
            {featuredProduct.image && (
              <a href={`/products/${featuredProduct.slug}`}>
                <img
                  src={featuredProduct.image}
                  alt={featuredProduct.nameFa}
                  className="h-32 w-auto"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

