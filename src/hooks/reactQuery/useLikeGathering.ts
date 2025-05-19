'use client';

import { useQuery } from '@tanstack/react-query';
import { GetLikeGathering } from '@/axios/user';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useLikeGathering = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['userLikeGathering'],
    queryFn: GetLikeGathering,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const userLikeGathering = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { userLikeGathering, isLoading, showLoading, error };
};
