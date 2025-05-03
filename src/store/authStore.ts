import axios from 'axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { API_PATH } from '@/axios/path.config';

interface UserState {
  accessToken: string | null;
  setAccessToken: (token: string) => void;
  clearAccessToken: () => void;
  refreshAccessToken: () => Promise<boolean>;
}

// export const useAuthStore = create<UserState>((set) => ({
//   accessToken: null,

//   setAccessToken: (token) => set({ accessToken: token }),
//   clearAccessToken: () => set({ accessToken: null }),
//   refreshAccessToken: async () => {
//     try {
//       const res = await axios.post(
//         API_PATH.auth.refresh,
//         {},
//         {
//           withCredentials: true,
//         }
//       );
//       const newAccessToken = res.data.authorization;
//       set({ accessToken: newAccessToken });
//       return true;
//     } catch (error) {
//       console.error('자동 로그인 실패', error);
//       set({ accessToken: null });
//       return false;
//     }
//   },
// }));

export const useAuthStore = create<UserState>()(
  persist(
    (set) => ({
      accessToken: null,

      setAccessToken: (token) => set({ accessToken: token }),
      clearAccessToken: () => set({ accessToken: null }),
      refreshAccessToken: async () => {
        try {
          const res = await axios.post(
            API_PATH.auth.refresh,
            {},
            { withCredentials: true }
          );
          const newAccessToken = res.data.authorization;
          set({ accessToken: newAccessToken });
          return true;
        } catch (error) {
          console.error('자동 로그인 실패', error);
          set({ accessToken: null });
          return false;
        }
      },
    }),
    {
      name: 'accessToken',
    }
  )
);
