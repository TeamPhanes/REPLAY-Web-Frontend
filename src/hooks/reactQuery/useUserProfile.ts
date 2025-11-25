'use client';

import { useQuery } from '@tanstack/react-query';
import { GetMyProfile } from '@/axios/user';
import { useShowLoading } from '@/hooks/useShowLoading';

export const useUserProfile = (options?: { enabled?: boolean }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['userProfile'],
    queryFn: GetMyProfile,
    enabled: options?.enabled ?? true,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  const userProfile = data?.data;
  const showLoading = useShowLoading(isLoading);
  return { userProfile, isLoading, showLoading, error };
};
