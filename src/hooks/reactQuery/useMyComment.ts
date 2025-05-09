'use client';

import { useAuthStore } from '@/store/authStore';
import { useQuery } from '@tanstack/react-query';
import { GetMyComment } from '@/axios/user';
import { useHasHydrated } from '@/hooks/useHasHydrated';

export const useMyComment = (type: string) => {
  const hasHydrated = useHasHydrated();
  const accessToken = useAuthStore((state) => state.accessToken);

  const { data, isLoading, error } = useQuery({
    queryKey: ['MyComment', type],
    queryFn: () => GetMyComment(type),
    enabled: !!accessToken && hasHydrated,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const MyComment = data?.data;

  return { MyComment, isLoading, error };
};
