import AutoScrollCarousel from "@/components/carousels/AutoScrollCarousel";
import HeroCarousel from "@/components/carousels/HeroCarousel";
import HeroCarouselShad from "@/components/carousels/HeroCarouselShad";

export default function CarouselPage() {
  return (
    <main>
      {/* <HeroCarousel /> */}
      <HeroCarouselShad />
      <AutoScrollCarousel />
    </main>
  );
}
