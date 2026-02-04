"use client";

import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center gap-2 text-white hover:text-[#b89139] transition-colors md:hidden"
          >
            <span className="text-sm">فهرست</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="flex items-center">
            <a href="/">
              <img
                src="/images/logo.png"
                alt="S.E.M.C Logo"
                className="h-16 w-16 fill-white"
              />
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-white hover:text-[#b89139] transition-colors">خانه</a>
            <a href="/products" className="text-white hover:text-[#b89139] transition-colors">محصولات</a>
            <a href="/about" className="text-white hover:text-[#b89139] transition-colors">درباره ما</a>
            <a href="/sales-representatives" className="text-white hover:text-[#b89139] transition-colors">نمایندگان فروش</a>
            <a href="/contact" className="text-white hover:text-[#b89139] transition-colors">تماس با ما</a>
          </nav>

          <div className="flex items-center gap-2">
            <img
              src="/images/flag-persian.svg"
              alt="Persian"
              className="w-5 h-4"
            />
            <span className="text-white text-sm">فارسی</span>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="bg-white/95 backdrop-blur-sm shadow-lg">
          <nav className="container mx-auto px-4 py-6">
            <ul className="space-y-4">
              <li><a href="/" className="block text-[#383e42] hover:text-[#b89139]">خانه</a></li>
              <li><a href="/products" className="block text-[#383e42] hover:text-[#b89139]">محصولات</a></li>
              <li><a href="/about" className="block text-[#383e42] hover:text-[#b89139]">درباره ما</a></li>
              <li><a href="/sales-representatives" className="block text-[#383e42] hover:text-[#b89139]">نمایندگان فروش</a></li>
              <li><a href="/contact" className="block text-[#383e42] hover:text-[#b89139]">تماس با ما</a></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

