import Image from 'next/image';
import Link from 'next/link';
import GatheringCardContainer from '@/components/@shared/cardList/GatheringCardContainer';
import ChevronGrayRight from '@/public/icons/detail/chevron_gray_right.svg';

interface RoomDetailGatheringsProps {
  id: string | string[];
}

export default function RoomDetailGatherings({
  id,
}: RoomDetailGatheringsProps) {
  return (
    <>
      <div className="mt-6 flex justify-end">
        <Link href="/gathering" className="flex items-center gap-1">
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
        </Link>
      </div>

      <div className="mt-6">
        <GatheringCardContainer data={[]} />
      </div>
    </>
  );
}
