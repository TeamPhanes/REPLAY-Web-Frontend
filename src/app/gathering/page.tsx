import PageContainer from '@/src/components/@shared/layout/PageContainer';
import SearchBar from '@/src/components/@shared/search/SearchBar';
import FilterContainer from '@/src/components/@shared/layout/FilterContainer';
import LocationFilter from '@/src/components/@shared/filter/LocationFilter';
import GenreFilter from '@/src/components/@shared/filter/GenreFilter';
import MapNavigation from '@/src/components/@shared/filter/MapNavigation';
import SortContainer from '@/src/components/@shared/layout/SortContainer';
import CountListValue from '@/src/components/@shared/cardList/CountListValue';
import SortDropdown from '@/src/components/@shared/cardList/SortDropdown';
import GatheringCardSection from '@/src/components/@shared/cardList/GatheringCardSection';

export default function GatheringPage() {
  return (
    <PageContainer>
      <SearchBar />
      <FilterContainer>
        <LocationFilter />
        <GenreFilter />
        <MapNavigation target="gathering" />
      </FilterContainer>
      <SortContainer>
        <CountListValue value={300} />
        <SortDropdown />
      </SortContainer>
      <GatheringCardSection />
    </PageContainer>
  );
}
