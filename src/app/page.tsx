import { Header } from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CoreServices } from "@/components/CoreServices";
import { ProductsQuickEntry } from "@/components/ProductsQuickEntry";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-grow flex flex-col">
        <Hero />
        <WhyChooseUs />
        <CoreServices />
        <ProductsQuickEntry />
      </main>
      <Footer />
    </>
  );
}
