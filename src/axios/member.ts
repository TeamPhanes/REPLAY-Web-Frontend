import { toast } from 'react-toastify';
import axios from 'axios';
import { API_PATH } from '@/axios/path.config';

interface GetGatheringMemberProps {
  id: string | string[];
}

export const GetGatheringMember = async ({ id }: GetGatheringMemberProps) => {
  try {
    const res = await axios.get(`${API_PATH.gathering_member.default}/${id}`);
    return res;
  } catch (error) {
    toast.error(`모임 참여자 목록 최신화 중 오류가 있습니다. ${error}`);
    throw error;
  }
};
