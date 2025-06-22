import { useQuery } from '@tanstack/react-query';
import {
  GetDateGathering,
  GetGatheringDetail,
  GetHostGathering,
} from '@/axios/gathering';
import { useShowLoading } from '@/hooks/useShowLoading';

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

export const useGetHostGathering = (
  accessToken: string | null,
  hostName: string,
  id: string | string[]
) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['hostGathering', hostName],
    queryFn: () => GetHostGathering(accessToken, hostName, Number(id)),
    enabled: !!hostName,
    staleTime: 1000 * 60 * 5,
  });

  const hostGathering = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { hostGathering, isLoading, showLoading, error };
};

export const useGetDateGathering = (
  accessToken: string | null,
  dateTime: string,
  id: string | string[]
) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['dateGathering', dateTime],
    queryFn: () => GetDateGathering(accessToken, dateTime, Number(id)),
    enabled: !!dateTime,
    staleTime: 1000 * 60 * 5,
  });

  const dateGathering = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { dateGathering, isLoading, showLoading, error };
};
