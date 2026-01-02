'use client';

import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { GetNotice } from '@/axios/notice';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useGetNotice = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['notice'],
    queryFn: () => GetNotice(),
    retry: false,
    staleTime: 1000 * 60 * 5,
    placeholderData: keepPreviousData,
  });

  const notice = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { notice, isLoading, showLoading, error };
};
