'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { GetSuggestTheme } from '@/axios/theme';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useGetSuggestTheme = (
  keyword: string,
  size: number,
  options?: { enabled?: boolean }
) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['suggestTheme', keyword, size],
    queryFn: () => GetSuggestTheme(keyword, size),
    placeholderData: keepPreviousData,
    enabled: keyword !== '' && (options?.enabled ?? true),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const suggestTheme = data?.data;
  const showLoading = useShowLoading(isLoading);

  return {
    suggestTheme,
    isLoading,
    showLoading,
    error,
  };
};
