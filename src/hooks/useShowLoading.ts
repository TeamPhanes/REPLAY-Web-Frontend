'use client';

import { useEffect, useState } from 'react';

export const useShowLoading = (isLoading: boolean) => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [isLoading]);

  return showLoading;
};
