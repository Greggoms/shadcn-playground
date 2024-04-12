"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import Particles from "@tsparticles/react";
import { type Container } from "@tsparticles/engine";
import { Pause, Play } from "lucide-react";

import { useParticleStore } from "@/store";
import { fireworksParticles } from "@/lib/configs/particles";
import { cn } from "@/lib/utils/shadcn-utils";
import { Button } from "@/components/ui/button";

type FireworksParticlesProps = {
  className: string;
};

export default function FireworksParticles({
  className,
}: FireworksParticlesProps) {
  const containerRef = useRef<Container | undefined>();
  const isInitialized = useParticleStore((state) => state.isInitialized);
  const [isPlaying, setIsPlaying] = useState<boolean | undefined>();

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      if (container) {
        containerRef.current = container;
        if (typeof isPlaying === "undefined") {
          setIsPlaying(container.actualOptions.autoPlay);
        }
      }
    },
    [isPlaying]
  );

  /**
   * Memoizing the <Particles /> prevents the canvas from re-rendering
   * upon state updates!
   * The dependency array expects the `particlesLoaded` function to be provided,
   * but it will prevent the desired outcome if you do provide it. This is
   * why I added the eslint-disable-next-line rule.
   */
  const memoizedParticles = useMemo(() => {
    return (
      <Particles
        id="tsparticles-fireworks"
        particlesLoaded={particlesLoaded}
        options={fireworksParticles}
        className={cn("", className)}
      />
    );
    // eslint-disable-next-line
  }, []);

  const handlePauseAnimation = () => {
    containerRef.current?.pause();
    setIsPlaying(false);
  };
  const handlePlayAnimation = () => {
    containerRef.current?.play();
    setIsPlaying(true);
  };

  if (isInitialized) {
    return (
      <>
        {memoizedParticles}

        <div className="z-20 col-start-1 row-start-1 flex items-center gap-x-1 self-end justify-self-end">
          {isPlaying ? (
            <Button
              variant="outline"
              size="icon"
              onClick={handlePauseAnimation}
            >
              <Pause />
            </Button>
          ) : (
            <Button variant="outline" size="icon" onClick={handlePlayAnimation}>
              <Play />
            </Button>
          )}
        </div>
      </>
    );
  }

  return <div className={className} />;
}
