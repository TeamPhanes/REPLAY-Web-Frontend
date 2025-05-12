import Image from 'next/image';
import { ReviewDTO } from '@/types/review/review.type';
import { periodYearMonthDay } from '@/utils/dateChange';

interface ReviewUserProps {
  dataList: ReviewDTO['get'];
}

export default function ReviewUser({ dataList }: ReviewUserProps) {
  const { user, createdAt, success, hint, playUser } = dataList;
  const { name, image } = user;

  return (
    <>
      <div className="flex items-center gap-1 pr-1">
        <Image
          src={image}
          alt={name}
          width={20}
          height={20}
          className="h-5 w-5 rounded-full border-[1px] border-mainBlue shadow-sm"
        />
        <p className="text-base font-normal tracking-[-2.5%] text-tag max-w-40 truncate">
          {name}
        </p>
      </div>
      <div className="flex gap-1 pr-6">
        <p className="text-xs/[18px] font-normal tracking-[-2.5%] text-tag">
          {periodYearMonthDay(createdAt)}
        </p>
        <p className="text-xs/[18px] font-normal tracking-[-2.5%] text-tag">
          {success ? '성공' : '실패'}
        </p>
        <p className="text-xs/[18px] font-normal tracking-[-2.5%] text-tag">{`사용힌트 : ${hint}`}</p>
        <p className="text-xs/[18px] font-normal tracking-[-2.5%] text-tag">{`플레이 인원 : ${playUser}`}</p>
      </div>
    </>
  );
}
