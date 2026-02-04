"use client";

import { Navbar } from "../components/Navbar";
import { Contact } from "../components/Contact";

export default function SalesRepresentativesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#383e42] mb-12 text-center">نمایندگان فروش</h1>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-[#b89139] mb-6">نمایندگان داخلی</h2>
              <div className="bg-[#f7f7f7] rounded-lg p-6">
                <p className="text-[#383e42] leading-relaxed mb-4">
                  شرکت ماشین سازی شمال پیروز دارای شبکه گسترده‌ای از نمایندگان فروش در سراسر کشور است که 
                  آماده ارائه خدمات و محصولات با کیفیت به مشتریان محترم می‌باشند.
                </p>
                <p className="text-[#383e42] leading-relaxed">
                  برای دریافت اطلاعات تماس نمایندگان فروش در شهر خود، لطفاً با دفتر مرکزی فروش تماس حاصل فرمایید.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#b89139] mb-6">نمایندگان بین‌المللی</h2>
              <div className="bg-[#f7f7f7] rounded-lg p-6">
                <p className="text-[#383e42] leading-relaxed mb-4">
                  شرکت ماشین سازی شمال پیروز با داشتن نمایندگان فروش در کشورهای مختلف منطقه خاورمیانه و 
                  سایر نقاط جهان، آماده ارائه خدمات و محصولات خود به مشتریان بین‌المللی است.
                </p>
                <p className="text-[#383e42] leading-relaxed">
                  برای دریافت اطلاعات تماس نمایندگان فروش در کشور مورد نظر، لطفاً با دفتر مرکزی فروش تماس حاصل فرمایید.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#b89139] mb-6">شرکای تجاری</h2>
              <div className="bg-[#f7f7f7] rounded-lg p-6">
                <p className="text-[#383e42] leading-relaxed mb-4">
                  شرکت ماشین سازی شمال پیروز همواره در جستجوی شرکای تجاری معتبر و متعهد برای گسترش 
                  فعالیت‌های خود در بازارهای داخلی و بین‌المللی است.
                </p>
                <p className="text-[#383e42] leading-relaxed">
                  در صورت تمایل به همکاری با ما، لطفاً از طریق فرم تماس با ما یا ایمیل با ما در ارتباط باشید.
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-b from-[#dce9f5] to-[#f0f4f8] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-[#383e42] mb-4 text-center">
                تمایل به همکاری دارید؟
              </h2>
              <p className="text-center text-[#6d6b64] mb-6">
                اگر علاقه‌مند به همکاری با ما به عنوان نماینده فروش یا شریک تجاری هستید، 
                لطفاً با ما تماس بگیرید.
              </p>
              <div className="text-center">
                <a
                  href="/contact"
                  className="btn-primary px-8 py-3 rounded-lg font-medium inline-block"
                >
                  تماس با ما
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
}

