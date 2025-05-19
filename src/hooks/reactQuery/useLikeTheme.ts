'use client';

import { useQuery } from '@tanstack/react-query';
import { GetLikeTheme } from '@/axios/user';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useLikeTheme = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['userLikeTheme'],
    queryFn: GetLikeTheme,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
  const userLikeTheme = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { userLikeTheme, isLoading, showLoading, error };
};
