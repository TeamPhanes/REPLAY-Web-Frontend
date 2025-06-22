import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { DeleteLikeReview, PostLikeReview } from '@/axios/review';

export const usePostReviewLike = () => {
  const queryclient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async ({
      reviewId,
      userAction,
    }: {
      reviewId: number;
      userAction: 'LIKE_POST' | 'UNLIKE_POST';
    }) => {
      if (userAction === 'LIKE_POST') {
        await PostLikeReview(reviewId);
      } else {
        await DeleteLikeReview(reviewId);
      }
    },
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['review'] });
    },
    onError: (error: AxiosError) => {
      const status = error.response?.status;

      if (status === 401) {
        toast.info('로그인 후 이용해주세요', { toastId: 'auth-required' });
        router.push('/login');
      }
    },
  });

  return { likesMutation: mutation };
};
