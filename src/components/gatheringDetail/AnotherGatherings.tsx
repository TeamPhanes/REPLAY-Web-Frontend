import Image from 'next/image';
import Link from 'next/link';
import { useAuthStore } from '@/store/authStore';
import GatheringCardContainer from '@/components/@shared/cardList/GatheringCardContainer';
import Loading from '@/components/@shared/loading/Loading';
import { useGetDateGathering } from '@/hooks/reactQuery/useGetGatheringDetail';
import { GatheringDTO } from '@/types/gathering/gathering.type';
import ArrowIcon from '@/public/icons/arrow/chevron_right.svg';

interface AnotherGatheringsProps {
  title: string;
  data: GatheringDTO['get'][];
}

export default function AnotherGatherings({
  title,
  data,
}: AnotherGatheringsProps) {
  return (
    <div className="mt-14">
      <div className="flex items-center gap-2">
        <span className="h-[30px] w-1 bg-line-lightGray" />
        <p className="text-[28px]/[38px] font-semibold tracking-[-2.5%] text-font-baseWhite">
          {title}
        </p>
        <Link
          href="/gathering"
          className="absolute right-0 flex items-center gap-[2px]"
        >
          <p className="text-sm font-normal tracking-[-2.5%] text-font-baseWhite">
            모임 더 보기
          </p>
          <Image src={ArrowIcon} alt="더 보기 아이콘" width={18} height={18} />
        </Link>
      </div>
      <div>
        <GatheringCardContainer data={data} />
      </div>
    </div>
  );
}
