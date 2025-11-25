'use client';

import { useState } from 'react';
import Image from 'next/image';
import ValueDropdown from '@/components/@shared/dropdown/ValueDropdown';
import PageContainer from '@/components/@shared/layout/PageContainer';
import RankingHeader from '@/components/ranking/RankingHeader';
import RankingMyCard from '@/components/ranking/RankingMyCard';
import RankingRow from '@/components/ranking/RankingRow';
import StatCard from '@/components/ranking/StatCard';
import { quarterList, yearsList } from '@/constants/ranking/filterList';
import { useOpen } from '@/hooks/useOpen';
import GrayChevronDown from '@/public/icons/arrow/chevron_gray_down.svg';

export default function RankingPage() {
  const [year, setYear] = useState(2025);
  const [quarter, setQuarter] = useState(3);
  const { isOpen: isYearOpen, toggleOpen: toggleYearOpen } = useOpen();

  const rankingList = [
    {
      rank: 1,
      nickname: '김말미잘',
      score: 138,
      theme: '추리',
      prevRank: '5위',
    },
    { rank: 2, nickname: '박멍게', score: 126, theme: '추리', prevRank: '5위' },
    { rank: 3, nickname: '유성게', score: 138, theme: '추리', prevRank: '5위' },
    { rank: 4, nickname: '홍돌돔', score: 104, theme: '추리', prevRank: '5위' },
    { rank: 5, nickname: '김방어', score: 138, theme: '추리', prevRank: '5위' },
  ];

  return (
    <PageContainer>
      <div className="flex items-center gap-10">
        <ValueDropdown
          list={yearsList}
          isOpen={isYearOpen}
          selected={year}
          onOpenChange={toggleYearOpen}
          onClickHandler={setYear}
          marginTop={14}
          align="center"
        >
          <div className="flex items-center gap-[2px] py-[6px] px-1 border-b-[1px] border-line-white cursor-pointer">
            <p>{year}</p>
            <Image
              src={GrayChevronDown}
              alt="정렬 더보기"
              width={18}
              height={18}
              className={`h-[18px] w-[18px] transition-transform transform duration-300 ${isYearOpen ? 'rotate-180' : 'rotate-0'}`}
            />
          </div>
        </ValueDropdown>
        <div className="gap-10 flex items-center">
          {quarterList.map(({ value, label }) => {
            return (
              <button
                key={value}
                type="button"
                onClick={() => setQuarter(value)}
              >
                <span
                  className={`${quarter === value ? 'text-brand-sub500' : ''} relative md:inline-block group text-base font-semibold tracking-[-2.5%] hidden duration-300`}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-card-white rounded-lg py-20 px-32 mt-3 flex justify-between">
        <StatCard
          value={87}
          title="이번 분기 성사된 모임의 갯 수"
          desc="평균 4~6명의 모임이 많았어요."
        />
        <StatCard value={378} title="총 리뷰수" />
        <StatCard value={1568} title="좋아요 수" />
      </div>

      <RankingMyCard
        rank={32}
        nickname="김말미잘"
        score={16}
        theme="추리"
        prevRank="5위"
      />

      <RankingHeader />

      {rankingList.map((item) => (
        <RankingRow key={item.rank} {...item} />
      ))}
    </PageContainer>
  );
}
