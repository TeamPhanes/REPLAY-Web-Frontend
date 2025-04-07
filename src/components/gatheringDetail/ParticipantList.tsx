import { mockParticipants } from '@/src/data/mockParticipants';
import AchievementBadge from './AchievementBadge';
import ParticipantUsers from './ParticipantUsers';

export default function ParticipantList() {
  const list = mockParticipants;
  const minLength = 6;

  while (list.length < minLength) {
    list.push({
      nickname: '',
      image: '',
      updateAt: '',
      createdAt: '',
      comment: '',
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
          <ParticipantUsers
            userImage={user.image}
            nickname={user.nickname}
            leaderCheck={list[0].nickname}
            updateAt={user.updateAt}
            createdAt={user.createdAt}
            comment={user.comment}
          />
          <AchievementBadge
            nickname={user.nickname}
            achievement={user.representAchievement}
          />
        </div>
      ))}
    </div>
  );
}
