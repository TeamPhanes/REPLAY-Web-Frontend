import { toast } from 'react-toastify';
import { create } from 'zustand';

interface State {
  districtList: string[];
  genreList: string[];
}

interface Actions {
  addDistrictList: (district: string) => void;
  removeDistrictList: (district: string) => void;
  addGenre: (genre: string) => void;
  removeGenre: (genre: string) => void;
  clearDistrict: () => void;
  clearGenre: () => void;
}

export const useQueryStringStore = create<State & Actions>()((set, get) => ({
  districtList: [],
  genreList: [],

  addDistrictList: (district) => {
    const prev = get().districtList;
    const firstName = district.slice(0, 2);
    const isAllNameCheck = district.endsWith(' 전체');

    if (
      prev.find((item) => item.endsWith(`${firstName} 전체`)) &&
      prev.find((item) => item.startsWith(firstName))
    ) {
      toast.warning('이미 해당 지역의 전체가 선택되어 있습니다.', {
        toastId: 'district-all-warning',
      });
      return;
    }

    let filtered = prev.filter((item) => item !== district);

    if (isAllNameCheck) {
      filtered = filtered.filter((data) => !data.startsWith(firstName));
    }

    const updated = [...filtered.slice(0, 2), district];
    set({ districtList: updated });
  },
  removeDistrictList: (district) => {
    const prev = get().districtList;

    const filtered = prev.filter((item) => item !== district);
    set({ districtList: filtered });
  },
  clearDistrict: () => set({ districtList: [] }),

  addGenre: (genre) => {
    const prev = get().genreList;
    const filtered = prev.filter((item) => item !== genre);
    const updated = [...filtered.slice(0, 2), genre];
    set({ genreList: updated });
  },
  removeGenre: (genre) => {
    const prev = get().genreList;

    const filtered = prev.filter((item) => item !== genre);
    set({ genreList: filtered });
  },
  clearGenre: () => set({ genreList: [] }),
}));
