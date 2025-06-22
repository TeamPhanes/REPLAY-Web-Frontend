'use client';

import { useQuery } from '@tanstack/react-query';
import { GetGathering } from '@/axios/gathering';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useGetGathering = (
  accessToken: string | null,
  keyword: string,
  page: number,
  limit: number,
  sort: string,
  state: string,
  city: string
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
    ],
    queryFn: () =>
      GetGathering({ accessToken, keyword, page, limit, sort, state, city }),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const gathering = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { gathering, isLoading, showLoading, error };
};
