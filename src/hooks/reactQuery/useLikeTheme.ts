'use client';

import { useAuthStore } from '@/store/authStore';
import { useQuery } from '@tanstack/react-query';
import { GetLikeTheme } from '@/axios/user';
import { useHasHydrated } from '@/hooks/useHasHydrated';

export const useLikeTheme = () => {
  const hasHydrated = useHasHydrated();
  const accessToken = useAuthStore((state) => state.accessToken);

  const { data, isLoading, error } = useQuery({
    queryKey: ['userLikeTheme', accessToken],
    queryFn: () => GetLikeTheme(),
    enabled: !!accessToken && hasHydrated,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const userLikeTheme = data?.data;

  return { userLikeTheme, isLoading, error };
};
