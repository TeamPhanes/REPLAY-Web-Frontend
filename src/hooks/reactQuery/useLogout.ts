import { toast } from 'react-toastify';
import { useAuthStore } from '@/store/authStore';
import { useMutation } from '@tanstack/react-query';
import { PostLogout } from '@/axios/auth';

export const useLogout = () => {
  const clearAccessToken = useAuthStore((state) => state.clearAccessToken);

  return useMutation({
    mutationFn: PostLogout,
    onSuccess: () => {
      clearAccessToken();
    },
    onError: (error) => {
      toast.error(`로그아웃 진행 중 오류가 있습니다. : ${error}`);
      clearAccessToken();
    },
  });
};
