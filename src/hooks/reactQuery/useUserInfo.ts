'use client';

import { useAuthStore } from '@/store/authStore';
import { useQuery } from '@tanstack/react-query';
import { GetUser } from '@/axios/user';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useUserInfo = () => {
  const { accessToken } = useAuthStore();

  const { data, isLoading, error } = useQuery({
    queryKey: ['userInfo', accessToken],
    queryFn: GetUser,
    enabled: !!accessToken,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const userInfo = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { userInfo, isLoading, showLoading, error };
};
