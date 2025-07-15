import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PatchMyProfile } from '@/axios/user';

export const usePatchMyProfile = (onSuccess: () => void) => {
  const queryclient = useQueryClient();

  const mutation = useMutation({
    mutationFn: PatchMyProfile,
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['userInfo'] });
      queryclient.invalidateQueries({ queryKey: ['gatheringMember'] });
      queryclient.invalidateQueries({ queryKey: ['otherUser'] });
      toast.success(`프로필 수정이 완료되었습니다.`);
      onSuccess();
    },
    onError: (error) => {
      toast.error(`프로필 최신화 중 오류가 있습니다. : ${error}`);
    },
  });

  return mutation;
};
