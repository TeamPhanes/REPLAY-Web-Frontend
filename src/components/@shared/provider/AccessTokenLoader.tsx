'use client';

import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { GetUser } from '@/axios/user';
import { useUserStore } from '@/components/store/userStore';

export default function AccessTokenLoader() {
  const setAccessToken = useUserStore((state) => state.setAccessToken);
  const setUserInfo = useUserStore((state) => state.setUserInfo);
  const accessToken = useUserStore((state) => state.accessToken);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setAccessToken(token);
    }
  }, [setAccessToken]);

  const { data } = useQuery({
    queryKey: ['userInfo'],
    queryFn: GetUser,
    enabled: !!accessToken,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    if (data) {
      setUserInfo(data.data);
    }
  }, [data, setUserInfo]);
  return null;
}
