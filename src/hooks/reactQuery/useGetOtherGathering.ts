'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { GetOtherGathering } from '@/axios/gathering';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useGetOtherGathering = (
  accessToken: string | null,
  id: string | string[],
  size: number
) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['otherGathering', accessToken, id, size],
    queryFn: () => GetOtherGathering(accessToken, id, size),
    retry: false,
    staleTime: 1000 * 60 * 5,
    placeholderData: keepPreviousData,
  });

  const otherGathering = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { otherGathering, isLoading, showLoading, error };
};
