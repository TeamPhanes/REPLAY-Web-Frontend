import { useAuthStore } from '@/store/authStore';
import { useQuery } from '@tanstack/react-query';
import { GetUser } from '@/axios/user';

export const useUserInfo = () => {
  const accessToken = useAuthStore((state) => state.accessToken);

  const { data, isLoading, error } = useQuery({
    queryKey: ['userInfo', accessToken],
    queryFn: () => GetUser(),
    enabled: !!accessToken,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const userInfo = data?.data;

  return { userInfo, isLoading, error };
};
