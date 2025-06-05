import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PostGathering } from '@/axios/gathering';

interface PostGatheringData {
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
export const usePostGathering = () => {
  const queryclient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: PostGatheringData) => PostGathering(data),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['gathering'] });
      toast.success(`모임 생성이 완료되었습니다.`);
    },
  });

  return mutation;
};
