import { toast } from 'react-toastify';
import { axiosInstance } from '@/libs/axiosInstance';
import axios from 'axios';
import { API_PATH } from '@/axios/path.config';

interface CommentProps {
  id: string | string[];
  sort: string;
}

export const GetComment = async ({ id, sort }: CommentProps) => {
  try {
    const res = await axios.get(
      `${API_PATH.comment.default}?gatheringId=${id}&sortBy=${sort}&limit=10&offset=0`
    );
    return res;
  } catch (error) {
    toast.error('댓글 정보 최신화 중 오류가 있습니다.');
    throw error;
  }
};

interface PostCommentData {
  content: string;
  parentId: number | null;
}
export const PostComment = async (
  id: string | string[],
  data: PostCommentData
) => {
  const formData = new FormData();
  formData.append('content', data.content);
  formData.append('parentId', String(data.parentId));

  try {
    await axiosInstance.post(
      `${API_PATH.comment.default}?gatheringId=${id}`,
      formData
    );
  } catch (error) {
    toast.error('댓글 전송 중 오류가 있습니다.');
    throw error;
  }
};

export const PatchComment = async (
  commentId: string | string[],
  gatheringId: string | string[],
  data: PostCommentData
) => {
  const formData = new FormData();
  formData.append('content', data.content);
  formData.append('parentId', String(data.parentId));
  try {
    await axiosInstance.patch(
      `${API_PATH.comment.default}/${commentId}?gatheringId=${gatheringId}`,
      formData
    );
  } catch (error) {
    toast.error('댓글 수정 중 오류가 있습니다.');
    throw error;
  }
};

export const DeleteComment = async (
  commentId: string | string[],
  gatheringId: string | string[]
) => {
  try {
    await axiosInstance.delete(
      `${API_PATH.comment.default}/${commentId}?gatheringId=${gatheringId}`
    );
  } catch (error) {
    toast.error('댓글 삭제 중 오류가 있습니다.');
    throw error;
  }
};
