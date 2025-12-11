import { useMemo } from 'react';

export function usePagination(
  page: number,
  totalItems: number,
  itemsPerPage: number
) {
  const totalPages = useMemo(
    () => Math.ceil(totalItems / itemsPerPage),
    [totalItems, itemsPerPage]
  );
  const isFirstPage = page === 0;
  const isLastPage = page >= totalPages - 1;

  return { totalPages, isFirstPage, isLastPage };
}
