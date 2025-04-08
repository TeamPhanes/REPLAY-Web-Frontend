import Image from 'next/image';
import LogoImage from '@/public/images/mypage/logo_background.webp';
import CardContentContainer from '@/src/components/myPage/home/CardContentContainer';
import CardBottomDate from '@/src/components/myPage/home/CardBottomDate';
import AchievementBadge from '@/src/components/gatheringDetail/AchievementBadge';
import { mockUser } from '@/src/data/mockUser';

export default function CardContainer() {
  return (
    <div className="relative mt-5 h-[674px] w-xl rounded-[30px] bg-spot p-5">
      <Image
        src={LogoImage}
        alt="배경 이미지"
        width={627}
        height={232}
        quality={100}
        className="absolute bottom-5 h-[232px] w-[627px]"
      />
      <CardContentContainer user={mockUser} />
      <CardBottomDate
        updatedAt={mockUser.updatedAt}
        createdAt={mockUser.createdAt}
      />
      <AchievementBadge
        nickname={mockUser.nickname}
        achievement={mockUser.representAchievement}
        type="mypage"
      />
    </div>
  );
}
