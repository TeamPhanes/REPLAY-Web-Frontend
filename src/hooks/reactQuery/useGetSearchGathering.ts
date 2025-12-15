'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { GetSearchGathering } from '@/axios/gathering';
import { useShowLoading } from '@/hooks/useShowLoading';

interface GetSearchGatheringProps {
  accessToken: string | null;
  locations: string[];
  genres: string[];
  size: number;
  keyword: string;
  cursor?: string;
}

export const useGetSearchGathering = ({
  accessToken,
  locations,
  genres,
  size,
  keyword,
  cursor,
}: GetSearchGatheringProps) => {
  const filteredLocations = locations.map((item) =>
    item.endsWith(' 전체') ? item.replace(' 전체', '') : item
  );
  const { data, isLoading, error } = useQuery({
    queryKey: [
      'searchGathering',
      accessToken,
      filteredLocations,
      genres,
      size,
      keyword,
    ],
    queryFn: () =>
      GetSearchGathering({
        accessToken,
        locations: filteredLocations,
        genres,
        size,
        keyword,
      }),
    retry: false,
    staleTime: 1000 * 60 * 5,
    placeholderData: keepPreviousData,
  });

  const searchGathering = data?.data;
  const showLoading = useShowLoading(isLoading);

  return {
    searchGathering,
    isLoading,
    showLoading,
    error,
  };
};
