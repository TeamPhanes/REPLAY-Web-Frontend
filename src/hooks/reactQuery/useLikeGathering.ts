'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { GetLikeGathering } from '@/axios/gathering';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useLikeGathering = (
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
    queryKey: ['userLikeGathering', accessToken, locations, genres, page, size],
    queryFn: () =>
      GetLikeGathering({
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

  const userLikeGathering = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { userLikeGathering, isLoading, showLoading, error };
};
