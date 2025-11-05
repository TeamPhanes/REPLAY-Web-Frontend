import Image from 'next/image';
import { mockOtherUser } from '@/data/mockUser';
import Loading from '@/components/@shared/loading/Loading';
import IdCardModal from '@/components/gatheringDetail/modal/IdCardModal';
import { useGetOtherUser } from '@/hooks/reactQuery/useGetOtherUser';
import { useOpen } from '@/hooks/useOpen';
import { GatheringMemberDTO } from '@/types/participant/participant.type';
import { periodYearMonthDay } from '@/utils/dateChange';
import LeaderBadge from '@/public/icons/detail/leader_badge.svg';
import Logo from '@/public/images/Replay_Main_Logo.svg';

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
  // if (showLoading) return <Loading isLoading={isLoading} />;

  if (!list.nickname) return null;
  return (
    <div
      className="flex flex-col cursor-pointer items-center z-10 h-full"
      onClick={openModal}
    >
      <p className="text-center text-[10px]/[13px] tracking-[0.2em] text-font-baseWhite font-semibold mt-3">
        PLAY CARD
      </p>
      <Image
        src={list.image}
        alt={list.nickname}
        width={127}
        height={155}
        quality={100}
        className="w-[127px] h-[155px] mt-3"
      />
      <div className="flex items-center gap-1 mt-3">
        <Image
          src={LeaderBadge}
          alt="방장 뱃지"
          width={16}
          height={16}
          className={`h-4 w-4 ${leaderCheck !== list.nickname ? 'hidden' : ''}`}
        />
        <p className="text-xs font-semibold tracking-[-2.5%] text-font-baseBlack truncate">
          {list.nickname}
        </p>
      </div>
      {list.emailMark ? (
        <p className="text-[5px]/[8px] tracking-[-2.5%] text-font-thirdBlack font-normal mt-1">
          {list.email}
        </p>
      ) : null}
      <Image
        src={Logo}
        alt="RePLAY 로고"
        width={163}
        height={42}
        className="absolute bottom-2"
      />
      <IdCardModal
        openModal={isOpen}
        closeModal={closeModal}
        userData={mockOtherUser}
      />
    </div>
  );
}
