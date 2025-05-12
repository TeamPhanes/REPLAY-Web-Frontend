import { toast } from 'react-toastify';
import axios from 'axios';
import { API_PATH } from '@/axios/path.config';

interface GetReviewProps {
  id: string | string[];
}

export const GetReview = async ({ id }: GetReviewProps) => {
  try {
    const res = await axios.get(
      `${API_PATH.review.default}?themeId=${id}&limit=10&offset=0`
    );
    return res;
  } catch (error) {
    toast.error(`리뷰 정보 최신화 중 오류가 있습니다. ${error}`);
    throw error;
  }
};
