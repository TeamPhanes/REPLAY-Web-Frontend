'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { GetReviewGathering } from '@/axios/gathering';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useReviewGathering = (
  accessToken: string | null,
  locations: string[],
  genres: string[],
  page: number,
  size: number
) => {
  const filteredLocations = locations.map((item) =>
    item.endsWith(' 전체') ? item.replace(' 전체', '') : item
  );
  const { data, isLoading, error } = useQuery({
    queryKey: [
      'userReviewGathering',
      accessToken,
      filteredLocations,
      genres,
      page,
      size,
    ],
    queryFn: () =>
      GetReviewGathering({
        accessToken,
        locations: filteredLocations,
        genres,
        page,
        size,
      }),
    retry: false,
    staleTime: 1000 * 60 * 5,
    placeholderData: keepPreviousData,
  });

  const userReviewGathering = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { userReviewGathering, isLoading, showLoading, error };
};
