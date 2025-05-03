import { axiosInstance } from '@/libs/axiosInstance';
import { API_PATH } from '@/axios/path.config';

export const GetUser = async () => {
  try {
    const res = await axiosInstance.get(API_PATH.user.me);
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
