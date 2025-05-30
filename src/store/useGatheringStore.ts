import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { GatheringDTO } from '@/types/gathering/gathering.type';

interface State {
  selectedGathering: any;
}

interface Actions {
  setSelectedGathering: (selectedGathering: GatheringDTO['get']) => void;
}

export const useGatheringStore = create<State & Actions>()(
  persist(
    (set) => ({
      selectedGathering: null,
      setSelectedGathering: (gathering) =>
        set({ selectedGathering: gathering }),
    }),
    { name: 'selected-gathering' }
  )
);
