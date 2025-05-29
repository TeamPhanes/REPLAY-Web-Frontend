import { toast } from 'react-toastify';
import axios from 'axios';
import { API_PATH } from '@/axios/path.config';

interface GetThemeProps {
  keyword: string;
  page: number;
  limit: number;
  sort: string;
  state: string | null;
  city: string | null;
}

export const GetTheme = async ({
  keyword,
  page,
  limit,
  sort,
  state,
  city,
}: GetThemeProps) => {
  try {
    const res = await axios.get(
      `${API_PATH.theme.default}?sortBy=${sort}${keyword !== '' ? `&keyword=${keyword}` : ''}${state !== '시.도' ? `&state=${state}` : ''}${city !== '시.군.구' ? `&city=${city}` : ''}&limit=${limit}&offset=${page}`
    );
    return res;
  } catch (error) {
    toast.error(`방탈출 목록 최신화 중 오류가 있습니다. ${error}`);
    throw error;
  }
};

export const GetThemeDetail = async (id: string | string[]) => {
  try {
    const res = await axios.get(`${API_PATH.theme.default}/${id}`);
    return res;
  } catch (error) {
    toast.error(`방탈출 상세 정보 최신화 중 오류가 있습니다. ${error}`);
    throw error;
  }
};
