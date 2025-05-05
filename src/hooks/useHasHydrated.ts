'use client';

import { useEffect } from 'react';
import { appStateStore } from '@/store/appStateStore';

export function useHasHydrated() {
  const isAppHydrated = appStateStore((state) => state.isAppHydrated);
  const setAppHydrated = appStateStore((state) => state.setAppHydrated);

  useEffect(() => {
    setAppHydrated();
  }, [setAppHydrated]);

  return isAppHydrated;
}
