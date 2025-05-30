import { toast } from 'react-toastify';
import axios from 'axios';
import { API_PATH } from '@/axios/path.config';

interface GetGatheringProps {
  keyword: string;
  page: number;
  limit: number;
  sort: string;
  state: string;
  city: string;
}
export const GetGathering = async ({
  keyword,
  page,
  limit,
  sort,
  state,
  city,
}: GetGatheringProps) => {
  try {
    const res = await axios.get(
      `${API_PATH.gathering.default}?sortBy=${sort}${keyword !== '' ? `&keyword=${keyword}` : ''}${state !== '시.도' ? `&state=${state}` : ''}${city !== '시.군.구' ? `&city=${city}` : ''}&limit=${limit}&offset=${page}`
    );
    return res;
  } catch (error) {
    toast.error(`모임 목록 최신화 중 오류가 있습니다. ${error}`);
    throw error;
  }
};

export const GetGatheringDetail = async (id: string | string[]) => {
  try {
    const res = await axios.get(`${API_PATH.gathering.default}/${id}`);
    return res;
  } catch (error) {
    toast.error(`모임 상세 정보 최신화 중 오류가 있습니다. ${error}`);
    throw error;
  }
};

export const PostGathering = async () => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzQ1NzI1MzUxLCJleHAiOjE3NDU3MjcxNTF9.bJDsjMBZRaFm9VnIKv0ch_WFL0AY3p2sOdM-V1mlQMI`,
    };
    const body = {
      name: '대훈 모임 생성 테스트 2',
      roomEscapeId: 1,
      content: '마음을 그려드립니다에 대한 모임 생성 테스트2',
      price: '13000',
      dateTime: '2025-04-30T15:00:00',
      registrationStart: '2025-04-27T15:00:00',
      registrationEnd: '2025-04-29T15:00:00',
      capacity: 6,
    };

    return await axios.post(API_PATH.gathering.default, body, {
      headers,
    });
  } catch (error) {
    throw new Error('모임 생성에 실패했습니다.');
  }
};
