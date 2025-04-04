import PageContainer from '@/components/@shared/layout/PageContainer';
import SearchBar from '@/components/@shared/search/SearchBar';
import RoutingMenu from '@/components/homePage/RoutingMenu';
import TopCarouselContainer from '@/components/homePage/TopCarouselContainer';
import MiddleCarouselContainer from '@/components/homePage/MiddleCarouselContainer';
import BottomCarouselContainer from '@/components/homePage/BottomCarouselContainer';

export default function HomePage() {
  return (
    <PageContainer>
      <SearchBar />
      <RoutingMenu />
      <TopCarouselContainer />
      <MiddleCarouselContainer />
      <BottomCarouselContainer />
    </PageContainer>
  );
}
