export function Survey() {
  return (
    <section className="py-16 survey-section">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">نظرسنجی</h2>

        <div className="bg-[#b89139]/10 border border-[#b89139] rounded-lg p-4 mb-8 text-center">
          <p className="text-[#383e42]">این نظر سنجی به پایان رسیده است (آرا بیش از حد شده است)</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="space-y-6">
            <div className="border-b pb-4">
              <p className="text-[#383e42] mb-4 text-right">
                سرعت ،دقت و کیفیت ارائه اطلاعات فنی و مالی عاملین فروش را چگونه ارزیابی می کنید؟
              </p>
              <div className="flex justify-end gap-8">
                {["ضعیف", "متوسط", "خوب", "عالی"].map((option) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <span className="text-sm text-[#6d6b64]">{option}</span>
                    <input type="radio" name="q1" className="cursor-pointer" />
                  </label>
                ))}
              </div>
            </div>

            <div className="border-b pb-4">
              <p className="text-[#383e42] mb-4 text-right">
                سرعت تحویل تجهیزات و انجام تعهدات شرکت ماشین سازی شمال را چگونه ارزیابی می کنید؟
              </p>
              <div className="flex justify-end gap-8">
                {["ضعیف", "متوسط", "خوب", "عالی"].map((option) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <span className="text-sm text-[#6d6b64]">{option}</span>
                    <input type="radio" name="q2" className="cursor-pointer" />
                  </label>
                ))}
              </div>
            </div>

            <div className="border-b pb-4">
              <p className="text-[#383e42] mb-4 text-right">
                روند انجام بازرسی های فنی حین تولید و نهایی در سایت ماشین سازی شمال را چگونه ارزیابی می کنید؟
              </p>
              <div className="flex justify-end gap-8">
                {["ضعیف", "متوسط", "خوب", "عالی"].map((option) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <span className="text-sm text-[#6d6b64]">{option}</span>
                    <input type="radio" name="q3" className="cursor-pointer" />
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <p className="text-[#383e42] mb-4 text-right">
                علاقمند به تولید چه محصول جدیدی از ماشین سازی شمال هستید؟
              </p>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-3 text-right"
                placeholder=""
              />
            </div>

            <div>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg p-3 text-right"
                placeholder="Email"
              />
            </div>

            <div className="text-left">
              <button type="button" className="btn-primary px-8 py-3 rounded-lg font-medium">
                ثبت نظر
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

