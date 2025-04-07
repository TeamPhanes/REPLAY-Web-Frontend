import Image from 'next/image';
import AchievementDefault from '@/public/icons/detail/achievement_default.svg';

interface AchievementBadgeProps {
  nickname: string;
  achievement: string[];
  type?: 'mypage';
}

export default function AchievementBadge({
  nickname,
  achievement,
  type,
}: AchievementBadgeProps) {
  if (!nickname) return null;

  return (
    <div className="absolute bottom-5 right-5 mt-9 flex gap-1">
      {Array.from({ length: 3 }, (_, index) => (
        <div
          key={index}
          style={
            type === 'mypage'
              ? { width: '120px', height: '120px' }
              : { width: '44px', height: '44px' }
          }
          className="flex items-center justify-center rounded-full bg-card shadow-md"
        >
          {achievement[index] ? (
            <Image
              src={achievement[index]}
              alt="업적"
              width={type === 'mypage' ? 120 : 44}
              height={type === 'mypage' ? 120 : 44}
              style={
                type === 'mypage'
                  ? { width: '120px', height: '120px' }
                  : { width: '44px', height: '44px' }
              }
              className="rounded-full"
            />
          ) : (
            <Image
              src={AchievementDefault}
              alt="업적 기본 이미지"
              width={type === 'mypage' ? 32 : 24}
              height={type === 'mypage' ? 32 : 24}
              style={
                type === 'mypage'
                  ? { width: '32px', height: '32px' }
                  : { width: '24px', height: '24px' }
              }
            />
          )}
        </div>
      ))}
    </div>
  );
}
