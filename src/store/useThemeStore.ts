import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { RoomDTO } from '@/types/room/room.types';

interface State {
  selectedTheme: any;
}

interface Actions {
  setSelectedTheme: (selectedTheme: RoomDTO['get']) => void;
}

export const useThemeStore = create<State & Actions>()(
  persist(
    (set) => ({
      selectedTheme: null,
      setSelectedTheme: (theme) => set({ selectedTheme: theme }),
    }),
    { name: 'selected-theme' }
  )
);
