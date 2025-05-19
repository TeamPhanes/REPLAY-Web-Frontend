'use client';

import { useQuery } from '@tanstack/react-query';
import { GetMyComment } from '@/axios/user';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useMyComment = (type: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['MyComment', type],
    queryFn: () => GetMyComment(type),
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const MyComment = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { MyComment, isLoading, showLoading, error };
};
