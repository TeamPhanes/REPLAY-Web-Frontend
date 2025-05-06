'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';

export default function AuthSessionLoader() {
  const { accessToken, refreshAccessToken } = useAuthStore();

  useEffect(() => {
    if (!accessToken) {
      refreshAccessToken();
    }
  }, [accessToken, refreshAccessToken]);

  return null;
}
