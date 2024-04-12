"use client";

import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function AutoScrollCarousel() {
  return (
    <Carousel
      opts={{ loop: true, dragFree: true }}
      plugins={[
        AutoScroll({ speed: 0.5, stopOnInteraction: false, startDelay: 0 }),
      ]}
    >
      <CarouselContent>
        <CarouselItem className="basis-1/2 sm:basis-1/4 lg:basis-1/6">
          <Image
            src="/images/browsers/brave.svg"
            alt="Brave"
            width={150}
            height={150}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/2 sm:basis-1/4 lg:basis-1/6">
          <Image
            src="/images/browsers/chrome.svg"
            alt="Chrome"
            width={150}
            height={150}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/2 sm:basis-1/4 lg:basis-1/6">
          <Image
            src="/images/browsers/deno.svg"
            alt="Deno"
            width={150}
            height={150}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/2 sm:basis-1/4 lg:basis-1/6">
          <Image
            src="/images/browsers/edge.svg"
            alt="Edge"
            width={150}
            height={150}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/2 sm:basis-1/4 lg:basis-1/6">
          <Image
            src="/images/browsers/firefox.svg"
            alt="Firefox"
            width={150}
            height={150}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/2 sm:basis-1/4 lg:basis-1/6">
          <Image
            src="/images/browsers/opera.svg"
            alt="Opera"
            width={150}
            height={150}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/2 sm:basis-1/4 lg:basis-1/6">
          <Image
            src="/images/browsers/safari.svg"
            alt="Safari"
            width={150}
            height={150}
          />
        </CarouselItem>
        <CarouselItem className="basis-1/2 sm:basis-1/4 lg:basis-1/6">
          <Image
            src="/images/browsers/webkit.svg"
            alt="Webkit"
            width={150}
            height={150}
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
