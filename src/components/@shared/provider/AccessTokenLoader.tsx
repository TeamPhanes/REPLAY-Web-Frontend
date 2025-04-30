'use client';

import { useEffect } from 'react';
import { useUserStore } from '@/store/userStore';

export default function AccessTokenLoader() {
  const setAccessToken = useUserStore((state) => state.setAccessToken);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setAccessToken(token);
    }
  }, [setAccessToken]);

  return null;
}
