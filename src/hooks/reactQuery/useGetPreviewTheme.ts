'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { GetPreviewTheme } from '@/axios/theme';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useGetPreviewTheme = (
  page: number,
  size: number,
  genre: string,
  sort?: string[]
) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['previewTheme', page, size, genre, sort],
    queryFn: () => GetPreviewTheme(page, size, genre, sort),
    retry: false,
    staleTime: 1000 * 60 * 5,
    placeholderData: keepPreviousData,
  });

  const previewTheme = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { previewTheme, isLoading, showLoading, error };
};
