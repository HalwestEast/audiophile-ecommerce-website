import Hero from "@/components/Hero/Hero";
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductsGrid from "@/components/ProductsGrid/ProductsGrid";
import BestGear from "@/components/BestGear/BestGear";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductCard />
      <ProductsGrid />
      <BestGear />
    </div>
  );
}
