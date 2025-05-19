import { toast } from 'react-toastify';
import { axiosInstance } from '@/libs/axiosInstance';
import { API_PATH } from '@/axios/path.config';

export const GetUser = async () => {
  try {
    const res = await axiosInstance.get(API_PATH.user.me);
    return res;
  } catch (error) {
    toast.error(`유저정보 최신화 중 오류가 있습니다. : ${error}`);
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
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const GetLikeTheme = async () => {
  try {
    const res = await axiosInstance.get(
      `${API_PATH.user.likeTheme}?limit=10&offset=0`
    );
    return res;
  } catch (error) {
    toast.error(`찜한 방탈출 최신화 중 오류가 있습니다. : ${error}`);
    throw error;
  }
};

export const GetLikeGathering = async () => {
  try {
    const res = await axiosInstance.get(
      `${API_PATH.user.likeGathering}?limit=10&offset=0`
    );
    return res;
  } catch (error) {
    toast.error(`찜한 모임 최신화 중 오류가 있습니다. : ${error}`);
    throw error;
  }
};

export const GetReviewTheme = async () => {
  try {
    const res = await axiosInstance.get(
      `${API_PATH.user.reviewTheme}?limit=10&offset=0`
    );
    return res;
  } catch (error) {
    toast.error(`참여한 방탈출 최신화 중 오류가 있습니다. : ${error}`);
    throw error;
  }
};

export const GetReviewGathering = async () => {
  try {
    const res = await axiosInstance.get(
      `${API_PATH.user.reviewGathering}?limit=10&offset=0`
    );
    return res;
  } catch (error) {
    toast.error(`참여한 모임 최신화 중 오류가 있습니다. ${error}`);
    throw error;
  }
};

export const GetMyComment = async (type: string) => {
  try {
    const res = await axiosInstance.get(
      `${API_PATH.user.myComment}?sortBy=${type}&limit=10&offset=0`
    );
    return res;
  } catch (error) {
    toast.error(`내가 쓴 댓글 최신화 중 오류가 있습니다. ${error}`);
    throw error;
  }
};
