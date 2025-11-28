'use client';

import { useQuery } from '@tanstack/react-query';
import { GetOtherUser } from '@/axios/user';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useGetOtherUser = (id: number | null) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['otherUser', id],
    queryFn: () => GetOtherUser(id),
    enabled: !!id,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const otherUser = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { otherUser, isLoading, showLoading, error };
};
