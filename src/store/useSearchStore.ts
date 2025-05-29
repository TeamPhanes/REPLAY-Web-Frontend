import { create } from 'zustand';

interface State {
  search: string;
}

interface Actions {
  setSearch: (search: string) => void;
  clearSearch: () => void;
}

export const useSearchStore = create<State & Actions>()((set) => ({
  search: '',
  setSearch: (search) => set({ search }),
  clearSearch: () => set({ search: '' }),
}));
