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
    <div className="flex justify-between">
      <div className="absolute left-0 top-[248px] h-[558px] w-full bg-white" />
      <div className="absolute left-0 top-[784px] h-3 w-full bg-cardActive" />
      <div className="z-10 ml-20 flex flex-col items-center">
        <p className="text-[32px]/[42px] font-semibold tracking-[0.2em]">
          PLAY CARD
        </p>
        <Image
          src={user.image === '' ? userDefault : user.image}
          alt="유저 이미지"
          width={406}
          height={494}
          quality={100}
          className="mt-5 h-[494px] w-[406px]"
        />
        <h2 className="mt-10 text-[32px]/[42px] font-semibold tracking-[-2.5%] text-basefont">
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
      <div className="z-10 ml-9">
        <p className="line-clamp-5 h-[186px] w-[576px] text-2xl/[34px] font-normal tracking-[-2.5%] text-white">
          &quot;{user.comment}&quot;
        </p>
        <div className="mt-16 flex flex-col gap-8">
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
