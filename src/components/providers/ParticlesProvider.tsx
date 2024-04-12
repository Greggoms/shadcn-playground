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
  const isInitialized = useParticleStore((state) => state.isInitialized);
  const setIsInitialized = useParticleStore((state) => state.setIsInitialized);

  // this should be run only once per application lifetime
  useEffect(() => {
    if (isInitialized) {
      return;
    }

    // console.log("Initializing Engine...");
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      // console.log("Engine Initialized!");
      setIsInitialized(true);
    });
  }, [isInitialized, setIsInitialized]);

  return children;
}
