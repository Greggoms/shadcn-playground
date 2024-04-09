"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { carouselFireworksParticles } from "@/lib/configs/particles";
import { Button } from "../ui/button";
import { Pause, Play } from "lucide-react";
import { loadFull } from "tsparticles";
import { useParticleStore } from "@/store";

/**
 * How to capture the particle container ref:
 * @link https://github.com/tsparticles/react/blob/main/apps/react/src/App.js
 */
export default function FireworkParticles() {
  // const [isPlaying, setIsPlaying] = useState(true);
  // const particlesRef = useRef<Container | undefined>();

  // useEffect(() => {
  //   if (!particlesRef.current) {
  //     console.log("NO REF");
  //   } else {
  //     console.log("We have a ref!");
  //   }
  // }, []);

  // const particlesLoaded = async (container?: Container): Promise<void> => {
  //   if (container) {
  //     particlesRef.current = container;
  //     // setIsPlaying(container.actualOptions.autoPlay);
  //   }
  // };
  const isLoaded = useParticleStore((state) => state.isLoaded);
  const setIsLoaded = useParticleStore((state) => state.setIsLoaded);
  const particlesRef = useRef<Container | undefined>();
  // [init, setInit] = useState(false);

  // useEffect(() => {
  //   if (init) {
  //     return;
  //   }

  //   initParticlesEngine(async (engine) => {
  //     await loadFull(engine);
  //   }).then(() => {
  //     setInit(true);
  //   });
  // }, [init]);
  useEffect(() => {
    console.log("running effect");
    if (isLoaded) {
      return;
    }

    setIsLoaded(false);
  }, [isLoaded, setIsLoaded]);

  console.log({ isLoaded });

  const particlesLoaded = useCallback(
    async (container: Container | undefined): Promise<void> => {
      particlesRef.current = container;

      // (window as any).particlesContainer = container;
    },
    [particlesRef]
  );

  const handlePauseParticleAnimation = () => {
    if (particlesRef.current) {
      console.log("attempting to pause");
      particlesRef.current.pause();
    } else {
      console.log("no particle container");
    }
  };
  const handlePlayParticleAnimation = () => {
    if (particlesRef.current) {
      console.log("attempting to play");
      particlesRef.current.play();
    } else {
      console.log("no particle container");
    }
  };

  const handleToggleParticleAnimation = () => {
    if (particlesRef.current) {
      if (particlesRef.current.animationStatus) {
        console.log("attempting to pause");
        particlesRef.current.pause();
        // setIsPlaying(false);
      } else {
        console.log("attempting to resume");
        particlesRef.current.play();
        // setIsPlaying(true);
      }
    } else {
      console.log("no particle container");
    }
  };

  return (
    <div>
      <Particles
        id="tsparticles-fireworks"
        particlesLoaded={particlesLoaded}
        options={carouselFireworksParticles}
        className="absolute top-0 right-0 bottom-0 left-0"
      />
      <div className="z-10 absolute bottom-0 right-0 flex flex-col">
        <Button
          type="button"
          onClick={handleToggleParticleAnimation}
          // onClick={handlePauseParticleAnimation}
          // onClick={() => setIsLoaded(true)}
          // onClick={() => {}}
          // className="z-10 absolute bottom-0 right-0"
          variant="outline"
          size="icon"
          title="Toggle Particle Animation"
        >
          {/* {isPlaying ? <Play /> : <Pause />} */}
          {/* <Play /> {" | "} <Pause /> */}
          <Pause />
        </Button>
        <Button
          type="button"
          // onClick={handleToggleParticleAnimation}
          onClick={handlePlayParticleAnimation}
          // onClick={() => setIsLoaded(true)}
          // onClick={() => {}}
          // className="z-10 absolute bottom-0 right-0"
          variant="outline"
          size="icon"
          title="Play Particle Animation"
        >
          {/* {isPlaying ? <Play /> : <Pause />} */}
          {/* <Play /> {" | "} <Pause /> */}
          <Play />
        </Button>
        {/* {isLoaded ? "LOADED" : "NOOOOT LOADED"} */}
      </div>
    </div>
  );
}
