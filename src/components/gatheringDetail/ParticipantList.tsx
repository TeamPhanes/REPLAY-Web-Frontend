import { mockParticipants } from '@/data/mockParticipants';
import AchievementBadge from '@/components/gatheringDetail/AchievementBadge';
import ParticipantUsers from '@/components/gatheringDetail/ParticipantUsers';

export default function ParticipantList() {
  const list = mockParticipants;
  const minLength = 6;

  while (list.length < minLength) {
    list.push({
      image: '',
      updatedAt: '',
      createdAt: '',
      nickname: '',
      gender: '',
      genderMark: false,
      email: '',
      emailMark: false,
      comment: '',
      totalGathering: 0,
      totalMakeGathering: 0,
      totalTheme: 0,
      successCount: 0,
      failCount: 0,
      representAchievement: [''],
    });
  }

  return (
    <div className="absolute right-0 top-[480px] flex h-[712px] flex-col justify-between">
      {list.map((user, index) => (
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
