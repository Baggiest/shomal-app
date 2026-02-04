# Shomal Landing (ماشین سازی شمال پیروز)

Next.js landing site for Shomal with Git-backed content, dynamic product pages, and optional spec PDFs/CSVs.

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). For the full system guide in the app, go to **راهنما** (Guide) in the navbar or [/guide](http://localhost:3000/guide).

---

## System Overview (English)

### What This System Is

This is a Next.js landing site with content stored as JSON in the repo. Non-engineers can edit products and categories via **Pages CMS** (Git-backed) or by editing JSON. The site uses the **Vazirmatn** Persian font, **dynamic product pages** at `/products/[slug]`, optional **spec tables** from CSV files, and **downloadable PDFs** per product.

### Current Features

| Feature | Description |
|--------|-------------|
| **Repo-backed content** | Products: `content/products/*.json`. Categories: `content/product-categories/*.json`. |
| **Pages CMS** | Configured in `.pages.yml` (see [Pages CMS configuration](https://pagescms.org/docs/configuration/)). Use [Pages CMS](https://pagescms.org) with GitHub to edit content; changes commit to the repo. |
| **Dynamic product pages** | Route: `/products/[slug]`. Each product has a page with title, description, image, specs table (from CSV), PDF download, related products. |
| **Clickable breadcrumb** | On the product page the address bar is clickable: "خانه" → `/`, "محصولات" → `/products`, category name → `/products?category=ID`. Current product name is text only. |
| **Specs from CSV** | Product can set `specCsvFile` (or default `slug.csv`). File lives in `public/specs/`. Supports comma, semicolon, tab, or `key: value` lines. |
| **Product PDFs** | Product can set `pdfFile`. "دانلود کاتالوگ" links to `/specs/{filename}`. Put PDFs in `public/specs/`. |
| **PDF → CSV script** | Manual: `pnpm tsx scripts/convert-spec-pdf.ts input.pdf output.csv`. Extracts text and writes key/value CSV. Can be extended with AI later. |
| **Persian font** | Vazirmatn loaded in `app/layout.tsx` and applied site-wide. |
| **Products listing** | `/products` lists all products with optional category filter. Each item links to `/products/[slug]`. |
| **Homepage** | Hero, featured product (from data), product categories, industries, certifications, about, contact. Links to `/products` and product pages. |

### How to Work With It

- **Add/edit products**: Use Pages CMS or add/edit JSON in `content/products/`. One file per product. Required: `id`, `slug`, `categoryId`, `nameFa`. Optional: `name`, `description`, `descriptionFa`, `image`, `pdfFile`, `specCsvFile`, `inStock`.
- **Categories**: Add/edit JSON in `content/product-categories/`. Fields: `id` (number), `title`, `titleFa`, `image`.
- **Specs table**: Add a CSV in `public/specs/` (key/value rows) and set `specCsvFile` in the product JSON. Or run the PDF script to generate one.
- **PDF catalog**: Put the PDF in `public/specs/` and set `pdfFile` in the product JSON to the filename.

### Future / Possible Features

- AI-assisted PDF → CSV (e.g. table extraction from spec PDFs).
- Multi-language (EN/FA) with locale in URL or content.
- Search over products and categories.
- Image uploads via Pages CMS or external media, linked from JSON.
- Configurable related products (e.g. by tag or category).
- Optional “installation guide” or “certificates” PDF per product.
- Analytics or form submissions (e.g. contact) to a backend or service.

---

## خلاصه سیستم (فارسی)

### این سیستم چیست

سایت لندینگ Next.js با محتوای ذخیره‌شده به صورت JSON در مخزن. افراد غیرفنی می‌توانند محصولات و دسته‌بندی‌ها را با **Pages CMS** (متصل به گیت) یا با ویرایش JSON تغییر دهند. سایت از فونت فارسی **وزیرمتن**، **صفحات محصول پویا** در `/products/[slug]`، **جدول مشخصات** از CSV و **دانلود PDF** برای هر محصول پشتیبانی می‌کند.

### امکانات فعلی

| امکانات | توضیح |
|---------|--------|
| **محتوای مبتنی بر مخزن** | محصولات: `content/products/*.json`. دسته‌بندی‌ها: `content/product-categories/*.json`. |
| **Pages CMS** | پیکربندی در `.pages.yml` ([مستندات پیکربندی](https://pagescms.org/docs/configuration/)). از [Pages CMS](https://pagescms.org) با گیت‌هاب برای ویرایش محتوا استفاده کنید. |
| **صفحات محصول پویا** | مسیر: `/products/[slug]`. هر محصول صفحه‌ای با عنوان، توضیحات، تصویر، جدول مشخصات، دانلود PDF و محصولات مرتبط دارد. |
| **مسیر کلیک‌پذیر** | در صفحه محصول نوار آدرس کلیک‌پذیر است: «خانه» → `/`, «محصولات» → `/products`, نام دسته‌بندی → `/products?category=ID`. نام محصول فعلی فقط متن است. |
| **مشخصات از CSV** | محصول می‌تواند `specCsvFile` داشته باشد (یا پیش‌فرض `slug.csv`). فایل در `public/specs/`. پشتیبانی از کاما، سمیکالن، تب یا خطوط `key: value`. |
| **PDF محصول** | محصول می‌تواند `pdfFile` داشته باشد. دکمه «دانلود کاتالوگ» به `/specs/نام‌فایل` لینک می‌شود. PDFها در `public/specs/`. |
| **اسکریپت PDF به CSV** | دستی: `pnpm tsx scripts/convert-spec-pdf.ts input.pdf output.csv`. متن را استخراج و CSV کلید/مقدار می‌نویسد. بعداً می‌توان مرحله AI اضافه کرد. |
| **فونت فارسی** | وزیرمتن در `app/layout.tsx` لود و در کل سایت اعمال شده است. |
| **لیست محصولات** | `/products` همه محصولات را با فیلتر اختیاری دسته‌بندی نشان می‌دهد. هر آیتم به `/products/[slug]` لینک دارد. |
| **صفحه اصلی** | هیرو، محصول ویژه، دسته‌بندی محصولات، صنایع، گواهینامه‌ها، درباره ما، تماس. لینک به `/products` و صفحات محصول. |

### نحوه کار با سیستم

- **افزودن/ویرایش محصول**: از Pages CMS استفاده کنید یا JSON را در `content/products/` اضافه/ویرایش کنید. هر فایل یک محصول. الزامی: `id`, `slug`, `categoryId`, `nameFa`. اختیاری: `name`, `description`, `descriptionFa`, `image`, `pdfFile`, `specCsvFile`, `inStock`.
- **دسته‌بندی‌ها**: JSON در `content/product-categories/`. فیلدها: `id` (عدد), `title`, `titleFa`, `image`.
- **جدول مشخصات**: یک CSV در `public/specs/` (سطرهای کلید/مقدار) اضافه کنید و در JSON محصول `specCsvFile` را تنظیم کنید. یا اسکریپت PDF را اجرا کنید.
- **کاتالوگ PDF**: PDF را در `public/specs/` بگذارید و در JSON محصول `pdfFile` را به نام فایل تنظیم کنید.

### امکانات آینده / پیشنهادی

- استفاده از AI در تبدیل PDF به CSV (استخراج جدول از کاتالوگ).
- چندزبانگی (EN/FA) با لوکال در URL یا محتوا.
- جستجو در محصولات و دسته‌بندی‌ها.
- آپلود تصویر از طریق Pages CMS یا رسانه خارجی و لینک در JSON.
- محصولات مرتبط قابل تنظیم (مثلاً با تگ یا دسته).
- PDF راهنمای نصب یا گواهینامه اختیاری برای هر محصول.
- آنالیتیکس یا ارسال فرم (تماس) به بک‌اند یا سرویس.

---

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server (http://0.0.0.0:3000). |
| `pnpm build` | Production build. |
| `pnpm start` | Run production server. |
| `pnpm lint` | Type-check and Next lint. |
| `pnpm tsx scripts/convert-spec-pdf.ts <input.pdf> <output.csv>` | Convert a spec PDF to key/value CSV. |

---

## Project Structure (relevant parts)

```
content/
  product-categories/   # JSON per category (id, title, titleFa, image)
  products/             # JSON per product (id, slug, categoryId, name, nameFa, …)
app/
  products/
    [slug]/page.tsx     # Dynamic product page (breadcrumb, specs, PDF, related)
    page.tsx            # Products listing with category filter
    ProductsClient.tsx   # Client-side filter UI
  guide/page.tsx        # Full system guide (EN + FA)
  data/
    products.ts         # Reads content/products/*.json
    productCategories.ts # Reads content/product-categories/*.json
  lib/
    specs.ts            # Parses CSV from public/specs/ for spec table
public/
  specs/                # PDFs and CSVs (referenced by pdfFile / specCsvFile)
.pages.yml              # Pages CMS config (media, content collections, fields) — https://pagescms.org/docs/configuration/
scripts/
  convert-spec-pdf.ts   # PDF → CSV (manual, extendable with AI)
```

---

## Documentation

| Item | Description |
|------|-------------|
| **README.md** | This file: overview, features, how to work with the system, scripts, structure. |
| **Guide page** | In-app guide at [/guide](/guide): full system description in English and Persian, current features, how-to, future features. Linked as "راهنما" in the navbar. |
| **.pages.yml** | Pages CMS configuration in the repo root: media folders (images, specs), content collections (products, product-categories), field schemas, list views. See [Pages CMS configuration docs](https://pagescms.org/docs/configuration/). |

---

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Pages CMS Docs](https://pagescms.org/docs/)
