import { toast } from 'react-toastify';
import { axiosInstance } from '@/libs/axiosInstance';
import axios from 'axios';
import { API_PATH } from '@/axios/path.config';

interface GetThemeProps {
  accessToken: string | null;
  state: string[];
  city: string[];
  genres: string[];
  page: number;
  size: number;
}

export const GetTheme = async ({
  accessToken,
  state,
  city,
  genres,
  page,
  size,
}: GetThemeProps) => {
  try {
    const res = await (accessToken === null ? axios : axiosInstance).get(
      `${API_PATH.theme.default}?${state.length !== 0 ? `&state=${state}` : ''}${city.length !== 0 ? `&city=${city}` : ''}${genres.length !== 0 ? `&genres=${genres}` : ''}&size=${size}&page=${page}`
    );
    return res;
  } catch (error) {
    toast.error('방탈출 목록 최신화 중 오류가 있습니다.');
    throw error;
  }
};

export const GetSearchTheme = async (
  keyword: string,
  state: string,
  city: string
) => {
  try {
    const res = await axios.get(
      `${API_PATH.theme.search}?${keyword !== '' ? `&keyword=${keyword}` : ''}${city !== '시.군.구' ? `&city=${city}` : ''}${state !== '시.도' ? `&state=${state}` : ''}&limit=5&offset=0`
    );
    return res;
  } catch (error) {
    toast.error('방탈출 리스트업 진행 중 오류가 있습니다.');
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
