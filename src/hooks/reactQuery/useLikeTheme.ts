'use client';

import { useAuthStore } from '@/store/authStore';
import { useQuery } from '@tanstack/react-query';
import { GetLikeTheme } from '@/axios/user';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useLikeTheme = () => {
  const { accessToken } = useAuthStore();

  const { data, isLoading, error } = useQuery({
    queryKey: ['userLikeTheme', accessToken],
    queryFn: GetLikeTheme,
    enabled: !!accessToken,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
  const userLikeTheme = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { userLikeTheme, isLoading, showLoading, error };
};
