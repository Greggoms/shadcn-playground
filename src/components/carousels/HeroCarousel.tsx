"use client";

import Image from "next/image";
import Particles from "@tsparticles/react";

import FireworkParticles from "./assets/FireworksParticles";
import { starParticles } from "@/lib/configs/particles";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HeroCarousel() {
  return (
    <Carousel className="flex flex-col">
      <CarouselContent className="h-[50vh]">
        <CarouselItem className="relative grid">
          <FireworkParticles className="absolute bottom-0 left-0 right-0 top-0 z-0 col-start-1 row-start-1" />
          <div className="z-10 col-start-1 row-start-1 flex flex-col items-center gap-4 text-center place-content-center h-full">
            <h2 className="text-2xl md:text-6xl">Celebrate Always</h2>
            <p className="max-w-md">
              Sit hic facilis ut voluptatum eos quis ab quidem. Vel, fugiat.
            </p>
          </div>
        </CarouselItem>
        <CarouselItem className="relative grid">
          {/* Needed to do some custom stuff to make this canvas appear on the second slide.
              The example code does not work inside the carousel by default.
              https://github.com/tsparticles/react?tab=readme-ov-file#typescript-support---object
          */}
          <Particles
            id="tsparticles-stars"
            // particlesLoaded={particlesLoaded}
            options={starParticles}
            className="col-start-1 row-start-1 absolute top-0 right-0 bottom-0 left-0"
          />
          <div className="z-10 col-start-1 row-start-1 flex flex-col items-center gap-4 text-center place-content-center h-full">
            <h2 className="text-2xl md:text-6xl">Shoot for the Stars</h2>
            <p className="max-w-md">
              Laudantium aliquam dolorem porro, incidunt magnam repudiandae
              ullam modi nemo!
            </p>
            <Button className="whitespace-normal">Learn More</Button>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-5 md:p-10 h-full flex flex-col-reverse md:flex-row items-center gap-5 justify-around place-content-center max-w-6xl mx-auto">
            <div className="space-y-5">
              <h2 className="text-2xl md:text-6xl">Enticing Title</h2>
              <p className="max-w-md">
                Ullam illum, iusto modi nesciunt doloremque dicta, totam
                doloribus qui suscipit veritatis repudiandae earum expedita
                voluptate magnam similique deserunt sit nulla incidunt.
              </p>
              <Button className="whitespace-normal">Get Started</Button>
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
        </CarouselItem>
      </CarouselContent>
      <div className="border-y border-accent border-t-accent/20">
        <div className="container max-w-2xl flex items-center gap-5 justify-between">
          <div className="flex gap-x-5 items-center py-3 self-center">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
          <CarouselDots />
        </div>
      </div>
    </Carousel>
  );
}
