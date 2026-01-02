import { toast } from 'react-toastify';
import { axiosInstance } from '@/libs/axiosInstance';
import axios from 'axios';
import { API_PATH } from '@/axios/path.config';

export const GetNotice = async () => {
  try {
    const res = await axios.get(`${API_PATH.notice.default}`);
    return res;
  } catch (error) {
    toast.error('공지사항 목록 최신화 중 오류가 있습니다.');
    throw error;
  }
};

export const PostNotice = async (data: { title: string; content: string }) => {
  const formData = new FormData();
  formData.append('title', data.title);
  formData.append('content', data.content);

  try {
    await axiosInstance.post(`${API_PATH.notice.default}`, formData);
  } catch (error) {
    toast.error('게시물 전송 중 오류가 있습니다.');
    throw error;
  }
};
