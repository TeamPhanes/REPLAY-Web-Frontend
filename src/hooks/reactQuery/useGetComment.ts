'use client';

import { useQuery } from '@tanstack/react-query';
import { GetComment } from '@/axios/comment';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useGetComment = (gatheringId: string | string[]) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['comment', gatheringId],
    queryFn: () => GetComment({ id: gatheringId }),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const comment = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { comment, isLoading, showLoading, error };
};
