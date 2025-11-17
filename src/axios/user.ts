import { toast } from 'react-toastify';
import { axiosInstance } from '@/libs/axiosInstance';
import axios from 'axios';
import { API_PATH } from '@/axios/path.config';

export const GetUser = async () => {
  try {
    const res = await axiosInstance.get(API_PATH.user.me);
    return res;
  } catch (error) {
    toast.error('유저정보 최신화 중 오류가 있습니다.');
    throw error;
  }
};

export const GetOtherUser = async (nickname: string | null) => {
  try {
    const res = await axios.get(`${API_PATH.user.default}/${nickname}`);
    return res;
  } catch (error) {
    toast.error('타인정보 최신화 중 오류가 있습니다.');
    throw error;
  }
};

interface PatchMyPageData {
  nickname: string;
  comment: string;
  genderMark: boolean;
  emailMark: boolean;
  image?: File | null;
}
export const PatchMyProfile = async (data: PatchMyPageData) => {
  const formData = new FormData();
  formData.append('nickname', data.nickname);
  formData.append('comment', data.comment);
  formData.append('genderMark', String(data.genderMark));
  formData.append('emailMark', String(data.emailMark));

  if (data.image) {
    formData.append('image', data.image);
  }

  return axiosInstance.patch(API_PATH.user.me, formData, {
    headers: {
      'Content-Type': data.image ? 'multipart/form-data' : 'application/json',
    },
  });
};

interface GetLikeThemeProps {
  page: number;
  limit: number;
}
export const GetLikeTheme = async ({ page, limit }: GetLikeThemeProps) => {
  try {
    const res = await axiosInstance.get(
      `${API_PATH.user.likeTheme}?limit=${limit}&offset=${page}`
    );
    return res;
  } catch (error) {
    toast.error('찜한 방탈출 최신화 중 오류가 있습니다.');
    throw error;
  }
};

interface GetLikeGatheringProps {
  page: number;
  limit: number;
}
export const GetLikeGathering = async ({
  page,
  limit,
}: GetLikeGatheringProps) => {
  try {
    const res = await axiosInstance.get(
      `${API_PATH.user.likeGathering}?limit=${limit}&offset=${page}`
    );
    return res;
  } catch (error) {
    toast.error('찜한 모임 최신화 중 오류가 있습니다.');
    throw error;
  }
};

interface GetReviewThemeProps {
  page: number;
  limit: number;
}
export const GetReviewTheme = async ({ page, limit }: GetReviewThemeProps) => {
  try {
    const res = await axiosInstance.get(
      `${API_PATH.user.reviewTheme}?limit=${limit}&offset=${page}`
    );
    return res;
  } catch (error) {
    toast.error('참여한 방탈출 최신화 중 오류가 있습니다.');
    throw error;
  }
};

interface GetReviewGatheringProps {
  page: number;
  limit: number;
}
export const GetReviewGathering = async ({
  page,
  limit,
}: GetReviewGatheringProps) => {
  try {
    const res = await axiosInstance.get(
      `${API_PATH.user.reviewGathering}?limit=${limit}&offset=${page}`
    );
    return res;
  } catch (error) {
    toast.error('참여한 모임 최신화 중 오류가 있습니다.');
    throw error;
  }
};

interface GetMyCommentProps {
  sort: string;
  page: number;
  limit: number;
}
export const GetMyComment = async ({
  sort,
  page,
  limit,
}: GetMyCommentProps) => {
  try {
    const res = await axiosInstance.get(
      `${API_PATH.user.myComment}?sortBy=${sort}&limit=${limit}&offset=${page}`
    );
    return res;
  } catch (error) {
    toast.error('내가 쓴 댓글 최신화 중 오류가 있습니다.');
    throw error;
  }
};
