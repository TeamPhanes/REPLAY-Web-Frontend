import { toast } from 'react-toastify';
import { axiosInstance } from '@/libs/axiosInstance';
import axios from 'axios';
import { API_PATH } from '@/axios/path.config';
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

interface ReviewData {
  review: {
    score: number;
    themeReview: string;
    levelReview: string;
    storyReview: string;
    isSuccess: string;
    numberOfPlayer: number;
    hint: number;
    content: string;
    date: Date;
  };
  images: File[] | null;
}
export const PostReview = async (data: ReviewData, themeId: number) => {
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
    date: toKSTString(data.review.date),
  };

  formData.append(
    'review',
    new Blob([JSON.stringify(reviewPayload)], { type: 'application/json' })
  );

  if (data.images && data.images.length > 0) {
    data.images.forEach((file) => {
      formData.append('images', file);
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

// export const PatchReview = async (
//   data: ReviewData,
//   reviewId: number | undefined,
//   previewUrl: string | null
// ) => {
//   const formData = new FormData();
//   formData.append('themeId', String(data.themeId));
//   formData.append('content', data.content);
//   formData.append('rating', String(data.rating));
//   formData.append('success', data.success);
//   formData.append('hint', String(data.hint));
//   formData.append('numberOfPlayer', String(data.numberOfPlayer));
//   formData.append('themeReview', data.themeReview);
//   formData.append('storyReview', data.storyReview);
//   formData.append('levelReview', data.levelReview);

//   if (data.image) {
//     formData.append('image', data.image);
//   }

//   try {
//     if (data.image || previewUrl === null) {
//       await axiosInstance.patch(
//         `${API_PATH.review.default}/${reviewId}`,
//         formData,
//         {
//           headers: {
//             'Content-Type': data.image
//               ? 'multipart/form-data'
//               : 'application/json',
//           },
//         }
//       );
//     } else {
//       await axiosInstance.patch(
//         `${API_PATH.review.default}/${reviewId}`,
//         formData
//       );
//     }
//   } catch (error) {
//     toast.error('리뷰 수정에 실패했습니다.');
//     throw error;
//   }
// };

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
