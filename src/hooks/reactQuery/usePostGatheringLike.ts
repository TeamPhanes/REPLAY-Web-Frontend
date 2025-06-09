import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { DeleteLikeGathering, PostLikeGathering } from '@/axios/gathering';

export const usePostGatheringLike = () => {
  const queryclient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async ({
      gatheringId,
      userAction,
    }: {
      gatheringId: number;
      userAction: 'LIKE_POST' | 'UNLIKE_POST';
    }) => {
      if (userAction === 'LIKE_POST') {
        await PostLikeGathering(gatheringId);
      } else {
        await DeleteLikeGathering(gatheringId);
      }
    },
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['gathering'] });
      queryclient.invalidateQueries({ queryKey: ['userLikeGathering'] });
      queryclient.invalidateQueries({ queryKey: ['userReviewGathering'] });
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
