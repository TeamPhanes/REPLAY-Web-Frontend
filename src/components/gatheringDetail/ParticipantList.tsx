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
    <div className="mt-14 flex flex-col">
      <div className="flex items-center gap-2">
        <span className="h-[30px] w-1 bg-line-lightGray" />
        <p className="text-[28px]/[38px] font-semibold tracking-[-2.5%] text-font-baseWhite">
          모임 참여자
        </p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        {participants.map((user: GatheringMemberDTO['get'], index: number) => (
          <div
            key={index}
            className={`relative flex min-h-[308px] min-w-[203px] flex-col items-center ${getBgClass(user.nickname)}`}
          >
            <div
              className={`absolute top-[75px] h-[175px] w-full bg-line-white ${getBgClass(user.nickname)}`}
            />
            <div
              className={`absolute top-[243px] h-1 w-full bg-brand-sub300 ${getBgClass(user.nickname)}`}
            />
            <ParticipantUsers list={user} leaderCheck={findHostName} />
          </div>
        ))}
      </div>
    </div>
  );
}
