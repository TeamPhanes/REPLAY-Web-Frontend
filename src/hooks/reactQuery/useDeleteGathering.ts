import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { DeleteGathering } from '@/axios/gathering';

export const useDeleteGathering = (gatheringId: number) => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: () => DeleteGathering(gatheringId),
    onSuccess: () => {
      toast.success(`모임 삭제가 완료되었습니다.`);
      router.push('/gathering');
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
