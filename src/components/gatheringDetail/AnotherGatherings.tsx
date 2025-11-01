import Image from 'next/image';
import Link from 'next/link';
import GatheringCardContainer from '@/components/@shared/cardList/GatheringCardContainer';
import { GatheringDTO } from '@/types/gathering/gathering.type';
import ArrowIcon from '@/public/icons/arrow/chevron_right.svg';

interface AnotherGatheringsProps {
  title: string;
  gatherings: GatheringDTO['get']['data'];
}

export default function AnotherGatherings({
  title,
  gatherings,
}: AnotherGatheringsProps) {
  return (
    <div className="mt-14">
      <div className="flex items-center gap-2">
        <span className="w-1 h-[30px] bg-line-lightGray" />
        <p className="text-[28px]/[38px] tracking-[-2.5%] text-font-baseWhite font-semibold">
          {title}
        </p>
        <Link
          href="/gathering"
          className="flex items-center gap-[2px] absolute right-0"
        >
          <p className="text-sm tracking-[-2.5%] text-font-baseWhite font-normal">
            모임 더 보기
          </p>
          <Image src={ArrowIcon} alt="더 보기 아이콘" width={18} height={18} />
        </Link>
      </div>
      <div>
        <GatheringCardContainer data={gatherings} />
      </div>
    </div>
  );
}
