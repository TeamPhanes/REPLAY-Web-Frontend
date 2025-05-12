'use client';

import { useAuthStore } from '@/store/authStore';
import { useQuery } from '@tanstack/react-query';
import { GetReviewGathering } from '@/axios/user';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useReviewGathering = () => {
  const { accessToken } = useAuthStore();

  const { data, isLoading, error } = useQuery({
    queryKey: ['userReviewGathering', accessToken],
    queryFn: GetReviewGathering,
    enabled: !!accessToken,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const userReviewGathering = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { userReviewGathering, isLoading, showLoading, error };
};
