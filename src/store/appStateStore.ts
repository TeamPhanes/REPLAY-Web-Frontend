import { create } from 'zustand';

type AppState = {
  isAppHydrated: boolean;
  setAppHydrated: () => void;
};

export const appStateStore = create<AppState>((set) => ({
  isAppHydrated: false,
  setAppHydrated: () => set({ isAppHydrated: true }),
}));
