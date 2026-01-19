'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuthStore } from '@/store/authStore';
import { useQueryStringStore } from '@/store/useQueryStringStore';
import CountListValue from '@/components/@shared/cardList/CountListValue';
import RoomCardContainer from '@/components/@shared/cardList/RoomCardContainer';
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
  const { genreList, districtList } = useQueryStringStore();

  const { theme } = useGetTheme(accessToken, districtList, genreList, page, 12);
  const totalItems = theme ? theme.totalElements : 0;
  const { totalPages } = usePagination(page, totalItems, 12);

  return (
    <PageContainer>
      <FilterContainer setPage={setPage} />
      {!theme ? (
        <>
          <LineSkeleton className="mt-6 h-6" />
          <CardSkeleton className="mt-6" />
        </>
      ) : (
        <>
          <SortContainer>
            <CountListValue value={theme.totalElements} />
            {/* <Link
              href="/theme-map"
              className="rounded-full p-6 bg-brand-main500 absolute -right-24"
            >
              <Image
                src={WhiteMapIcon}
                alt="지도 아이콘"
                width={32}
                height={32}
              />
            </Link> */}
          </SortContainer>
          <RoomCardContainer
            data={theme.content}
            className="grid-cols-1 xl:grid-cols-2"
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
