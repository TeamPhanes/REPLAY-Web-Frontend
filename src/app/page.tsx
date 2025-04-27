import PageContainer from '@/components/@shared/layout/PageContainer';
import QueryProvider from '@/components/@shared/provider/QueryProvider';
import SearchBar from '@/components/@shared/search/SearchBar';
import BottomCarouselContainer from '@/components/homePage/BottomCarouselContainer';
import MiddleCarouselContainer from '@/components/homePage/MiddleCarouselContainer';
import RoutingMenu from '@/components/homePage/RoutingMenu';
import TopCarouselContainer from '@/components/homePage/TopCarouselContainer';

export default function HomePage() {
  return (
    <QueryProvider>
      <PageContainer>
        <SearchBar />
        <RoutingMenu />
        <TopCarouselContainer />
        <MiddleCarouselContainer />
        <BottomCarouselContainer />
      </PageContainer>
    </QueryProvider>
  );
}
