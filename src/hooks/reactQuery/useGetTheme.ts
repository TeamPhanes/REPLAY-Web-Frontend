'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { GetTheme, GetThemeDetail } from '@/axios/theme';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useGetTheme = (
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
    queryKey: ['theme', accessToken, filteredLocations, genres, page, size],
    queryFn: () =>
      GetTheme({
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

  const theme = data?.data;
  const showLoading = useShowLoading(isLoading);

  return {
    theme,
    isLoading,
    showLoading,
    error,
  };
};

export const useGetThemeDetail = (
  accessToken: string | null,
  id: string | string[]
) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['themeDetail', accessToken, id],
    queryFn: () => GetThemeDetail(accessToken, id),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const themeDetail = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { themeDetail, isLoading, showLoading, error };
};
