import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DeleteLikeTheme, PostLikeTheme } from '@/axios/theme';

export const usePostThemeLike = () => {
  const queryclient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async ({
      themeId,
      userAction,
    }: {
      themeId: number;
      userAction: 'LIKE_POST' | 'UNLIKE_POST';
    }) => {
      if (userAction === 'LIKE_POST') {
        await PostLikeTheme(themeId);
      } else {
        await DeleteLikeTheme(themeId);
      }
    },
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['userLikeTheme'] });
      queryclient.invalidateQueries({ queryKey: ['userReviewTheme'] });
    },
    onError: () => {
      toast.info('로그인 후 이용해주세요', { toastId: 'auth-required' });
      router.push('/login');
    },
  });

  return { likesMutation: mutation };
};
