'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { GetSearchTheme } from '@/axios/theme';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useGetSearchTheme = (
  keyword: string,
  state: string,
  city: string
) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['searchTheme', keyword, state, city],
    queryFn: () => GetSearchTheme(keyword, state, city),
    placeholderData: keepPreviousData,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const searchTheme = data?.data;
  const showLoading = useShowLoading(isLoading);

  return {
    searchTheme,
    isLoading,
    showLoading,
    error,
  };
};
