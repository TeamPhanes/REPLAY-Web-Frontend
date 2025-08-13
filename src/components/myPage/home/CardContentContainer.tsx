import Image from 'next/image';
import CardContentFont from '@/components/myPage/home/CardContentFont';
import { UserDTO } from '@/types/user/user.types';
import userDefault from '@/public/icons/user/user_default.svg';

interface CardContentContainerProps {
  user: UserDTO['get'];
}

export default function CardContentContainer({
  user,
}: CardContentContainerProps) {
  return (
    <div className="flex justify-between md:flex-row flex-col">
      <div className="absolute left-0 top-[180px] md:top-[248px] h-[240px] md:h-[558px] w-full bg-white" />
      <div className="absolute md:hidden left-0 top-[640px] md:top-[248px] h-[380px] md:h-[558px] w-full bg-white" />
      <div className="absolute left-0 top-[1000px] md:top-[785px] h-3 w-full bg-cardActive" />
      <div className="z-10 md:ml-20 flex flex-col items-center">
        <p className="text-2xl md:text-[32px]/[42px] font-semibold tracking-[0.2em]">
          PLAY CARD
        </p>
        <Image
          src={user.image === '' ? userDefault : user.image}
          alt="유저 이미지"
          width={406}
          height={494}
          quality={100}
          className="mt-5 h-[190px] w-[160px] md:h-[494px] md:w-[406px]"
        />
        <h2 className="mt-10 text-2xl max-w-[300px] md:max-w-max truncate md:text-[32px]/[42px] font-semibold tracking-[-2.5%] text-basefont">
          {user.nickname}
        </h2>
        {user.genderMark ? (
          <p className="mt-2 text-base font-normal tracking-[-2.5%] text-grayFont">
            {user.gender}
          </p>
        ) : null}
        {user.emailMark ? (
          <p className="mt-2 text-base font-normal tracking-[-2.5%] text-grayFont">
            {user.email}
          </p>
        ) : null}
      </div>
      <div className="z-10 md:ml-9 absolute md:relative top-[432px] md:top-auto left-0 right-0 px-10">
        <p className="line-clamp-6 md:line-clamp-5 h-[170px] md:h-[186px] md:w-[576px] text-xl md:text-2xl/[34px] font-normal tracking-[-2.5%] text-white">
          &quot;{user.comment}&quot;
        </p>
        <div className="mt-14 md:mt-16 flex flex-col gap-8">
          <CardContentFont title="활동 기간" content={user.createdAt} />
          <CardContentFont
            title="내가 만든 모임"
            content={user.totalMakeGathering}
          />
          <CardContentFont
            title="내가 참여한 모임"
            content={user.totalGathering}
          />
          <CardContentFont title="플레이한 방탈출" content={user.totalTheme} />
          <CardContentFont title="성공한 방탈출" content={user.successCount} />
          <CardContentFont title="실패한 방탈출" content={user.failCount} />
        </div>
      </div>
    </div>
  );
}
