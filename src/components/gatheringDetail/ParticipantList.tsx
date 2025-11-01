import ParticipantUsers from '@/components/gatheringDetail/ParticipantUsers';
import { GatheringMemberDTO } from '@/types/participant/participant.type';

interface ParticipantListProps {
  gatheringMember: GatheringMemberDTO['get'][];
  leader: string;
}

export default function ParticipantList({
  gatheringMember,
  leader,
}: ParticipantListProps) {
  return (
    <div className="flex flex-col mt-14">
      <div className="flex items-center gap-2">
        <span className="w-1 h-[30px] bg-line-lightGray" />
        <p className="text-[28px]/[38px] tracking-[-2.5%] text-font-baseWhite font-semibold">
          모임 참여자
        </p>
      </div>
      <div className="flex items-center mt-6 justify-between">
        {gatheringMember.map(
          (user: GatheringMemberDTO['get'], index: number) => (
            <div
              key={index}
              className={`relative min-w-[203px] min-h-[308px] flex flex-col items-center ${user.nickname ? 'bg-brand-main500' : 'bg-line-Gray'}`}
            >
              <div
                className={`bg-line-white w-full h-[175px] absolute top-[75px] ${user.nickname ? '' : '!bg-line-Gray'}`}
              />
              <div
                className={`bg-brand-sub300 w-full h-1 absolute top-[243px] ${user.nickname ? '' : '!bg-line-Gray'}`}
              />
              <ParticipantUsers list={user} leaderCheck={leader} />
            </div>
          )
        )}
      </div>
    </div>
  );
}
