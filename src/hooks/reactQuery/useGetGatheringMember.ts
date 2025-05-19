'use client';

import { useQuery } from '@tanstack/react-query';
import { GetGatheringMember } from '@/axios/member';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useGetGatheringMember = (gatheringId: string | string[]) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['gatheringMember', gatheringId],
    queryFn: () => GetGatheringMember({ id: gatheringId }),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const gatheringMember = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { gatheringMember, isLoading, showLoading, error };
};
