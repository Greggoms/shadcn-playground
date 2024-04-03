import Image from "next/image";

import CarouselStarParticles from "./assets/CarouselStarParticles";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HeroCarouselShad() {
  return (
    <Carousel className="flex flex-col">
      <CarouselContent>
        <CarouselItem>
          <div className="p-5 md:p-10 flex flex-col-reverse md:flex-row items-center gap-5 justify-around place-content-center max-w-6xl mx-auto">
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
        <CarouselItem className="relative">
          {/* Needed to do some custom stuff to make this canvas appear on the second slide.
              The example code does not work inside the carousel by default.
              https://github.com/tsparticles/react?tab=readme-ov-file#typescript-support---object
          */}
          <CarouselStarParticles className="absolute top-0 right-0 bottom-0 left-0" />
          <div className="flex flex-col items-center gap-4 text-center place-content-center h-full">
            <h2 className="text-2xl md:text-6xl">Fly High</h2>
            <p className="max-w-md">
              Laudantium aliquam dolorem porro, incidunt magnam repudiandae
              ullam modi nemo!
            </p>
            <Button className="whitespace-normal">Learn More</Button>
          </div>
        </CarouselItem>
        <CarouselItem>Slide 3</CarouselItem>
      </CarouselContent>
      <div className="flex gap-x-5 items-center py-3 self-center">
        <CarouselPrevious className="static translate-y-0" />
        <CarouselNext className="static translate-y-0" />
      </div>
    </Carousel>
  );
}
