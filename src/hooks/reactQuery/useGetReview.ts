'use client';

import { useQuery } from '@tanstack/react-query';
import { GetReview } from '@/axios/review';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useGetReview = (
  accessToken: string | null,
  themeId: string | string[],
  page: number,
  size: number
) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['review', themeId],
    queryFn: () => GetReview(accessToken, themeId, page, size),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const review = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { review, isLoading, showLoading, error };
};
