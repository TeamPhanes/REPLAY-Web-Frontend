import { toast } from 'react-toastify';
import axios from 'axios';
import { API_PATH } from '@/axios/path.config';

export const GetTheme = async () => {
  try {
    const res = await axios.get(
      `${API_PATH.theme.default}?sortBy=likes&limit=10&offset=0`
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
