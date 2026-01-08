import { useQuery } from '@tanstack/react-query';
import { GetNoticeDetail } from '@/axios/notice';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useGetNoticeDetail = (id: string | string[]) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['noticeDetail', id],
    queryFn: () => GetNoticeDetail(id),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const noticeDetail = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { noticeDetail, isLoading, showLoading, error };
};
