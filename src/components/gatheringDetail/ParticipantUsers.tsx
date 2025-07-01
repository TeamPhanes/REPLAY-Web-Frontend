import Image from 'next/image';
import Loading from '@/components/@shared/loading/Loading';
import IdCardModal from '@/components/gatheringDetail/modal/IdCardModal';
import { useGetOtherUser } from '@/hooks/reactQuery/useGetOtherUser';
import { useOpen } from '@/hooks/useOpen';
import { GatheringMemberDTO } from '@/types/participant/participant.type';
import { periodYearMonthDay } from '@/utils/dateChange';
import LeaderBadge from '@/public/icons/detail/leader_badge.svg';

interface ParticipantUsersProps {
  list: GatheringMemberDTO['get'];
  leaderCheck: string;
}

export default function ParticipantUsers({
  list,
  leaderCheck,
}: ParticipantUsersProps) {
  const { isOpen, openModal, closeModal } = useOpen();
  const { otherUser, showLoading, isLoading } = useGetOtherUser(list.nickname);
  if (showLoading) return <Loading isLoading={isLoading} />;

  if (!list.nickname) return null;
  return (
    <div className="flex cursor-pointer items-center" onClick={openModal}>
      <Image
        src={list.image}
        alt={list.nickname}
        width={80}
        height={80}
        quality={100}
        className={`h-20 w-20 rounded-full border-2 border-mainBlue shadow-md ${list.image ? '' : 'bg-setfont'}`}
      />
      <div className="ml-3 flex flex-col gap-2">
        <div className="flex w-[130px] items-center gap-1">
          <p className="text-2xl/[34px] font-semibold tracking-[-2.5%] text-basefont truncate">
            {list.nickname}
          </p>
          <Image
            src={LeaderBadge}
            alt="방장 뱃지"
            width={24}
            height={24}
            className={`h-6 w-6 ${leaderCheck !== list.nickname ? 'hidden' : ''}`}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <p className="text-xs/[18px] font-normal tracking-[-2.5%] text-basefont">
              수정 날짜
            </p>
            <p className="text-xs/[18px] font-normal tracking-[-2.5%] text-basefont">
              {periodYearMonthDay(list.updatedAt)}
            </p>
          </div>
          <div className="flex gap-2">
            <p className="text-xs/[18px] font-normal tracking-[-2.5%] text-basefont">
              생성 날짜
            </p>
            <p className="text-xs/[18px] font-normal tracking-[-2.5%] text-basefont">
              {periodYearMonthDay(list.createdAt)}
            </p>
          </div>
        </div>
      </div>
      <p className="line-clamp-3 h-20 w-[284px] text-base font-normal tracking-[-2.5%] text-basefont">
        {list.comment}
      </p>
      <IdCardModal
        openModal={isOpen}
        closeModal={closeModal}
        userData={otherUser}
      />
    </div>
  );
}
