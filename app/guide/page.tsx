import { Navbar } from "../components/Navbar";

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl font-bold text-[#383e42] mb-2">System Guide</h1>
          <p className="text-[#6d6b64] mb-12">راهنمای سیستم / راهنمای کامل پلتفرم</p>

          <section id="en" className="mb-16">
            <h2 className="text-2xl font-bold text-[#383e42] mb-6 border-b border-gray-200 pb-2">
              English
            </h2>

            <h3 className="text-xl font-semibold text-[#383e42] mt-8 mb-3">
              What This System Is
            </h3>
            <p className="text-[#6d6b64] leading-relaxed mb-4">
              This is a Next.js landing site for Shomal (ماشین سازی شمال پیروز) with a
              Git-backed content system. Product and category data live as JSON files in the
              repo. Non-engineers can edit content via Pages CMS (or by editing JSON). The site
              uses a Persian font (Vazirmatn), dynamic product pages, optional spec tables from
              CSV, and downloadable PDFs per product.
            </p>

            <h3 className="text-xl font-semibold text-[#383e42] mt-8 mb-3">
              Current Features
            </h3>
            <ul className="list-disc list-inside text-[#6d6b64] space-y-2 mb-4">
              <li>
                <strong className="text-[#383e42]">Content in the repo</strong> — Products and
                categories are stored under <code className="bg-gray-100 px-1">content/products</code> and{" "}
                <code className="bg-gray-100 px-1">content/product-categories</code> as JSON files.
              </li>
              <li>
                <strong className="text-[#383e42]">Pages CMS</strong> — Configured via{" "}
                <code className="bg-gray-100 px-1">.pages.yml</code> in the repo root (see{" "}
                <a href="https://pagescms.org/docs/configuration/" target="_blank" rel="noopener noreferrer" className="text-[#b89139] hover:underline">Pages CMS configuration</a>).
                Use the Pages CMS web app (e.g. pagescms.org) and sign in with GitHub to edit products and
                categories; changes commit to the repo.
              </li>
              <li>
                <strong className="text-[#383e42]">Dynamic product pages</strong> — Each product
                has a page at <code className="bg-gray-100 px-1">/products/[slug]</code>. The
                slug comes from the product JSON. Pages show title, description, image, specs
                table (from CSV), PDF download link, and related products.
              </li>
              <li>
                <strong className="text-[#383e42]">Clickable breadcrumb (address bar)</strong> — On the product
                page, the path “Home / Products / Category / Product name” is a breadcrumb. Each segment is clickable:
                “Home” → <code className="bg-gray-100 px-1">/</code>, “Products” → <code className="bg-gray-100 px-1">/products</code>, and
                the category name → <code className="bg-gray-100 px-1">/products?category=ID</code>. The current product name is text only.
              </li>
              <li>
                <strong className="text-[#383e42]">Specs from CSV</strong> — If a product has{" "}
                <code className="bg-gray-100 px-1">specCsvFile</code> (or defaults to{" "}
                <code className="bg-gray-100 px-1">slug.csv</code>), the app looks for the file in{" "}
                <code className="bg-gray-100 px-1">public/specs/</code> and renders a key/value
                table. CSV can use comma, semicolon, or tab; also supports key: value lines.
              </li>
              <li>
                <strong className="text-[#383e42]">Product PDFs</strong> — If a product has{" "}
                <code className="bg-gray-100 px-1">pdfFile</code>, a “Download catalog” button
                links to <code className="bg-gray-100 px-1">/specs/{`{filename}`}</code>. Put
                PDFs in <code className="bg-gray-100 px-1">public/specs/</code>.
              </li>
              <li>
                <strong className="text-[#383e42]">PDF to CSV script</strong> — Manual script{" "}
                <code className="bg-gray-100 px-1">scripts/convert-spec-pdf.ts</code> reads a PDF
                and writes a CSV (key/value). Run with:{" "}
                <code className="bg-gray-100 px-1">pnpm tsx scripts/convert-spec-pdf.ts input.pdf output.csv</code>.
                Designed so you can later plug in an AI step for better table extraction.
              </li>
              <li>
                <strong className="text-[#383e42]">Persian font</strong> — Vazirmatn (Google
                Fonts) is loaded in <code className="bg-gray-100 px-1">app/layout.tsx</code> and
                applied to the whole site.
              </li>
              <li>
                <strong className="text-[#383e42]">Products listing</strong> — The /products page
                lists all products with optional category filter (client-side). Each item links
                to <code className="bg-gray-100 px-1">/products/[slug]</code>.
              </li>
              <li>
                <strong className="text-[#383e42]">Homepage</strong> — Hero, featured product
                (from data), product categories (from content JSON), industries, certifications,
                about, contact. Product categories and featured product link to /products and
                product detail pages.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-[#383e42] mt-8 mb-3">
              How to Work With It
            </h3>
            <ul className="list-disc list-inside text-[#6d6b64] space-y-2 mb-4">
              <li>
                <strong className="text-[#383e42]">Adding/editing products</strong> — Use Pages
                CMS (connect repo and edit via UI) or add/edit JSON files in{" "}
                <code className="bg-gray-100 px-1">content/products/</code>. Each file is one
                product; filename (without .json) is not used as slug — the <code className="bg-gray-100 px-1">slug</code> field
                in the JSON is. Required: id, slug, categoryId, nameFa. Optional: name,
                description, descriptionFa, image, pdfFile, specCsvFile, inStock.
              </li>
              <li>
                <strong className="text-[#383e42]">Categories</strong> — Edit or add JSON in{" "}
                <code className="bg-gray-100 px-1">content/product-categories/</code>. Fields:
                id (number), title, titleFa, image.
              </li>
              <li>
                <strong className="text-[#383e42]">Specs table</strong> — Add a CSV in{" "}
                <code className="bg-gray-100 px-1">public/specs/</code> with key/value rows (or
                run the PDF script to generate one). Set <code className="bg-gray-100 px-1">specCsvFile</code> in the
                product JSON to the CSV filename.
              </li>
              <li>
                <strong className="text-[#383e42]">PDF catalog</strong> — Put the PDF in{" "}
                <code className="bg-gray-100 px-1">public/specs/</code> and set{" "}
                <code className="bg-gray-100 px-1">pdfFile</code> in the product JSON to the
                filename.
              </li>
              <li>
                <strong className="text-[#383e42]">Configuration</strong> — Pages CMS uses a single config file{" "}
                <code className="bg-gray-100 px-1">.pages.yml</code> in the repo root. It defines media folders (images, specs), content collections (products, product-categories), field schemas, and list view. See the repo <code className="bg-gray-100 px-1">README.md</code> and{" "}
                <a href="https://pagescms.org/docs/configuration/" target="_blank" rel="noopener noreferrer" className="text-[#b89139] hover:underline">Pages CMS configuration docs</a> for details.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-[#383e42] mt-8 mb-3">
              Future / Possible Features
            </h3>
            <ul className="list-disc list-inside text-[#6d6b64] space-y-2 mb-4">
              <li>AI-assisted PDF → CSV conversion in the pipeline (e.g. extract tables from spec PDFs).</li>
              <li>Multi-language (e.g. EN/FA) with locale in URL or content.</li>
              <li>Search over products and categories.</li>
              <li>Image uploads via Pages CMS or separate media storage linked from JSON.</li>
              <li>Related products logic (e.g. by tags or category) configurable per product.</li>
              <li>Optional “installation guide” or “certificates” PDF per product.</li>
              <li>Analytics or form submissions (e.g. contact) wired to a backend or service.</li>
            </ul>
          </section>

          <section id="fa" className="mb-16">
            <h2 className="text-2xl font-bold text-[#383e42] mb-6 border-b border-gray-200 pb-2">
              فارسی
            </h2>

            <h3 className="text-xl font-semibold text-[#383e42] mt-8 mb-3">
              این سیستم چیست
            </h3>
            <p className="text-[#6d6b64] leading-relaxed mb-4">
              این سایت یک لندینگ Next.js برای ماشین‌سازی شمال پیروز است با محتوای مبتنی بر
              گیت. دادهٔ محصولات و دسته‌بندی‌ها به صورت فایل JSON در مخزن قرار دارد. افراد
              غیرفنی می‌توانند از طریق Pages CMS (یا با ویرایش JSON) محتوا را ویرایش کنند.
              سایت از فونت فارسی وزیرمتن، صفحات محصول پویا، جدول مشخصات از CSV و دانلود PDF
              برای هر محصول پشتیبانی می‌کند.
            </p>

            <h3 className="text-xl font-semibold text-[#383e42] mt-8 mb-3">
              امکانات فعلی
            </h3>
            <ul className="list-disc list-inside text-[#6d6b64] space-y-2 mb-4">
              <li>
                <strong className="text-[#383e42]">محتوای داخل مخزن</strong> — محصولات و
                دسته‌بندی‌ها در <code className="bg-gray-100 px-1">content/products</code> و{" "}
                <code className="bg-gray-100 px-1">content/product-categories</code> به صورت
                فایل JSON ذخیره می‌شوند.
              </li>
              <li>
                <strong className="text-[#383e42]">Pages CMS</strong> — با فایل{" "}
                <code className="bg-gray-100 px-1">.pages.yml</code> در ریشه مخزن پیکربندی شده است (مستندات{" "}
                <a href="https://pagescms.org/docs/configuration/" target="_blank" rel="noopener noreferrer" className="text-[#b89139] hover:underline">پیکربندی Pages CMS</a>).
                از وب‌اپ Pages CMS (مثلاً pagescms.org) با اکانت گیت‌هاب برای ویرایش محصولات و
                دسته‌بندی‌ها استفاده کنید؛ تغییرات به مخزن کامیت می‌شوند.
              </li>
              <li>
                <strong className="text-[#383e42]">صفحات محصول پویا</strong> — هر محصول یک
                صفحه در <code className="bg-gray-100 px-1">/products/[slug]</code> دارد. slug
                از JSON محصول می‌آید. صفحه شامل عنوان، توضیحات، تصویر، جدول مشخصات (از CSV)،
                لینک دانلود PDF و محصولات مرتبط است.
              </li>
              <li>
                <strong className="text-[#383e42]">مسیر کلیک‌پذیر (نوار آدرس)</strong> — در صفحه محصول،
                مسیر «خانه / محصولات / دسته‌بندی / نام محصول» به صورت ناوبری است و هر بخش قابل کلیک است:
                «خانه» → <code className="bg-gray-100 px-1">/</code>، «محصولات» → <code className="bg-gray-100 px-1">/products</code>،
                نام دسته‌بندی → <code className="bg-gray-100 px-1">/products?category=ID</code>. نام محصول فعلی فقط متن است.
              </li>
              <li>
                <strong className="text-[#383e42]">مشخصات از CSV</strong> — اگر محصول فیلد{" "}
                <code className="bg-gray-100 px-1">specCsvFile</code> داشته باشد (یا به طور
                پیش‌فرض <code className="bg-gray-100 px-1">slug.csv</code>)، برنامه فایل را در{" "}
                <code className="bg-gray-100 px-1">public/specs/</code> می‌خواند و جدول
                کلید/مقدار نمایش می‌دهد. CSV می‌تواند با کاما، سمیکالن یا تب باشد؛ یا خطوط
                key: value.
              </li>
              <li>
                <strong className="text-[#383e42]">PDF محصول</strong> — اگر محصول فیلد{" "}
                <code className="bg-gray-100 px-1">pdfFile</code> داشته باشد، دکمه «دانلود
                کاتالوگ» به <code className="bg-gray-100 px-1">/specs/نام‌فایل</code> لینک
                می‌شود. PDFها را در <code className="bg-gray-100 px-1">public/specs/</code> قرار
                دهید.
              </li>
              <li>
                <strong className="text-[#383e42]">اسکریپت PDF به CSV</strong> — اسکریپت دستی{" "}
                <code className="bg-gray-100 px-1">scripts/convert-spec-pdf.ts</code> یک PDF
                می‌خواند و یک CSV (کلید/مقدار) می‌نویسد. اجرا:{" "}
                <code className="bg-gray-100 px-1">pnpm tsx scripts/convert-spec-pdf.ts input.pdf output.csv</code>.
                طوری طراحی شده که بعداً بتوان مرحله AI برای استخراج بهتر جدول اضافه کرد.
              </li>
              <li>
                <strong className="text-[#383e42]">فونت فارسی</strong> — وزیرمتن (گوگل فونت) در{" "}
                <code className="bg-gray-100 px-1">app/layout.tsx</code> لود و روی کل سایت
                اعمال شده است.
              </li>
              <li>
                <strong className="text-[#383e42]">لیست محصولات</strong> — صفحه /products همه
                محصولات را با فیلتر اختیاری دسته‌بندی (سمت کلاینت) نشان می‌دهد. هر آیتم به{" "}
                <code className="bg-gray-100 px-1">/products/[slug]</code> لینک دارد.
              </li>
              <li>
                <strong className="text-[#383e42]">صفحه اصلی</strong> — هیرو، محصول ویژه (از
                داده)، دسته‌بندی محصولات (از JSON محتوا)، صنایع، گواهینامه‌ها، درباره ما،
                تماس. دسته‌بندی‌ها و محصول ویژه به /products و صفحات محصول لینک دارند.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-[#383e42] mt-8 mb-3">
              نحوه کار با سیستم
            </h3>
            <ul className="list-disc list-inside text-[#6d6b64] space-y-2 mb-4">
              <li>
                <strong className="text-[#383e42]">افزودن/ویرایش محصول</strong> — از Pages CMS
                استفاده کنید (اتصال مخزن و ویرایش از طریق UI) یا فایل‌های JSON را در{" "}
                <code className="bg-gray-100 px-1">content/products/</code> اضافه یا ویرایش
                کنید. هر فایل یک محصول است؛ slug از فیلد <code className="bg-gray-100 px-1">slug</code> در JSON
                خوانده می‌شود. الزامی: id، slug، categoryId، nameFa. اختیاری: name،
                description، descriptionFa، image، pdfFile، specCsvFile، inStock.
              </li>
              <li>
                <strong className="text-[#383e42]">دسته‌بندی‌ها</strong> — JSON را در{" "}
                <code className="bg-gray-100 px-1">content/product-categories/</code> ویرایش یا
                اضافه کنید. فیلدها: id (عدد)، title، titleFa، image.
              </li>
              <li>
                <strong className="text-[#383e42]">جدول مشخصات</strong> — یک CSV در{" "}
                <code className="bg-gray-100 px-1">public/specs/</code> با سطرهای کلید/مقدار
                اضافه کنید (یا از اسکریپت PDF برای ساخت استفاده کنید). در JSON محصول{" "}
                <code className="bg-gray-100 px-1">specCsvFile</code> را به نام فایل CSV تنظیم
                کنید.
              </li>
              <li>
                <strong className="text-[#383e42]">کاتالوگ PDF</strong> — PDF را در{" "}
                <code className="bg-gray-100 px-1">public/specs/</code> قرار دهید و در JSON
                محصول فیلد <code className="bg-gray-100 px-1">pdfFile</code> را به نام فایل
                تنظیم کنید.
              </li>
              <li>
                <strong className="text-[#383e42]">پیکربندی</strong> — Pages CMS از یک فایل پیکربندی{" "}
                <code className="bg-gray-100 px-1">.pages.yml</code> در ریشه مخزن استفاده می‌کند. پوشه‌های رسانه (تصاویر، مشخصات)، مجموعه‌های محتوا (محصولات، دسته‌بندی‌ها)، طرح فیلدها و نمای لیست در آن تعریف می‌شوند. <code className="bg-gray-100 px-1">README.md</code> و{" "}
                <a href="https://pagescms.org/docs/configuration/" target="_blank" rel="noopener noreferrer" className="text-[#b89139] hover:underline">مستندات پیکربندی Pages CMS</a> را ببینید.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-[#383e42] mt-8 mb-3">
              امکانات آینده / پیشنهادی
            </h3>
            <ul className="list-disc list-inside text-[#6d6b64] space-y-2 mb-4">
              <li>استفاده از AI در تبدیل PDF به CSV برای استخراج بهتر جداول از کاتالوگ.</li>
              <li>چندزبانگی (مثلاً EN/FA) با لوکال در URL یا محتوا.</li>
              <li>جستجو در محصولات و دسته‌بندی‌ها.</li>
              <li>آپلود تصویر از طریق Pages CMS یا ذخیره‌سازی جدا و لینک در JSON.</li>
              <li>منطق محصولات مرتبط (مثلاً با تگ یا دسته) قابل تنظیم برای هر محصول.</li>
              <li>PDF راهنمای نصب یا گواهینامه اختیاری برای هر محصول.</li>
              <li>آنالیتیکس یا ارسال فرم (مثلاً تماس) به بک‌اند یا سرویس.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
