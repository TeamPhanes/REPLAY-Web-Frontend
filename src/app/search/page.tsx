import { Suspense } from 'react';
import GenreFilter from '@/components/@shared/filter/GenreFilter';
import LocationFilter from '@/components/@shared/filter/LocationFilter';
import FilterContainer from '@/components/@shared/layout/FilterContainer';
import PageContainer from '@/components/@shared/layout/PageContainer';
import SearchResults from '@/components/search/SearchResults';

export default function SearchPage() {
  return (
    <PageContainer>
      <FilterContainer>
        <LocationFilter align="start" />
        <GenreFilter />
      </FilterContainer>
      <Suspense>
        <SearchResults />
      </Suspense>
    </PageContainer>
  );
}
