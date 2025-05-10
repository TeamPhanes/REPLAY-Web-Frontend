'use client';

import { useAuthStore } from '@/store/authStore';
import { useQuery } from '@tanstack/react-query';
import { GetReviewGathering } from '@/axios/user';
import { useHasHydrated } from '@/hooks/useHasHydrated';

export const useReviewGathering = () => {
  const hasHydrated = useHasHydrated();
  const accessToken = useAuthStore((state) => state.accessToken);

  const { data, isLoading, error } = useQuery({
    queryKey: ['userReviewGathering', accessToken],
    queryFn: GetReviewGathering,
    enabled: !!accessToken && hasHydrated,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const userReviewGathering = data?.data;

  return { userReviewGathering, isLoading, error };
};
