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
    <div
      className={`absolute flex items-center justify-center ${absoluteLayout}`}
    >
      {Array.from({ length: 3 }, (_, index) => (
        <div
          key={index}
          className={`${type === 'mypage' ? 'h-[100px] w-[100px] md:h-[120px] md:w-[120px]' : 'h-11 w-11'} flex items-center justify-center border-[3px] border-line-white shadow-md`}
        >
          {achievement[index] ? (
            <Image
              src={achievement[index]}
              alt="업적"
              width={100}
              height={100}
              className={`${type === 'mypage' ? 'h-[110px] w-[110px]' : 'h-11 w-11'}`}
            />
          ) : (
            <Image
              src={AchievementDefault}
              alt="업적 기본 이미지"
              width={48}
              height={48}
              className={`${type === 'mypage' ? 'h-12 w-12' : 'h-6 w-6'}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
