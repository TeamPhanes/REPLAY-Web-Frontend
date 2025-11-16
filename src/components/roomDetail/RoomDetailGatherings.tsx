import Image from 'next/image';
import Link from 'next/link';
import OtherGatheringCard from '@/components/@shared/cardList/OtherGatheringCard';
import EmptySearchResult from '@/components/search/EmptySearchResult';
import { OtherGatheringDTO } from '@/types/gathering/gathering.type';
import ChevronRight from '@/public/icons/arrow/chevron_right.svg';

interface RoomDetailGatheringsProps {
  data: OtherGatheringDTO['get']['data'];
}

export default function RoomDetailGatherings({
  data,
}: RoomDetailGatheringsProps) {
  return (
    <>
      <div className="mt-16 flex justify-between">
        <div className="flex items-center gap-2">
          <span className="w-1 h-[30px] bg-line-lightGray" />
          <p className="text-[28px]/[38px] tracking-[-2.5%] text-font-baseWhite font-semibold">
            모임
          </p>
        </div>
        <Link href="/gathering" className="flex items-center gap-[2px]">
          <p className="text-sm font-normal tracking-[-2.5%] text-font-baseWhite">
            이 방탈출 모임 더 보기
          </p>
          <Image
            src={ChevronRight}
            alt="더 보기 아이콘"
            width={18}
            height={18}
          />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
        {data &&
          data.map((gathering) => (
            <OtherGatheringCard key={gathering.id} gathering={gathering} />
          ))}
      </div>
      <div className="w-full">
        {data && data.length === 0 && <EmptySearchResult />}
      </div>
    </>
  );
}
