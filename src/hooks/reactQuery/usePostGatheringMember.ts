import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { DeleteGatheringMember, PostGatheringMember } from '@/axios/member';

export const usePostGatheringMember = () => {
  const queryclient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async ({
      gatheringId,
      userAction,
    }: {
      gatheringId: number;
      userAction: 'POST' | 'DELETE';
    }) => {
      if (userAction === 'POST') {
        await PostGatheringMember(gatheringId);
      } else {
        await DeleteGatheringMember(gatheringId);
      }
    },
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['gathering'] });
      queryclient.invalidateQueries({ queryKey: ['gatheringMember'] });
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

  return { memberMutation: mutation };
};
