import { create } from 'zustand';

interface State {
  largeDistrict: string;
  middleDistrict: string;
  genre: string;
}

interface Actions {
  setLargeDistrict: (largeDistrict: string) => void;
  setMiddleDistrict: (middleDistrict: string) => void;
  setGenre: (genre: string) => void;
  clearDistrict: () => void;
  clearGenre: () => void;
}

export const useQueryStringStore = create<State & Actions>()((set) => ({
  largeDistrict: '시.도',
  middleDistrict: '시.군.구',
  genre: '전체',
  setLargeDistrict: (largeDistrict) => set({ largeDistrict }),
  setMiddleDistrict: (middleDistrict) => set({ middleDistrict }),
  setGenre: (genre) => set({ genre }),
  clearDistrict: () =>
    set({ largeDistrict: '시.도', middleDistrict: '시.군.구' }),
  clearGenre: () => set({ genre: '전체' }),
}));
