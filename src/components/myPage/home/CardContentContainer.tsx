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
    <div className="flex justify-between md:flex-row flex-col">
      <div className="absolute left-0 top-[180px] md:top-[164px] h-[240px] md:h-[558px] w-full bg-white" />
      <div className="absolute md:hidden left-0 top-[640px] md:top-[248px] h-[380px] md:h-[558px] w-full bg-white" />
      <div className="absolute left-0 top-[1000px] md:top-[700px] h-3 w-full bg-brand-sub300" />
      <div className="z-10 md:ml-20 flex flex-col items-center">
        <p className="text-2xl md:text-[32px]/[42px] font-semibold tracking-[0.2em]">
          REPLAYer
        </p>
        <Image
          src={user.profileImage === '' ? userDefault : user.profileImage}
          alt="유저 이미지"
          width={361}
          height={480}
          quality={100}
          className="mt-5 h-[190px] w-[160px] md:h-[480px] md:w-[361px] border-2 border-[#EAEAEA]"
        />
        <h2 className="mt-5 text-2xl max-w-[361px] md:max-w-max truncate md:text-[40px]/[52px] font-semibold tracking-[-2.5%] text-font-baseBlack">
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
          width={458}
          height={118}
          className="absolute bottom-2"
        />
      </div>

      <div className="z-10 md:ml-9 absolute md:relative top-[432px] md:top-auto left-0 right-0 px-10">
        <p className="line-clamp-4 h-[120px] md:w-[576px] text-xl font-normal tracking-[-2.5%] text-font-baseWhite">
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
            <p className="md:w-72 w-full text-xl md:text-2xl/[34px] font-semibold tracking-[-2.5%] text-basefont">
              현 분기 랭킹/과거 최고 랭킹
            </p>
            <p className="w-20 text-lg md:text-xl font-normal tracking-[-2.5%] text-basefont">
              -
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
