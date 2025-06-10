import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { PatchGathering } from '@/axios/gathering';

interface PatchGatheringData {
  name: string;
  themeId: number;
  content: string;
  isIndividual: string;
  price: number;
  dateTime: Date;
  registrationStart: Date;
  registrationEnd: Date;
  capacity: number;
}
export const usePatchGathering = (gatheringId: number) => {
  const queryclient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (data: PatchGatheringData) => PatchGathering(gatheringId, data),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['gathering'] });
      queryclient.invalidateQueries({ queryKey: ['gatheringDetail'] });
      toast.success(`모임 수정이 완료되었습니다.`);
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
