import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { DeleteReview } from '@/axios/review';

export const useDeleteReview = (
  reviewId: number | undefined,
  themeId: number,
  onClose: () => void
) => {
  const queryclient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: () => DeleteReview(reviewId, themeId),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['theme'] });
      queryclient.invalidateQueries({ queryKey: ['userReviewTheme'] });
      queryclient.invalidateQueries({ queryKey: ['userLikeTheme'] });
      toast.success(`리뷰 삭제가 완료되었습니다.`);
      onClose();
    },
    onError: (error: AxiosError) => {
      const status = error.response?.status;

      if (status === 401) {
        toast.info('로그인 후 이용해주세요', { toastId: 'auth-required' });
        router.push('/login');
      }
    },
  });

  return mutation;
};
