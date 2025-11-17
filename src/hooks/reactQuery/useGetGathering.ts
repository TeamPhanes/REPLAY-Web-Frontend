'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { GetGathering } from '@/axios/gathering';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useGetGathering = (
  accessToken: string | null,
  locations: string[],
  genres: string[],
  page: number,
  size: number
) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['gathering', accessToken, locations, genres, page, size],
    queryFn: () =>
      GetGathering({
        accessToken,
        locations,
        genres,
        page,
        size,
      }),
    retry: false,
    staleTime: 1000 * 60 * 5,
    placeholderData: keepPreviousData,
  });

  const gathering = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { gathering, isLoading, showLoading, error };
};
