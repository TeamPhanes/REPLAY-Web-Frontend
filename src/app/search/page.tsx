import GenreFilter from '@/components/@shared/filter/GenreFilter';
import LocationFilter from '@/components/@shared/filter/LocationFilter';
import FilterContainer from '@/components/@shared/layout/FilterContainer';
import PageContainer from '@/components/@shared/layout/PageContainer';
import SearchBar from '@/components/@shared/search/SearchBar';
import SearchResults from '@/components/search/SearchResults';

export default function SearchPage() {
  return (
    <PageContainer>
      <SearchBar />
      <FilterContainer>
        <LocationFilter />
        <GenreFilter />
      </FilterContainer>
      <SearchResults />
    </PageContainer>
  );
}
