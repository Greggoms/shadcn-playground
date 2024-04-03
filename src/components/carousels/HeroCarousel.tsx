"use client";

import useEmblaCarousel from "embla-carousel-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import CarouselStarParticles from "./assets/CarouselStarParticles";

export default function HeroCarousel() {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla overflow-hidden bg-accent" ref={emblaRef}>
      <div className="embla__container flex">
        <div className="embla__slide flex-shrink-0 flex-grow-0 basis-full">
          <div className="p-5 md:p-10 flex flex-col-reverse md:flex-row items-center gap-5 justify-around place-content-center max-w-6xl mx-auto">
            <div className="space-y-5">
              <h2 className="text-2xl md:text-6xl">Enticing Title</h2>
              <p className="max-w-md">
                Ullam illum, iusto modi nesciunt doloremque dicta, totam
                doloribus qui suscipit veritatis repudiandae earum expedita
                voluptate magnam similique deserunt sit nulla incidunt.
              </p>
              <Button>Get Started</Button>
            </div>
            <div className="relative w-full min-w-[30px] max-w-[50px] md:max-w-[150px] h-[30px] md:h-[150px]">
              <Image
                src="/images/party_popper.png"
                alt="Party Popper"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-auto h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="embla__slide flex-shrink-0 flex-grow-0 basis-full bg-zinc-900">
          <CarouselStarParticles />
          <div className="flex flex-col items-center gap-4 text-center place-content-center h-full">
            <h2 className="text-2xl md:text-6xl">Fly High</h2>
            <p className="max-w-md">
              Laudantium aliquam dolorem porro, incidunt magnam repudiandae
              ullam modi nemo!
            </p>
            <Button>Learn More</Button>
          </div>
        </div>

        <div className="embla__slide flex-shrink-0 flex-grow-0 basis-full">
          Slide 3
        </div>
      </div>
    </div>
  );
}
