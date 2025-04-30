import { useUserStore } from '@/store/userStore';
import { useQuery } from '@tanstack/react-query';
import { GetUser } from '@/axios/user';

export const useUserInfo = () => {
  const accessToken = useUserStore((state) => state.accessToken);

  const { data, isLoading, error } = useQuery({
    queryKey: ['userInfo', accessToken],
    queryFn: () => GetUser(accessToken!),
    enabled: !!accessToken,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const userInfo = data?.data;

  return { userInfo, isLoading, error };
};
