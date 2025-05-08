'use client';

import { useAuthStore } from '@/store/authStore';
import { useQuery } from '@tanstack/react-query';
import { GetLikeGathering } from '@/axios/user';
import { useHasHydrated } from '@/hooks/useHasHydrated';

export const useLikeGathering = () => {
  const hasHydrated = useHasHydrated();
  const accessToken = useAuthStore((state) => state.accessToken);

  const { data, isLoading, error } = useQuery({
    queryKey: ['userLikeGathering', accessToken],
    queryFn: GetLikeGathering,
    enabled: !!accessToken && hasHydrated,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const userLikeGathering = data?.data;

  return { userLikeGathering, isLoading, error };
};
