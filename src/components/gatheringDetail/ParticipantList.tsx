import ParticipantUsers from '@/components/gatheringDetail/ParticipantUsers';
import { GatheringMemberDTO } from '@/types/participant/participant.type';

interface ParticipantListProps {
  capacity: number;
  gatheringMember: GatheringMemberDTO['get'][];
}

export default function ParticipantList({
  capacity,
  gatheringMember,
}: ParticipantListProps) {
  const findHostName = gatheringMember.find(
    ({ role }) => role === 'HOST'
  )?.nickname;

  const MinLength = 6;
  const participants = [
    ...gatheringMember,
    ...Array.from(
      { length: Math.max(capacity - gatheringMember.length, 0) },
      () => ({
        id: null,
        profileImage: '',
        nickname: '',
        email: '',
        role: '',
      })
    ),
    ...Array.from({ length: Math.max(MinLength - capacity, 0) }, () => ({
      id: null,
      profileImage: '',
      nickname: null,
      email: '',
      role: '',
    })),
  ];

  const getBgClass = (nickname: string | null) => {
    if (nickname === '') return '!bg-line-Gray';
    if (nickname === null) return '!bg-line-secondDarkGray';
    return 'bg-brand-main500';
  };

  return (
    <div className="flex flex-col mt-14">
      <div className="flex items-center gap-2">
        <span className="w-1 h-[30px] bg-line-lightGray" />
        <p className="text-[28px]/[38px] tracking-[-2.5%] text-font-baseWhite font-semibold">
          모임 참여자
        </p>
      </div>
      <div className="flex items-center mt-6 justify-between">
        {participants.map((user: GatheringMemberDTO['get'], index: number) => (
          <div
            key={index}
            className={`relative min-w-[203px] min-h-[308px] flex flex-col items-center ${getBgClass(user.nickname)}`}
          >
            <div
              className={`bg-line-white w-full h-[175px] absolute top-[75px] ${getBgClass(user.nickname)}`}
            />
            <div
              className={`bg-brand-sub300 w-full h-1 absolute top-[243px] ${getBgClass(user.nickname)}`}
            />
            <ParticipantUsers list={user} leaderCheck={findHostName} />
          </div>
        ))}
      </div>
    </div>
  );
}
