import { create } from "zustand";

interface ParticleState {
  isLoaded: boolean;
  setIsLoaded: (value: boolean) => void;
}

export const useParticleStore = create<ParticleState>()((set) => ({
  isLoaded: false,
  setIsLoaded: (value) => set((state) => ({ isLoaded: value })),
}));
