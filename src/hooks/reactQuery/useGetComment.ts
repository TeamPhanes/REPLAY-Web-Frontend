'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { GetComment } from '@/axios/comment';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useGetComment = (gatheringId: string | string[], sort: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['comment', gatheringId, sort],
    queryFn: () => GetComment({ id: gatheringId, sort }),
    retry: false,
    staleTime: 1000 * 60 * 5,
    placeholderData: keepPreviousData,
  });

  const comment = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { comment, isLoading, showLoading, error };
};
