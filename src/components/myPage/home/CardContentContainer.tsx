import Image from 'next/image';
import CardContentFont from '@/components/myPage/home/CardContentFont';
import { MyProfileDTO } from '@/types/user/user.types';
import userDefault from '@/public/icons/user/user_default.svg';
import Logo from '@/public/images/Replay_Main_Logo.svg';

interface CardContentContainerProps {
  user: MyProfileDTO['get'];
}

export default function CardContentContainer({
  user,
}: CardContentContainerProps) {
  return (
    <div className="flex flex-col justify-between md:flex-row">
      <div className="absolute left-0 top-[180px] h-[240px] w-full bg-white md:top-[164px] md:h-[558px]" />
      <div className="absolute left-0 top-[640px] h-[380px] w-full bg-white md:top-[248px] md:hidden md:h-[558px]" />
      <div className="absolute left-0 top-[1000px] h-3 w-full bg-brand-sub300 md:top-[700px]" />
      <div className="z-10 flex flex-col items-center md:ml-20">
        <p className="text-2xl font-semibold tracking-[0.2em] md:text-[32px]/[42px]">
          REPLAYer
        </p>
        <Image
          src={user.profileImage === '' ? userDefault : user.profileImage}
          alt="유저 이미지"
          width={361}
          height={480}
          quality={100}
          className="mt-5 h-[190px] w-[160px] border-2 border-[#EAEAEA] md:h-[480px] md:w-[361px]"
        />
        <h2 className="mt-5 max-w-[361px] truncate text-2xl font-semibold tracking-[-2.5%] text-font-baseBlack md:max-w-max md:text-[40px]/[52px]">
          {user.nickname}
        </h2>
        {user.email !== '' ? (
          <p className="mt-2 text-base font-normal tracking-[-2.5%] text-grayFont">
            {user.email}
          </p>
        ) : null}
        <Image
          src={Logo}
          alt="REPLAY 로고"
          width={240}
          height={62}
          className="absolute bottom-10 right-10"
        />
      </div>

      <div className="absolute left-0 right-0 top-[432px] z-10 px-10 md:relative md:top-auto md:ml-9">
        <p className="line-clamp-4 h-[120px] text-xl font-normal tracking-[-2.5%] text-font-baseWhite md:w-[576px]">
          &quot;{user.profileComment}&quot;
        </p>
        <div className="mt-8 flex flex-col gap-8">
          <CardContentFont title="활동 기간" content={user.createdAt} />
          <CardContentFont
            title="내가 만든 모임"
            content={user.createGatheringCount}
          />
          <CardContentFont
            title="내가 참여한 모임"
            content={user.visitGatheringCount}
          />
          <CardContentFont
            title="플레이한 방탈출"
            content={user.visitThemeCount}
          />
          <CardContentFont
            title="성공한 방탈출"
            content={user.successThemeCount}
          />
          <div className="flex items-center">
            <p className="w-full text-xl font-semibold tracking-[-2.5%] text-basefont md:w-72 md:text-2xl/[34px]">
              현 분기 랭킹/과거 최고 랭킹
            </p>
            <p className="w-20 text-lg font-normal tracking-[-2.5%] text-basefont md:text-xl">
              -
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
