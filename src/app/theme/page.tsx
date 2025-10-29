'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { mockRooms } from '@/data/mockRooms';
import { useAuthStore } from '@/store/authStore';
import { useQueryStringStore } from '@/store/useQueryStringStore';
import CountListValue from '@/components/@shared/cardList/CountListValue';
import RoomCardContainer from '@/components/@shared/cardList/RoomCardContainer';
import SortDropdown from '@/components/@shared/cardList/SortDropdown';
import GenreFilter from '@/components/@shared/filter/GenreFilter';
import LocationFilter from '@/components/@shared/filter/LocationFilter';
import MapNavigation from '@/components/@shared/filter/MapNavigation';
import FilterContainer from '@/components/@shared/layout/FilterContainer';
import PageContainer from '@/components/@shared/layout/PageContainer';
import SortContainer from '@/components/@shared/layout/SortContainer';
import Pagination from '@/components/@shared/pagination/Pagination';
import CardSkeleton from '@/components/@shared/skeleton/CardSkeleton';
import LineSkeleton from '@/components/@shared/skeleton/SortSkeleton';
import { useGetTheme } from '@/hooks/reactQuery/useGetTheme';
import { usePagination } from '@/hooks/usePagination';
import WhiteMapIcon from '@/public/icons/map/map_white_icon.svg';

export default function RoomPage() {
  const { accessToken } = useAuthStore();
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState('인기순');
  const sortList = ['인기순', '평점순', '리뷰순'];
  const sortLabels: Record<string, string> = {
    인기순: 'likes',
    평점순: 'rating',
    리뷰순: 'reviews',
  };

  const { theme } = useGetTheme(
    accessToken,
    '',
    page,
    10,
    sortLabels[sort],
    '시.도',
    '시.군.구',
    '전체'
  );
  const totalItems = mockRooms ? mockRooms.totalCount : 0;
  const { totalPages } = usePagination(page, totalItems);

  return (
    <PageContainer>
      <FilterContainer />
      {!mockRooms ? (
        <>
          <LineSkeleton className="h-6 mt-6" />
          <CardSkeleton className="mt-6" />
        </>
      ) : (
        <>
          <SortContainer>
            <CountListValue value={mockRooms.totalCount} />
            <SortDropdown
              sort={sort}
              sortList={sortList}
              sortChange={setSort}
            />
            <Link
              href="/theme-map"
              className="rounded-full p-6 bg-brand-main500 absolute -right-24"
            >
              <Image
                src={WhiteMapIcon}
                alt="지도 아이콘"
                width={32}
                height={32}
              />
            </Link>
          </SortContainer>
          <RoomCardContainer
            data={mockRooms.data}
            className="grid-cols-1 md:grid-cols-2"
          />
        </>
      )}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onChange={setPage}
      />
    </PageContainer>
  );
}
