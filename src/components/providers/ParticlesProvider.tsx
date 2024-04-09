"use client";

import { useEffect } from "react";
import { loadFull } from "tsparticles";
import { initParticlesEngine } from "@tsparticles/react";

import { useParticleStore } from "@/store";

type ParticlesProviderProps = {
  children: React.ReactNode;
};

export default function ParticlesProvider({
  children,
}: ParticlesProviderProps) {
  const setIsLoaded = useParticleStore((state) => state.setIsLoaded);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setIsLoaded(true);
    });
  }, [setIsLoaded]);

  return children;
}
