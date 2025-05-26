import { create } from 'zustand';

interface State {
  largeDistrict: string;
  middleDistrict: string;
}

interface Actions {
  setLargeDistrict: (largeDistrict: string) => void;
  setMiddleDistrict: (middleDistrict: string) => void;
  clearDistrict: () => void;
}

export const useQueryStringStore = create<State & Actions>()((set) => ({
  largeDistrict: '시.도',
  middleDistrict: '시.군.구',
  setLargeDistrict: (largeDistrict) => set({ largeDistrict }),
  setMiddleDistrict: (middleDistrict) => set({ middleDistrict }),
  clearDistrict: () =>
    set({ largeDistrict: '시.도', middleDistrict: '시.군.구' }),
}));
