'use client';

import { ReactNode } from 'react';
import { getQueryClient } from '@/libs/react-query-client';
import { HydrationBoundary, QueryClientProvider } from '@tanstack/react-query';

interface QueryProviderProps {
  children: ReactNode;
  hydratedState?: unknown;
}

export default function QueryProvider({
  children,
  hydratedState,
}: QueryProviderProps) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={hydratedState}>{children}</HydrationBoundary>
    </QueryClientProvider>
  );
}
