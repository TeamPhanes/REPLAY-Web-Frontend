import Image from 'next/image';
import AchievementDefault from '@/public/icons/detail/achievement_default.svg';

interface AchievementBadgeProps {
  nickname: string;
  achievement: string[];
  absoluteLayout: string;
  type?: 'mypage';
}

export default function AchievementBadge({
  nickname,
  achievement,
  absoluteLayout,
  type,
}: AchievementBadgeProps) {
  if (!nickname) return null;

  return (
    <div className={`absolute flex ${absoluteLayout}`}>
      {Array.from({ length: 3 }, (_, index) => (
        <div
          key={index}
          className={`${type === 'mypage' ? 'w-[100px] h-[100px] md:w-40 md:h-40' : 'w-11 h-11'} flex items-center justify-center rounded-full bg-card shadow-md`}
        >
          {achievement[index] ? (
            <Image
              src={achievement[index]}
              alt="업적"
              width={160}
              height={160}
              className={`${type === 'mypage' ? 'w-40 h-40' : 'w-11 h-11'} rounded-full`}
            />
          ) : (
            <Image
              src={AchievementDefault}
              alt="업적 기본 이미지"
              width={48}
              height={48}
              className={`${type === 'mypage' ? 'w-12 h-12' : 'w-6 h-6'}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
