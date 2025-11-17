'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { GetComment } from '@/axios/comment';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useGetComment = (
  gatheringId: string | string[],
  page: number,
  size: number,
  sort: string
) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['comment', gatheringId, page, size, sort],
    queryFn: () => GetComment({ id: gatheringId, page, size, sort }),
    retry: false,
    staleTime: 1000 * 60 * 5,
    placeholderData: keepPreviousData,
  });

  const comment = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { comment, isLoading, showLoading, error };
};
