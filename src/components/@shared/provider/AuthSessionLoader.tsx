'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';

export default function AuthSessionLoader() {
  const setAccessToken = useAuthStore((state) => state.setAccessToken);
  const refreshAccessToken = useAuthStore((state) => state.refreshAccessToken);

  useEffect(() => {
    const { accessToken } = useAuthStore.getState();
    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, [setAccessToken]);

  useEffect(() => {
    const { accessToken } = useAuthStore.getState();
    if (!accessToken) {
      refreshAccessToken();
    }
  }, [refreshAccessToken]);

  return null;
}
