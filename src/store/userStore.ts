import { create } from 'zustand';
import { UserDTO } from '@/types/user/user.types';

interface UserState {
  accessToken: string | null;
  userInfo: UserDTO['get'] | null;
  setAccessToken: (token: string) => void;
  setUserInfo: (info: UserDTO['get']) => void;
}

export const useUserStore = create<UserState>((set) => ({
  accessToken: null,
  userInfo: null,
  setAccessToken: (token) => set({ accessToken: token }),
  setUserInfo: (info) => set({ userInfo: info }),
}));
