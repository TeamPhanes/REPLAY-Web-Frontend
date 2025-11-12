'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { GetTheme, GetThemeDetail } from '@/axios/theme';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useGetTheme = (
  accessToken: string | null,
  state: string[],
  city: string[],
  genres: string[],
  page: number,
  size: number
) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['theme', accessToken, state, city, genres, page, size],
    queryFn: () => GetTheme({ accessToken, state, city, genres, page, size }),
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

export const useGetThemeDetail = (id: string | string[]) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['themeDetail', id],
    queryFn: () => GetThemeDetail(id),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const themeDetail = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { themeDetail, isLoading, showLoading, error };
};
