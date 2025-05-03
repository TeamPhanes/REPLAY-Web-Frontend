import { axiosInstance } from '@/libs/axiosInstance';
import axios from 'axios';
import { API_PATH } from '@/axios/path.config';
import { UserDTO } from '@/types/user/user.types';

// export const GetUser = async (accessToken: string) => {
//   if (!accessToken) {
//     throw new Error('accessToken이 없습니다.');
//   }

//   const headers = {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${accessToken}`,
//   };

//   const res = await axios.get(API_PATH.user.me, { headers });
//   return res;
// };

export const GetUser = async (): Promise<UserDTO['get']> => {
  try {
    const res = await axiosInstance.get<{ data: UserDTO['get'] }>(
      API_PATH.user.me
    );
    return res.data.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
