import HeroCarousel from "@/components/carousels/HeroCarousel";
import AutoScrollCarousel from "@/components/carousels/AutoScrollCarousel";

export default function CarouselPage() {
  return (
    <main className="flex flex-col gap-y-20">
      <HeroCarousel />
      <AutoScrollCarousel />
    </main>
  );
}
