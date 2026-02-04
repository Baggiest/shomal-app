"use client";

import { useState } from "react";
import { Navbar } from "../components/Navbar";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-[#383e42] mb-8 text-center">تماس با ما</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#383e42] mb-6">فرم تماس</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#383e42] mb-2">
                    نام و نام خانوادگی
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 text-right focus:outline-none focus:ring-2 focus:ring-[#b89139]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#383e42] mb-2">
                    ایمیل
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 text-right focus:outline-none focus:ring-2 focus:ring-[#b89139]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#383e42] mb-2">
                    شماره تماس
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-3 text-right focus:outline-none focus:ring-2 focus:ring-[#b89139]"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#383e42] mb-2">
                    موضوع
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 text-right focus:outline-none focus:ring-2 focus:ring-[#b89139]"
                  >
                    <option value="">انتخاب موضوع</option>
                    <option value="product-inquiry">استعلام محصول</option>
                    <option value="technical-support">پشتیبانی فنی</option>
                    <option value="sales">فروش</option>
                    <option value="partnership">همکاری</option>
                    <option value="other">سایر</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#383e42] mb-2">
                    پیام
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full border border-gray-300 rounded-lg p-3 text-right focus:outline-none focus:ring-2 focus:ring-[#b89139]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary px-8 py-3 rounded-lg font-medium w-full"
                >
                  ارسال پیام
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-[#b89139]">کارخانه</h3>
                <div className="space-y-3 text-[#383e42]">
                  <div className="flex items-center gap-3">
                    <img src="/images/icon-location.png" alt="" className="w-5 h-5" />
                    <span>استان مازندران – سلمانشهر، شهرک صنعتی سلمانشهر خیابان C2</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/images/icon-phone.png" alt="" className="w-5 h-5" />
                    <span dir="ltr">01154663410 - 01154663411</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/images/icon-fax.png" alt="" className="w-5 h-5" />
                    <span dir="ltr">01154663420 - 01154663413</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-[#b89139]">صدای مشتری</h3>
                <div className="space-y-3 text-[#383e42]">
                  <div className="flex items-center gap-3">
                    <img src="/images/icon-phone-alt.png" alt="" className="w-5 h-5" />
                    <span dir="ltr">01144468832</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/images/icon-phone-alt.png" alt="" className="w-5 h-5" />
                    <span dir="ltr">09031117140</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/images/icon-email.png" alt="" className="w-5 h-5" />
                    <span>voc@shomal.com</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-[#b89139]">دفتر فروش تهران</h3>
                <div className="space-y-3 text-[#383e42]">
                  <div className="flex items-center gap-3">
                    <img src="/images/icon-location.png" alt="" className="w-5 h-5" />
                    <span>تهران - خیابان پاسداران – بهارستان دوم - پلاک 5</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/images/icon-phone.png" alt="" className="w-5 h-5" />
                    <span dir="ltr">021-22541212</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/images/icon-email.png" alt="" className="w-5 h-5" />
                    <span>shomal@shomal.com</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-[#b89139]">دفتر فروش کارخانه</h3>
                <div className="space-y-3 text-[#383e42]">
                  <div className="flex items-center gap-3">
                    <img src="/images/icon-phone.png" alt="" className="w-5 h-5" />
                    <span dir="ltr">09426001061</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/images/icon-location.png" alt="" className="w-5 h-5" />
                    <span>استان مازندران – سلمانشهر، شهرک صنعتی سلمانشهر خیابان C2</span>
                  </div>
                </div>
              </div>

              <div className="map-container">
                <a href="https://maps.app.goo.gl/cPY4Vvo2sLm2NKyb6" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/images/map.jpeg"
                    alt="Factory Location Map"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

