import { toast } from 'react-toastify';
import { axiosInstance } from '@/libs/axiosInstance';
import axios from 'axios';
import { API_PATH } from '@/axios/path.config';

interface GetThemeProps {
  accessToken: string | null;
  keyword: string;
  page: number;
  limit: number;
  sort: string;
  state: string | null;
  city: string | null;
}

export const GetTheme = async ({
  accessToken,
  keyword,
  page,
  limit,
  sort,
  state,
  city,
}: GetThemeProps) => {
  try {
    const res = await (accessToken === null ? axios : axiosInstance).get(
      `${API_PATH.theme.default}?sortBy=${sort}${keyword !== '' ? `&keyword=${keyword}` : ''}${state !== '시.도' ? `&state=${state}` : ''}${city !== '시.군.구' ? `&city=${city}` : ''}&limit=${limit}&offset=${page}`
    );
    return res;
  } catch (error) {
    toast.error('방탈출 목록 최신화 중 오류가 있습니다.');
    throw error;
  }
};

export const GetThemeDetail = async (id: string | string[]) => {
  try {
    const res = await axios.get(`${API_PATH.theme.default}/${id}`);
    return res;
  } catch (error) {
    toast.error('방탈출 상세 정보 최신화 중 오류가 있습니다.');
    throw error;
  }
};

export const PostLikeTheme = async (themeId: number) => {
  try {
    await axiosInstance.post(`${API_PATH.theme.default}/${themeId}/like`);
  } catch (error) {
    toast.error('찜하기 진행 중 오류가 있습니다.');
    throw error;
  }
};

export const DeleteLikeTheme = async (themeId: number) => {
  try {
    await axiosInstance.delete(`${API_PATH.theme.default}/${themeId}/like`);
  } catch (error) {
    toast.error('찜하기 취소 중 오류가 있습니다.');
    throw error;
  }
};

export const PostMarkTheme = async (themeId: number) => {
  try {
    await axiosInstance.post(`${API_PATH.theme.default}/${themeId}/visit`);
  } catch (error) {
    toast.error('참여 목록 추가 중 오류가 있습니다.');
    throw error;
  }
};

export const DeleteMarkTheme = async (themeId: number) => {
  try {
    await axiosInstance.delete(`${API_PATH.theme.default}/${themeId}/visit`);
  } catch (error) {
    toast.error('참여 목록 취소 중 오류가 있습니다.');
    throw error;
  }
};
