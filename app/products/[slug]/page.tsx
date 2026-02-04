import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "../../components/Navbar";
import { getProduct, getProducts, getProductsByCategory } from "../../data/products";
import { getProductCategories } from "../../data/productCategories";
import { getProductSpecs } from "../../lib/specs";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug);

  if (!product) {
    notFound();
  }

  const [categories, specs, relatedProducts] = await Promise.all([
    getProductCategories(),
    getProductSpecs(product.specCsvFile ?? `${product.slug}.csv`),
    getProductsByCategory(product.categoryId),
  ]);

  const category = categories.find((cat) => cat.id === product.categoryId);
  const related = relatedProducts.filter((item) => item.slug !== product.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <nav className="text-sm text-[#6d6b64] mb-4" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#b89139] transition-colors">
                خانه
              </Link>
              <span className="mx-2">/</span>
              <Link href="/products" className="hover:text-[#b89139] transition-colors">
                محصولات
              </Link>
              <span className="mx-2">/</span>
              {category ? (
                <>
                  <Link
                    href={`/products?category=${category.id}`}
                    className="hover:text-[#b89139] transition-colors"
                  >
                    {category.titleFa}
                  </Link>
                  <span className="mx-2">/</span>
                </>
              ) : null}
              <span className="text-[#383e42] font-medium">{product.nameFa}</span>
            </nav>
            <h1 className="text-3xl font-bold text-[#383e42] mb-3">{product.nameFa}</h1>
            {product.descriptionFa && (
              <p className="text-[#6d6b64] leading-relaxed max-w-3xl">
                {product.descriptionFa}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6 flex items-center justify-center">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.nameFa}
                  className="max-h-[360px] w-auto object-contain"
                />
              ) : (
                <div className="text-[#6d6b64]">تصویر موجود نیست</div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-[#383e42] mb-3">مشخصات فنی</h2>
                {specs.length === 0 ? (
                  <div className="text-[#6d6b64]">مشخصات فنی وارد نشده است</div>
                ) : (
                  <div className="overflow-hidden border border-gray-200 rounded-lg">
                    <table className="w-full text-right">
                      <tbody>
                        {specs.map((spec) => (
                          <tr key={`${spec.key}-${spec.value}`} className="border-b border-gray-200">
                            <td className="p-3 font-medium text-[#383e42] bg-gray-50 w-1/2">
                              {spec.key}
                            </td>
                            <td className="p-3 text-[#6d6b64]">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {product.pdfFile && (
                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-[#383e42]">دانلود</h2>
                  <a
                    href={`/specs/${product.pdfFile}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#b89139] text-white hover:bg-[#a07f2f] transition-colors"
                  >
                    دانلود کاتالوگ
                  </a>
                </div>
              )}
            </div>
          </div>

          {related.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-[#383e42] mb-6">محصولات مرتبط</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {related.map((item) => (
                  <a
                    key={item.id}
                    href={`/products/${item.slug}`}
                    className="product-card bg-white rounded-lg overflow-hidden cursor-pointer block"
                  >
                    {item.image && (
                      <div className="h-40 bg-gray-100 flex items-center justify-center p-4">
                        <img
                          src={item.image}
                          alt={item.nameFa}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="text-[#383e42] font-bold text-base mb-2">
                        {item.nameFa}
                      </h3>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
