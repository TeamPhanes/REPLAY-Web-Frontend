import { toast } from 'react-toastify';
import { axiosInstance } from '@/libs/axiosInstance';
import { API_PATH } from '@/axios/path.config';

export const GetUser = async () => {
  try {
    const res = await axiosInstance.get(API_PATH.user.me);
    return res;
  } catch (error) {
    toast.error(`유저정보 최신화 중 오류가 있습니다. : ${error}`);
    throw error;
  }
};

export const GetLikeTheme = async () => {
  try {
    const res = await axiosInstance.get(
      `${API_PATH.user.likeTheme}?limit=10&offset=0`
    );
    return res;
  } catch (error) {
    toast.error(`찜한 방탈출 최신화 중 오류가 있습니다. : ${error}`);
    throw error;
  }
};
