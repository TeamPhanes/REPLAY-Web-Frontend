import axios from 'axios';
import { API_PATH } from '@/axios/path.config';

export const GetUser = async (accessToken: string) => {
  if (!accessToken) {
    throw new Error('accessToken이 없습니다.');
  }

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  };

  const res = await axios.get(API_PATH.user.me, { headers });
  return res;
};
