"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

import { carouselStarParticles } from "./particles";
import { cn } from "@/lib/utils/shadcn-utils";

type CarouselStarParticlesProps = {
  className: string;
};

export default function CarouselStarParticles({
  className,
}: CarouselStarParticlesProps) {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {};

  if (init) {
    return (
      <Particles
        id="tsparticles-stars"
        particlesLoaded={particlesLoaded}
        options={carouselStarParticles}
        className={cn("", className)}
      />
    );
  }

  return <></>;
}
