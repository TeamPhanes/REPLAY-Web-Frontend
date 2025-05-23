'use client';

import { useQuery } from '@tanstack/react-query';
import { GetTheme, GetThemeDetail } from '@/axios/theme';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useGetTheme = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['theme'],
    queryFn: () => GetTheme(),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const theme = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { theme, isLoading, showLoading, error };
};

export const useGetThemeDetail = (id: string | string[]) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['themeDetail'],
    queryFn: () => GetThemeDetail(id),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const themeDetail = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { themeDetail, isLoading, showLoading, error };
};
