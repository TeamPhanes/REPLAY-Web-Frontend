import CountListValue from '@/components/@shared/cardList/CountListValue';
import RoomCardSection from '@/components/@shared/cardList/RoomCardSection';
import SortDropdown from '@/components/@shared/cardList/SortDropdown';
import GenreFilter from '@/components/@shared/filter/GenreFilter';
import LocationFilter from '@/components/@shared/filter/LocationFilter';
import MapNavigation from '@/components/@shared/filter/MapNavigation';
import FilterContainer from '@/components/@shared/layout/FilterContainer';
import PageContainer from '@/components/@shared/layout/PageContainer';
import SortContainer from '@/components/@shared/layout/SortContainer';
import SearchBar from '@/components/@shared/search/SearchBar';

export default function RoomPage() {
  return (
    <PageContainer>
      <SearchBar />
      <FilterContainer>
        <LocationFilter />
        <GenreFilter />
        <MapNavigation target="room" />
      </FilterContainer>
      <SortContainer>
        <CountListValue value={300} />
        <SortDropdown />
      </SortContainer>
      <RoomCardSection />
    </PageContainer>
  );
}
