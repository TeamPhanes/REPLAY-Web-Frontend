'use client';

import { useQuery } from '@tanstack/react-query';
import { GetLikeTheme } from '@/axios/user';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useLikeTheme = (page: number, limit: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['userLikeTheme', page, limit],
    queryFn: () => GetLikeTheme({ page, limit }),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
  const userLikeTheme = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { userLikeTheme, isLoading, showLoading, error };
};
