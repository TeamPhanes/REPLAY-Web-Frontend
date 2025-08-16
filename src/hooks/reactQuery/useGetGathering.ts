'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { GetGathering, GetGatheringDetail } from '@/axios/gathering';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useGetGathering = (
  accessToken: string | null,
  keyword: string,
  page: number,
  limit: number,
  sort: string,
  state: string,
  city: string,
  genre: string
) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [
      'gathering',
      accessToken,
      keyword,
      page,
      limit,
      sort,
      state,
      city,
      genre,
    ],
    queryFn: () =>
      GetGathering({
        accessToken,
        keyword,
        page,
        limit,
        sort,
        state,
        city,
        genre,
      }),
    retry: false,
    staleTime: 1000 * 60 * 5,
    placeholderData: keepPreviousData,
  });

  const gathering = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { gathering, isLoading, showLoading, error };
};

export const useGetGatheringDetail = (id: string | string[]) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['gatheringDetail', id],
    queryFn: () => GetGatheringDetail(id),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const gatheringDetail = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { gatheringDetail, isLoading, showLoading, error };
};
