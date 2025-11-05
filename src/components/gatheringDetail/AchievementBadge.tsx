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
      className={`absolute flex justify-center items-center ${absoluteLayout}`}
    >
      {Array.from({ length: 3 }, (_, index) => (
        <div
          key={index}
          className={`${type === 'mypage' ? 'w-[100px] h-[100px] md:w-[120px] md:h-[120px]' : 'w-11 h-11'} border-[3px] border-line-white flex items-center justify-center shadow-md`}
        >
          {achievement[index] ? (
            <Image
              src={achievement[index]}
              alt="업적"
              width={100}
              height={100}
              className={`${type === 'mypage' ? 'w-[110px] h-[110px]' : 'w-11 h-11'}`}
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
