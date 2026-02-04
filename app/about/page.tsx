"use client";

import { Navbar } from "../components/Navbar";
import { Certifications } from "../components/Certifications";
import { Industries } from "../components/Industries";
import { Contact } from "../components/Contact";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-24 pb-16">
        <section className="py-16 bg-[#383e42] text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-[#b89139] text-4xl font-bold text-center mb-8">درباره ما</h1>

            <div className="max-w-4xl mx-auto space-y-6 leading-relaxed">
              <p>
                شرکت ماشین سازی شمال پیروز در سال 1362 ( 1985 میلادی ) فعالیت خود را به عنوان طراح و تولید کننده پایه چراغ های روشنایی و سبزی
                کابل در استان مازندران آغاز نموده است.
              </p>
              
              <p>
                پس از یک دوره کاری و آشنایی بیشتر با نیاز صنایع داخلی این شرکت تمرکز خود را بر ساخت
                تجهیزات برقی ضد انفجار جهت استفاده در صنایع نفت ، گاز ، پالایش و پتروشیمی قرار داد در نتیجه از سال 1371 خورشیدی تمام تلاش
                مجموعه وقف پیاده سازی استانداردهای به روز شده بین المللی و اروپایی همچنین ارتقاء سطح کیفی محصولات شد.
              </p>

              <div className="mt-12 pt-8 border-t border-white/20">
                <h2 className="text-2xl font-bold mb-6 text-[#b89139]">ماموریت ما</h2>
                <p>
                  شرکت ماشین سازی شمال پیروز با بیش از سه دهه تجربه در زمینه طراحی و تولید تجهیزات برقی ضد انفجار، 
                  متعهد به ارائه محصولات با کیفیت بالا و مطابق با استانداردهای بین‌المللی است. ما با تمرکز بر نیازهای 
                  صنایع نفت، گاز، پتروشیمی و سایر صنایع حساس، در تلاش برای ارتقای سطح ایمنی و کارایی تجهیزات صنعتی هستیم.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <h2 className="text-2xl font-bold mb-6 text-[#b89139]">چشم‌انداز</h2>
                <p>
                  تبدیل شدن به یکی از پیشروترین تولیدکنندگان تجهیزات برقی ضد انفجار در منطقه خاورمیانه و 
                  دستیابی به جایگاه برتر در بازارهای بین‌المللی با تکیه بر کیفیت، نوآوری و رضایت مشتریان.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Industries />
        <Certifications />
        <Contact />
      </div>
    </div>
  );
}

