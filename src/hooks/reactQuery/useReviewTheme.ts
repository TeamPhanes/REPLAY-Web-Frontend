'use client';

import { useQuery } from '@tanstack/react-query';
import { GetReviewTheme } from '@/axios/user';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useReviewTheme = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['userReviewTheme'],
    queryFn: GetReviewTheme,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const userReviewTheme = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { userReviewTheme, isLoading, showLoading, error };
};
