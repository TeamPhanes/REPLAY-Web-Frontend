'use client';

import { useAuthStore } from '@/store/authStore';
import { useQuery } from '@tanstack/react-query';
import { GetLikeGathering } from '@/axios/user';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useLikeGathering = () => {
  const { accessToken } = useAuthStore();

  const { data, isLoading, error } = useQuery({
    queryKey: ['userLikeGathering', accessToken],
    queryFn: GetLikeGathering,
    enabled: !!accessToken,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const userLikeGathering = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { userLikeGathering, isLoading, showLoading, error };
};
