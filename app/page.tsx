"use client";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProductShowcase } from "./components/ProductShowcase";
import { ProductCategories } from "./components/ProductCategories";
import { Industries } from "./components/Industries";
import { Certifications } from "./components/Certifications";
import { Survey } from "./components/Survey";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <ProductCategories />
      <Industries />
      <Certifications />
      {/* <Survey /> */}
      <About />
      <Contact />
    </div>
  );
}
