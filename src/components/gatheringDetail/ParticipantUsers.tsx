import Image from 'next/image';
import IdCardModal from '@/components/gatheringDetail/modal/IdCardModal';
import { useGetOtherUser } from '@/hooks/reactQuery/useGetOtherUser';
import { useOpen } from '@/hooks/useOpen';
import { GatheringMemberDTO } from '@/types/participant/participant.type';
import LeaderBadge from '@/public/icons/detail/leader_badge.svg';
import Logo from '@/public/images/Replay_Main_Logo.svg';

interface ParticipantUsersProps {
  list: GatheringMemberDTO['get'];
  leaderCheck?: string | null;
}

export default function ParticipantUsers({
  list,
  leaderCheck,
}: ParticipantUsersProps) {
  const { isOpen, openModal, closeModal } = useOpen();
  const { otherUser } = useGetOtherUser(list.id);

  if (!list.nickname) return null;
  return (
    <div
      className="z-10 flex h-full cursor-pointer flex-col items-center"
      onClick={openModal}
    >
      <p className="mt-3 text-center text-[10px]/[13px] font-semibold tracking-[0.2em] text-font-baseWhite">
        PLAY CARD
      </p>
      <Image
        src={list.profileImage}
        alt={list.nickname}
        width={127}
        height={155}
        quality={100}
        className="mt-3 h-[155px] w-[127px]"
      />
      <div className="mt-3 flex items-center gap-1">
        <Image
          src={LeaderBadge}
          alt="방장 뱃지"
          width={16}
          height={16}
          className={`h-4 w-4 ${leaderCheck !== list.nickname ? 'hidden' : ''}`}
        />
        <p className="truncate text-xs font-semibold tracking-[-2.5%] text-font-baseBlack">
          {list.nickname}
        </p>
      </div>
      {list.email !== '' ? (
        <p className="mt-1 text-[5px]/[8px] font-normal tracking-[-2.5%] text-font-thirdBlack">
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
        userData={otherUser}
      />
    </div>
  );
}
