'use client';

import { useQuery } from '@tanstack/react-query';
import { GetGathering, GetGatheringDetail } from '@/axios/gathering';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useGetGathering = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['gathering'],
    queryFn: () => GetGathering(),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const gathering = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { gathering, isLoading, showLoading, error };
};

export const useGetGatheringDetail = (id: string | string[]) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['gatheringDetail'],
    queryFn: () => GetGatheringDetail(id),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const gatheringDetail = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { gatheringDetail, isLoading, showLoading, error };
};
