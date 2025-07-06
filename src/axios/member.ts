import { toast } from 'react-toastify';
import { axiosInstance } from '@/libs/axiosInstance';
import axios from 'axios';
import { API_PATH } from '@/axios/path.config';

interface GetGatheringMemberProps {
  gatheringId: string | string[];
}

export const GetGatheringMember = async ({
  gatheringId,
}: GetGatheringMemberProps) => {
  try {
    const res = await axios.get(
      `${API_PATH.gathering.default}/${gatheringId}/member`
    );
    return res;
  } catch (error) {
    toast.error('모임 참여자 목록 최신화 중 오류가 있습니다.');
    throw error;
  }
};

export const PostGatheringMember = async (gatheringId: number) => {
  try {
    await axiosInstance.post(
      `${API_PATH.gathering.default}/${gatheringId}/member`
    );
  } catch (error) {
    toast.error('모임 참여 진행 중 오류가 있습니다.');
    throw error;
  }
};

export const DeleteGatheringMember = async (gatheringId: number) => {
  try {
    await axiosInstance.delete(
      `${API_PATH.gathering.default}/${gatheringId}/member`
    );
  } catch (error) {
    toast.error('모임 참여 취소 중 오류가 있습니다.');
    throw error;
  }
};
