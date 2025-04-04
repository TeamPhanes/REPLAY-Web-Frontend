import Image from 'next/image';
import LeaderBadge from '@/public/icons/detail/leader_badge.svg';
import { periodYearMonthDay } from '@/src/utils/dateChange';

interface ParticipantUsersProps {
  userImage: string;
  nickname: string;
  leaderCheck: string;
  updateAt: string;
  createdAt: string;
  comment: string;
}

export default function ParticipantUsers({
  userImage,
  nickname,
  leaderCheck,
  updateAt,
  createdAt,
  comment,
}: ParticipantUsersProps) {
  if (!nickname) return null;

  return (
    <>
      <Image
        src={userImage}
        alt={nickname}
        width={80}
        height={80}
        quality={100}
        className={`h-20 w-20 rounded-full shadow-md ${userImage ? '' : 'bg-setfont'}`}
      />
      <div className="flex flex-col gap-2">
        <div className="flex w-[130px] items-center gap-1">
          <p className="text-2xl/[34px] font-semibold tracking-[-2.5%] text-basefont">
            {nickname}
          </p>
          <Image
            src={LeaderBadge}
            alt="방장 뱃지"
            width={24}
            height={24}
            className={`h-6 w-6 ${leaderCheck !== nickname ? 'hidden' : ''}`}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <p className="text-xs/[18px] font-normal tracking-[-2.5%] text-basefont">
              수정 날짜
            </p>
            <p className="text-xs/[18px] font-normal tracking-[-2.5%] text-basefont">
              {periodYearMonthDay(updateAt)}
            </p>
          </div>
          <div className="flex gap-2">
            <p className="text-xs/[18px] font-normal tracking-[-2.5%] text-basefont">
              생성 날짜
            </p>
            <p className="text-xs/[18px] font-normal tracking-[-2.5%] text-basefont">
              {periodYearMonthDay(createdAt)}
            </p>
          </div>
        </div>
      </div>
      <p className="line-clamp-3 h-20 w-[284px] text-base font-normal tracking-[-2.5%] text-basefont">
        {comment}
      </p>
    </>
  );
}
