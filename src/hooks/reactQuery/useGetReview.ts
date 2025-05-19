'use client';

import { useQuery } from '@tanstack/react-query';
import { GetReview, GetReviewAllRating } from '@/axios/review';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useGetReview = (themeId: string | string[]) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['review', themeId],
    queryFn: () => GetReview({ id: themeId }),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const review = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { review, isLoading, showLoading, error };
};

export const useGetReviewAllRating = (themeId: string | string[]) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['reviewAllRating', themeId],
    queryFn: () => GetReviewAllRating({ id: themeId }),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const reviewAllRating = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { reviewAllRating, isLoading, showLoading, error };
};
