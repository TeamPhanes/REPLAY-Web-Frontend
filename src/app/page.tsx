import PageContainer from '../components/@shared/layout/PageContainer';
import SearchBar from '../components/@shared/search/SearchBar';
import RoutingMenu from '../components/homePage/RoutingMenu';
import TopCarousel from '../components/homePage/TopCarousel';

export default function HomePage() {
  return (
    <PageContainer>
      <SearchBar />
      <RoutingMenu />
      <TopCarousel />
    </PageContainer>
  );
}
