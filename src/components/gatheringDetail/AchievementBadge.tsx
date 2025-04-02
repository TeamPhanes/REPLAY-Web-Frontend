import Image from 'next/image';
import AchievementDefault from '@/public/icons/detail/achievement_default.svg';

interface AchievementBadgeProps {
  nickname: string;
  achievement: string[];
}

export default function AchievementBadge({
  nickname,
  achievement,
}: AchievementBadgeProps) {
  if (!nickname) return null;

  return (
    <div className="mt-9 flex gap-1">
      {Array.from({ length: 3 }, (_, index) => (
        <div
          key={index}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-card shadow-md"
        >
          {achievement[index] ? (
            <Image
              src={achievement[index]}
              alt="업적"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full"
            />
          ) : (
            <Image
              src={AchievementDefault}
              alt="업적 기본 이미지"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          )}
        </div>
      ))}
    </div>
  );
}
