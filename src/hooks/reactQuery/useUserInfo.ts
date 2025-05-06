import { useAuthStore } from '@/store/authStore';
import { useQuery } from '@tanstack/react-query';
import { GetUser } from '@/axios/user';
import { useHasHydrated } from '@/hooks/useHasHydrated';

export const useUserInfo = () => {
  const hasHydrated = useHasHydrated();
  const { accessToken } = useAuthStore();

  const { data, isLoading, error } = useQuery({
    queryKey: ['userInfo', accessToken],
    queryFn: GetUser,
    enabled: !!accessToken && hasHydrated,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const userInfo = data?.data;

  return { userInfo, isLoading, error };
};
