'use client';

import { useQuery } from '@tanstack/react-query';
import { GetReviewSummary } from '@/axios/review';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useGetReviewSummary = (themeId: string | string[]) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['reviewSummary', themeId],
    queryFn: () => GetReviewSummary(themeId),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const reviewSummary = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { reviewSummary, isLoading, showLoading, error };
};
