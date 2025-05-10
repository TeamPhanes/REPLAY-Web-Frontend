'use client';

import { useAuthStore } from '@/store/authStore';
import { useQuery } from '@tanstack/react-query';
import { GetReviewTheme } from '@/axios/user';
import { useHasHydrated } from '@/hooks/useHasHydrated';

export const useReviewTheme = () => {
  const hasHydrated = useHasHydrated();
  const accessToken = useAuthStore((state) => state.accessToken);

  const { data, isLoading, error } = useQuery({
    queryKey: ['userReviewTheme', accessToken],
    queryFn: GetReviewTheme,
    enabled: !!accessToken && hasHydrated,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const userReviewTheme = data?.data;

  return { userReviewTheme, isLoading, error };
};
