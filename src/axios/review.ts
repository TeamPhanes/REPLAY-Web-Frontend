import { toast } from 'react-toastify';
import { axiosInstance } from '@/libs/axiosInstance';
import axios from 'axios';
import { API_PATH } from '@/axios/path.config';
import { ReviewDTO } from '@/types/review/review.type';
import { toKSTString } from '@/utils/dateChange';

export const GetReview = async (
  accessToken: string | null,
  themeId: string | string[],
  page: number,
  size: number
) => {
  try {
    const res = await (accessToken === null ? axios : axiosInstance).get(
      `${API_PATH.review.default}/${themeId}?size=${size}&page=${page}`
    );
    return res;
  } catch (error) {
    toast.error('리뷰 정보 최신화 중 오류가 있습니다.');
    throw error;
  }
};

export const GetReviewSummary = async (themeId: string | string[]) => {
  try {
    const res = await axios.get(`${API_PATH.review.summary}/${themeId}`);
    return res;
  } catch (error) {
    toast.error('총 리뷰갯수 정보 최신화 중 오류가 있습니다.');
    throw error;
  }
};
export const PostReview = async (data: ReviewDTO['post'], themeId: number) => {
  const formData = new FormData();

  const reviewPayload = {
    score: data.review.score,
    themeReview: data.review.themeReview,
    levelReview: data.review.levelReview,
    storyReview: data.review.storyReview,
    isSuccess: data.review.isSuccess,
    numberOfPlayer: data.review.numberOfPlayer,
    hint: data.review.hint,
    content: data.review.content,
    representativeId: data.review.representativeId,
    date: toKSTString(data.review.date),
  };

  formData.append(
    'review',
    new Blob([JSON.stringify(reviewPayload)], { type: 'application/json' })
  );

  if (data.images && data.images.length > 0) {
    data.images.forEach((file, index) => {
      formData.append(`image${index}`, file.image === null ? '' : file.image);
    });
  }

  try {
    await axiosInstance.post(
      `${API_PATH.review.default}/${themeId}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
  } catch (error) {
    toast.error('리뷰 생성에 실패했습니다.');
    throw error;
  }
};

export const PatchReview = async (
  data: ReviewDTO['patch'],
  themeId: number
) => {
  const formData = new FormData();

  const reviewPayload = {
    score: data.review.score,
    themeReview: data.review.themeReview,
    levelReview: data.review.levelReview,
    storyReview: data.review.storyReview,
    isSuccess: data.review.isSuccess,
    numberOfPlayer: data.review.numberOfPlayer,
    deleteImageIds: data.review.deleteImageIds,
    hint: data.review.hint,
    content: data.review.content,
    representativeId: data.review.representativeId,
    date: toKSTString(data.review.date),
  };

  formData.append(
    'review',
    new Blob([JSON.stringify(reviewPayload)], { type: 'application/json' })
  );

  if (data.images && data.images.length > 0) {
    data.images.forEach((file, index) => {
      formData.append(`image${index}`, file.image === null ? '' : file.image);
    });
  }

  try {
    await axiosInstance.put(`${API_PATH.review.default}/${themeId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  } catch (error) {
    toast.error('리뷰 수정에 실패했습니다.');
    throw error;
  }
};

export const DeleteReview = async (
  reviewId: number | undefined,
  themeId: number
) => {
  try {
    await axiosInstance.delete(
      `${API_PATH.review.default}/${reviewId}?themeId=${themeId}`
    );
  } catch (error) {
    toast.error('리뷰 삭제 진행 중 오류가 있습니다.');
    throw error;
  }
};

export const PostLikeReview = async (reviewId: number) => {
  try {
    await axiosInstance.post(`${API_PATH.review.default}/like/${reviewId}`);
  } catch (error) {
    toast.error('리뷰 좋아요 진행 중 오류가 있습니다.');
    throw error;
  }
};

export const DeleteLikeReview = async (reviewId: number) => {
  try {
    await axiosInstance.delete(`${API_PATH.review.default}/like/${reviewId}`);
  } catch (error) {
    toast.error('리뷰 좋아요 취소 중 오류가 있습니다.');
    throw error;
  }
};
