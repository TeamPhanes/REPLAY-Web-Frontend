'use client';

import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { useHasHydrated } from '@/hooks/useHasHydrated';

export function useAuthGuard(isLoading: boolean) {
  const { accessToken } = useAuthStore();
  const hasHydrated = useHasHydrated();
  const router = useRouter();

  useEffect(() => {
    if (hasHydrated && accessToken === null) {
      toast.info('로그인 후 이용해주세요', { toastId: 'auth-required' });
      router.push('/login');
    }
  }, [hasHydrated, accessToken, router]);

  const isGuardLoading = !hasHydrated || isLoading || accessToken === null;
  return { isGuardLoading };
}
