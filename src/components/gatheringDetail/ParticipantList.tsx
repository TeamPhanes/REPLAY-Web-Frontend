import Loading from '@/components/@shared/loading/Loading';
import AchievementBadge from '@/components/gatheringDetail/AchievementBadge';
import ParticipantUsers from '@/components/gatheringDetail/ParticipantUsers';
import { useGetGatheringMember } from '@/hooks/reactQuery/useGetGatheringMember';
import { GatheringMemberDTO } from '@/types/participant/participant.type';

interface ParticipantListProps {
  id: string | string[];
}

export default function ParticipantList({ id }: ParticipantListProps) {
  const { gatheringMember, isLoading, showLoading } = useGetGatheringMember(id);

  if (showLoading) return <Loading isLoading={isLoading} />;
  const list = gatheringMember;
  const minLength = 6;

  while (gatheringMember.length < minLength) {
    list.push({
      image: '',
      updatedAt: '',
      createdAt: '',
      nickname: '',
      comment: '',
      representAchievement: [''],
    });
  }

  return (
    <div className="absolute right-0 top-[480px] flex h-[712px] flex-col justify-between">
      {list.map((user: GatheringMemberDTO['get'], index: number) => (
        <div
          key={index}
          className={`relative flex h-[112px] w-[702px] items-center rounded-3xl p-4 ${user.nickname ? 'bg-card' : 'bg-spot'}`}
        >
          <ParticipantUsers list={user} leaderCheck={list[0].nickname} />
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
