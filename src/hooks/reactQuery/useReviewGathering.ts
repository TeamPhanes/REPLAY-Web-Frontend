'use client';

import { useQuery } from '@tanstack/react-query';
import { GetReviewGathering } from '@/axios/user';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useReviewGathering = (page: number, limit: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['userReviewGathering', page, limit],
    queryFn: () => GetReviewGathering({ page, limit }),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const userReviewGathering = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { userReviewGathering, isLoading, showLoading, error };
};
