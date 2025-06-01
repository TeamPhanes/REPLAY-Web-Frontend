import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DeleteMarkTheme, PostMarkTheme } from '@/axios/theme';

export const usePostThemeMark = () => {
  const queryclient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async ({
      themeId,
      userAction,
    }: {
      themeId: number;
      userAction: 'MARK_POST' | 'UNMARK_POST';
    }) => {
      if (userAction === 'MARK_POST') {
        await PostMarkTheme(themeId);
      } else {
        await DeleteMarkTheme(themeId);
      }
    },
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['userReviewTheme'] });
    },
    onError: () => {
      toast.info('로그인 후 이용해주세요', { toastId: 'auth-required' });
      router.push('/login');
    },
  });

  return { marksMutation: mutation };
};
