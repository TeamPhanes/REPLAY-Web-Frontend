import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { PostReview } from '@/axios/review';

interface PostReviewData {
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
export const usePostReview = (themeId: number) => {
  const queryclient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (data: PostReviewData) => PostReview(data, themeId),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['theme'] });
      queryclient.invalidateQueries({ queryKey: ['userReviewTheme'] });
      queryclient.invalidateQueries({ queryKey: ['userLikeTheme'] });
      toast.success(`리뷰 생성이 완료되었습니다.`);
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
