import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { PatchReview } from '@/axios/review';

interface PatchReviewData {
  themeId: number;
  content: string;
  rating: number;
  success: string;
  images: File | null;
  hint: number;
  numberOfPlayer: number;
  themeReview: string;
  storyReview: string;
  levelReview: string;
}
export const usePatchReview = (
  reviewId: number | undefined,
  previewUrl: string | null
) => {
  const queryclient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (data: PatchReviewData) =>
      PatchReview(data, reviewId, previewUrl),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['theme'] });
      queryclient.invalidateQueries({ queryKey: ['userReviewTheme'] });
      queryclient.invalidateQueries({ queryKey: ['userLikeTheme'] });
      toast.success(`리뷰 수정이 완료되었습니다.`);
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
