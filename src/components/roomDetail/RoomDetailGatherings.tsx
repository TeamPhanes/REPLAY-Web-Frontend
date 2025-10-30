import Image from 'next/image';
import Link from 'next/link';
import { mockGatherings } from '@/data/mockGatherings';
import GatheringCardContainer from '@/components/@shared/cardList/GatheringCardContainer';
import ChevronRight from '@/public/icons/arrow/chevron_right.svg';

interface RoomDetailGatheringsProps {
  id: string | string[];
}

export default function RoomDetailGatherings({
  id,
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
      <GatheringCardContainer data={mockGatherings.data.slice(0, 2)} />
    </>
  );
}
