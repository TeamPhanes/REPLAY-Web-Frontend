import Image from 'next/image';
import AchievementBadge from '@/components/gatheringDetail/AchievementBadge';
import CardBottomDate from '@/components/myPage/home/CardBottomDate';
import CardContentFont from '@/components/myPage/home/CardContentFont';
import { OtherUserDTO } from '@/types/user/user.types';
import MainLogo from '@/public/images/Replay_Main_Logo.svg';

interface IdCardBackProps {
  userData: OtherUserDTO['get'];
}

export default function IdCardBack({ userData }: IdCardBackProps) {
  const {
    comment,
    createdAt,
    updatedAt,
    totalMakeGathering,
    totalGathering,
    totalTheme,
    successCount,
    failCount,
    nickname,
    representAchievement,
  } = userData;

  return (
    <div className="absolute z-10 backface-hidden rotate-y-180">
      <p className="line-clamp-5 h-[140px] w-[320px] md:w-[576px] text-xl font-normal tracking-[-2.5%] text-white">
        &quot;{comment}&quot;
      </p>
      <div className="mt-10 flex flex-col gap-6">
        <CardContentFont title="활동 기간" content={createdAt} />
        <CardContentFont title="내가 만든 모임" content={totalMakeGathering} />
        <CardContentFont title="내가 참여한 모임" content={totalGathering} />
        <CardContentFont title="플레이한 방탈출" content={totalTheme} />
        <CardContentFont title="성공한 방탈출" content={successCount} />
        <CardContentFont title="실패한 방탈출" content={failCount} />
      </div>
      <Image
        src={MainLogo}
        alt="로고"
        width={550}
        height={320}
        className="absolute bottom-[-230px] h-[320px] w-[550px] opacity-20"
      />
      <CardBottomDate
        updatedAt={updatedAt}
        createdAt={createdAt}
        type="detail"
      />
      <AchievementBadge
        nickname={nickname}
        achievement={representAchievement}
        absoluteLayout="gap-3 md:gap-10 left-0 right-0 md:right-2 bottom-[-385px]"
        type="mypage"
      />
    </div>
  );
}
