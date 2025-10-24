import { create } from 'zustand';

interface State {
  largeDistrict: string;
  middleDistrict: string;
  genreList: string[];
}

interface Actions {
  setLargeDistrict: (largeDistrict: string) => void;
  setMiddleDistrict: (middleDistrict: string) => void;
  addGenre: (genre: string) => void;
  removeGenre: (genre: string) => void;
  clearDistrict: () => void;
  clearGenre: () => void;
}

export const useQueryStringStore = create<State & Actions>()((set, get) => ({
  largeDistrict: '시.도',
  middleDistrict: '시.군.구',
  genreList: [],
  setLargeDistrict: (largeDistrict) => set({ largeDistrict }),
  setMiddleDistrict: (middleDistrict) => set({ middleDistrict }),
  clearDistrict: () =>
    set({ largeDistrict: '시.도', middleDistrict: '시.군.구' }),

  addGenre: (genre) => {
    const prev = get().genreList;
    const filtered = prev.filter((item) => item !== genre);
    const updated = [...filtered, genre];
    set({ genreList: updated });
  },
  removeGenre: (genre) => {
    const prev = get().genreList;

    const filtered = prev.filter((item) => item !== genre);
    set({ genreList: filtered });
  },
  clearGenre: () => set({ genreList: [] }),
}));
