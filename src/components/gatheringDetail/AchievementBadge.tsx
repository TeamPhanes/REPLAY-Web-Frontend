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
          style={
            type === 'mypage'
              ? { width: '160px', height: '160px' }
              : { width: '44px', height: '44px' }
          }
          className="flex items-center justify-center rounded-full bg-card shadow-md"
        >
          {achievement[index] ? (
            <Image
              src={achievement[index]}
              alt="업적"
              width={type === 'mypage' ? 160 : 44}
              height={type === 'mypage' ? 160 : 44}
              style={
                type === 'mypage'
                  ? { width: '160px', height: '160px' }
                  : { width: '44px', height: '44px' }
              }
              className="rounded-full"
            />
          ) : (
            <Image
              src={AchievementDefault}
              alt="업적 기본 이미지"
              width={type === 'mypage' ? 48 : 24}
              height={type === 'mypage' ? 48 : 24}
              style={
                type === 'mypage'
                  ? { width: '48px', height: '48px' }
                  : { width: '24px', height: '24px' }
              }
            />
          )}
        </div>
      ))}
    </div>
  );
}
