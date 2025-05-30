'use client';

import { useQuery } from '@tanstack/react-query';
import { GetReviewTheme } from '@/axios/user';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useReviewTheme = (page: number, limit: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['userReviewTheme', page, limit],
    queryFn: () => GetReviewTheme({ page, limit }),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const userReviewTheme = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { userReviewTheme, isLoading, showLoading, error };
};
