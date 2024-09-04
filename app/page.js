import Image from "next/image";
import Hero from "./_components/Hero";
import ProductSection from "./_components/ProductSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div></div>}>
      <div>
        <Hero />
        <ProductSection />
      </div>
    </Suspense>
  );
}
