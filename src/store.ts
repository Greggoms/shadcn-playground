import { create } from "zustand";

interface ParticleState {
  isInitialized: boolean;
  setIsInitialized: (value: boolean) => void;
}

export const useParticleStore = create<ParticleState>()((set) => ({
  isInitialized: false,
  setIsInitialized: (value) => set((state) => ({ isInitialized: value })),
}));
