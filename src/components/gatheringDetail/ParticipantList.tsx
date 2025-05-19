import AchievementBadge from '@/components/gatheringDetail/AchievementBadge';
import ParticipantUsers from '@/components/gatheringDetail/ParticipantUsers';
import { GatheringMemberDTO } from '@/types/participant/participant.type';

interface ParticipantListProps {
  gatheringMember: GatheringMemberDTO['get'][];
}

export default function ParticipantList({
  gatheringMember,
}: ParticipantListProps) {
  return (
    <div className="absolute right-0 top-[480px] flex h-[712px] flex-col justify-between">
      {gatheringMember.map((user: GatheringMemberDTO['get'], index: number) => (
        <div
          key={index}
          className={`relative flex h-[112px] w-[702px] items-center rounded-3xl p-4 ${user.nickname ? 'bg-card' : 'bg-spot'}`}
        >
          <ParticipantUsers
            list={user}
            leaderCheck={gatheringMember[0].nickname}
          />
          <AchievementBadge
            nickname={user.nickname}
            achievement={user.representAchievement}
            absoluteLayout="mt-9 bottom-5 right-5 gap-1"
          />
        </div>
      ))}
    </div>
  );
}
