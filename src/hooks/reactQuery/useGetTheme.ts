'use client';

import { useEffect } from 'react';
import { QueryClient, keepPreviousData, useQuery } from '@tanstack/react-query';
import { GetTheme, GetThemeDetail } from '@/axios/theme';
import { useShowLoading } from '@/hooks/useShowLoading';

const queryClient = new QueryClient();

export const useGetTheme = (
  accessToken: string | null,
  keyword: string,
  page: number,
  limit: number,
  sort: string,
  state: string,
  city: string
) => {
  const { data, isLoading, error, isPlaceholderData } = useQuery({
    queryKey: ['theme', accessToken, keyword, page, limit, sort, state, city],
    queryFn: () =>
      GetTheme({ accessToken, keyword, page, limit, sort, state, city }),
    placeholderData: keepPreviousData,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const theme = data?.data;
  const showLoading = useShowLoading(isLoading);

  useEffect(() => {
    if (!isPlaceholderData) {
      queryClient.prefetchQuery({
        queryKey: ['theme', page + 1],
        queryFn: () =>
          GetTheme({ accessToken, keyword, page, limit, sort, state, city }),
      });
    }
  }, [
    isPlaceholderData,
    theme,
    accessToken,
    keyword,
    page,
    limit,
    sort,
    state,
    city,
  ]);
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
