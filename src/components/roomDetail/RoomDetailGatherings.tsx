import { mockGatherings } from '@/src/data/mockGatherings';
import Image from 'next/image';
import ChevronGrayRight from '@/public/icons/detail/chevron_gray_right.svg';
import Link from 'next/link';
import GatheringCardContainer from '@/components/@shared/cardList/GatheringCardContainer';

interface RoomDetailGatheringsProps {
  id: string | string[];
}

export default function RoomDetailGatherings({
  id,
}: RoomDetailGatheringsProps) {
  const filteredGatherings = mockGatherings
    .filter((gatherings) => gatherings.themeId === Number(id))
    .slice(0, 2);

  return (
    <>
      <Link href="/gathering">
        <div className="mt-6 flex items-center justify-end gap-1">
          <p className="text-2xl/[34px] font-normal tracking-[-2.5%] text-setfont">
            이 방탈출 모임 더 보기
          </p>
          <Image
            src={ChevronGrayRight}
            alt="더 보기 아이콘"
            width={24}
            height={24}
            className="h-6 w-6"
          />
        </div>
      </Link>
      <div className="mt-6 flex justify-between">
        <GatheringCardContainer data={filteredGatherings} />
      </div>
    </>
  );
}
