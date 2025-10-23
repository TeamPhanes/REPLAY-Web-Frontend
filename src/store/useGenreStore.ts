import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  genreList: string[];
}

interface Actions {
  addGenre: (keyword: string) => void;
  removeGenre: (keyword: string) => void;
}

export const useGenreStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      genreList: ['공포', '스릴러', '추리', '판타지', '드라마'],

      addGenre: (genre) => {
        const prev = get().genreList;

        const filtered = prev.filter((item) => item !== genre);

        const updated = [...filtered.slice(0, 4), genre];
        set({ genreList: updated });
      },

      removeGenre: (genre) => {
        const prev = get().genreList;

        const filtered = prev.filter((item) => item !== genre);
        set({ genreList: filtered });
      },
    }),
    { name: 'selected-genre' }
  )
);
