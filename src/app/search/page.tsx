import { Suspense } from 'react';
import FilterContainer from '@/components/@shared/layout/FilterContainer';
import PageContainer from '@/components/@shared/layout/PageContainer';
import SearchResults from '@/components/search/SearchResults';

export default function SearchPage() {
  return (
    <PageContainer>
      <FilterContainer />
      <Suspense>
        <SearchResults />
      </Suspense>
    </PageContainer>
  );
}
