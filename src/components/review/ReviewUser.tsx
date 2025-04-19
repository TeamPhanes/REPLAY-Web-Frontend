import Image from 'next/image';
import { periodYearMonthDay } from '@/utils/dateChange';

interface ReviewUserProps {
  userImage: string;
  userNickname: string;
  createdAt: string;
  success: '성공' | '실패';
  hint: number;
  playUser: number;
}

export default function ReviewUser({
  userImage,
  userNickname,
  createdAt,
  success,
  hint,
  playUser,
}: ReviewUserProps) {
  return (
    <>
      <div className="flex items-center gap-1 pl-6 pr-1">
        <Image
          src={userImage}
          alt={userNickname}
          width={20}
          height={20}
          className="h-5 w-5 rounded-full border-[1px] border-mainBlue shadow-sm"
        />
        <p className="text-base font-normal tracking-[-2.5%] text-tag">
          {userNickname}
        </p>
      </div>
      <div className="flex gap-1">
        <p className="text-xs/[18px] font-normal tracking-[-2.5%] text-tag">
          {periodYearMonthDay(createdAt)}
        </p>
        <p className="text-xs/[18px] font-normal tracking-[-2.5%] text-tag">
          {success}
        </p>
        <p className="text-xs/[18px] font-normal tracking-[-2.5%] text-tag">{`사용힌트 : ${hint}`}</p>
        <p className="text-xs/[18px] font-normal tracking-[-2.5%] text-tag">{`플레이 인원 : ${playUser}`}</p>
      </div>
    </>
  );
}
