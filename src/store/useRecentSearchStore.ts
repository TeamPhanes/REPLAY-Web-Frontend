import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  recentSearchList: string[];
}

interface Actions {
  addRecentSearch: (keyword: string) => void;
  removeRecentSearch: (keyword: string) => void;
  clearRecentSearch: () => void;
}

export const useRecentSearchStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      recentSearchList: [],

      addRecentSearch: (keyword) => {
        const prev = get().recentSearchList;

        const filtered = prev.filter((item) => item !== keyword);

        const updated = [keyword, ...filtered.slice(0, 9)];
        set({ recentSearchList: updated });
      },

      removeRecentSearch: (keyword) => {
        const prev = get().recentSearchList;

        const filtered = prev.filter((item) => item !== keyword);
        set({ recentSearchList: filtered });
      },

      clearRecentSearch: () => set({ recentSearchList: [] }),
    }),
    { name: 'recent-search' }
  )
);
