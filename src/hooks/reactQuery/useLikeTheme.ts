'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { GetLikeTheme } from '@/axios/theme';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useLikeTheme = (
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
    queryKey: ['likeTheme', accessToken, filteredLocations, genres, page, size],
    queryFn: () =>
      GetLikeTheme({
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

  const likeTheme = data?.data;
  const showLoading = useShowLoading(isLoading);

  return {
    likeTheme,
    isLoading,
    showLoading,
    error,
  };
};
