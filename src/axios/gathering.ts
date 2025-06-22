import { toast } from 'react-toastify';
import { axiosInstance } from '@/libs/axiosInstance';
import axios from 'axios';
import { API_PATH } from '@/axios/path.config';
import { toKSTString } from '@/utils/dateChange';

interface GetGatheringProps {
  accessToken: string | null;
  keyword: string;
  page: number;
  limit: number;
  sort: string;
  state: string;
  city: string;
}
export const GetGathering = async ({
  accessToken,
  keyword,
  page,
  limit,
  sort,
  state,
  city,
}: GetGatheringProps) => {
  try {
    const res = await (accessToken === null ? axios : axiosInstance).get(
      `${API_PATH.gathering.default}?sortBy=${sort}${keyword !== '' ? `&keyword=${keyword}` : ''}${state !== '시.도' ? `&state=${state}` : ''}${city !== '시.군.구' ? `&city=${city}` : ''}&limit=${limit}&offset=${page}`
    );
    return res;
  } catch (error) {
    toast.error('모임 목록 최신화 중 오류가 있습니다.');
    throw error;
  }
};

export const GetGatheringDetail = async (id: string | string[]) => {
  try {
    const res = await axios.get(`${API_PATH.gathering.default}/${id}`);
    return res;
  } catch (error) {
    toast.error('모임 상세 정보 최신화 중 오류가 있습니다.');
    throw error;
  }
};

export const GetHostGathering = async (
  accessToken: string | null,
  hostName: string
) => {
  try {
    const res = await (accessToken === null ? axios : axiosInstance).get(
      `${API_PATH.gathering.host}/${hostName}`
    );
    return res;
  } catch (error) {
    toast.error('호스트의 다른 모임 최신화 중 오류가 있습니다.');
    throw error;
  }
};

export const GetDateGathering = async (
  accessToken: string | null,
  dateTime: string
) => {
  try {
    const res = await (accessToken === null ? axios : axiosInstance).get(
      `${API_PATH.gathering.date}?dateTime=${dateTime}`
    );
    return res;
  } catch (error) {
    toast.error('똑같은 일정 다른 모임 최신화 중 오류가 있습니다.');
    throw error;
  }
};

interface PostGatheringData {
  name: string;
  themeId: number;
  content: string;
  isIndividual: string;
  price: number;
  dateTime: Date;
  registrationStart: Date;
  registrationEnd: Date;
  capacity: number;
}
export const PostGathering = async (data: PostGatheringData) => {
  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('themeId', String(data.themeId));
  formData.append('content', data.content);
  formData.append(
    'isIndividual',
    data.isIndividual === '인당' ? 'true' : 'false'
  );
  formData.append('price', String(data.price));
  formData.append('dateTime', String(toKSTString(data.dateTime)));
  formData.append(
    'registrationStart',
    String(toKSTString(data.registrationStart))
  );
  formData.append('registrationEnd', String(toKSTString(data.registrationEnd)));
  formData.append('capacity', String(data.capacity));

  try {
    await axiosInstance.post(API_PATH.gathering.default, formData);
  } catch (error) {
    toast.error('모임 생성에 실패했습니다.');
    throw error;
  }
};

export const PatchGathering = async (
  gatheringId: number,
  data: PostGatheringData
) => {
  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('themeId', String(data.themeId));
  formData.append('content', data.content);
  formData.append(
    'isIndividual',
    data.isIndividual === '인당' ? 'true' : 'false'
  );
  formData.append('price', String(data.price));
  formData.append('dateTime', String(toKSTString(data.dateTime)));
  formData.append(
    'registrationStart',
    String(toKSTString(data.registrationStart))
  );
  formData.append('registrationEnd', String(toKSTString(data.registrationEnd)));
  formData.append('capacity', String(data.capacity));

  try {
    await axiosInstance.patch(
      `${API_PATH.gathering.default}/${gatheringId}`,
      formData
    );
  } catch (error) {
    toast.error('모임 수정에 실패했습니다.');
    throw error;
  }
};

export const DeleteGathering = async (gatheringId: number) => {
  try {
    await axiosInstance.delete(`${API_PATH.gathering.default}/${gatheringId}`);
  } catch (error) {
    toast.error('모임 삭제에 실패했습니다.');
    throw error;
  }
};

export const PostLikeGathering = async (gatheringId: number) => {
  try {
    await axiosInstance.post(
      `${API_PATH.gathering.default}/${gatheringId}/like`
    );
  } catch (error) {
    toast.error('찜하기 진행 중 오류가 있습니다.');
    throw error;
  }
};

export const DeleteLikeGathering = async (gatheringId: number) => {
  try {
    await axiosInstance.delete(
      `${API_PATH.gathering.default}/${gatheringId}/like`
    );
  } catch (error) {
    toast.error('찜하기 취소 중 오류가 있습니다.');
    throw error;
  }
};
