'use client';

import { useQuery } from '@tanstack/react-query';
import { GetUser } from '@/axios/user';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useUserInfo = (options?: { enabled?: boolean }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['userInfo'],
    queryFn: GetUser,
    enabled: options?.enabled ?? true,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const userInfo = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { userInfo, isLoading, showLoading, error };
};
