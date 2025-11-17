import { useQuery } from '@tanstack/react-query';
import { GetDateGathering, GetGatheringDetail } from '@/axios/gathering';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useGetGatheringDetail = (
  accessToken: string | null,
  id: string | string[]
) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['gatheringDetail', accessToken, id],
    queryFn: () => GetGatheringDetail(accessToken, id),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const gatheringDetail = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { gatheringDetail, isLoading, showLoading, error };
};

export const useGetDateGathering = (
  accessToken: string | null,
  dateTime: string,
  options?: { enabled?: boolean }
) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['dateGathering', accessToken, dateTime],
    queryFn: () => GetDateGathering(accessToken, dateTime),
    enabled: !!dateTime && options?.enabled,
    staleTime: 1000 * 60 * 5,
  });

  const dateGathering = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { dateGathering, isLoading, showLoading, error };
};
