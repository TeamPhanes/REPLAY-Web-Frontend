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
      console.error('로그아웃 실패', error); // 추후에 toast UI로 변경 예정
      clearAccessToken();
    },
  });
};
