import Image from 'next/image';
import userDefault from '@/public/icons/user/user_default.svg';
import CardContentFont from '@/src/components/myPage/CardContentFont';
import { UserDTO } from '@/src/types/user/user.types';

interface CardContentContainerProps {
  user: UserDTO;
}

export default function CardContentContainer({
  user,
}: CardContentContainerProps) {
  return (
    <div className="flex">
      <Image
        src={user.image === '' ? userDefault : user.image}
        alt="유저 이미지"
        width={160}
        height={160}
        quality={100}
        className="h-40 w-40 rounded-full border-4 border-mainBlue"
      />
      <div className="ml-9">
        <div className="flex flex-col gap-3">
          <h2 className="text-[32px]/[42px] font-semibold tracking-[-2.5%] text-white">
            {user.nickname}
          </h2>
          <div className="flex gap-6">
            <p className="text-base font-normal tracking-[-2.5%] text-white">
              {`성별 : ${user.gender}`}
            </p>
            <p className="text-base font-normal tracking-[-2.5%] text-white">
              {user.email}
            </p>
          </div>
          <p className="line-clamp-5 h-[170px] w-full text-2xl/[34px] font-normal tracking-[-2.5%] text-white">
            {user.comment}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-[273px] gap-y-4">
          <CardContentFont title="활동 기간" content={user.createdAt} />
          <CardContentFont title="플레이한 방탈출" content={user.totalRE} />
          <CardContentFont
            title="내가 만든 모임"
            content={user.totalMakeGatherings}
          />
          <CardContentFont title="성공한 방탈출" content={user.successCount} />
          <CardContentFont
            title="내가 참여한 모임"
            content={user.totalGatherings}
          />
          <CardContentFont title="실패한 방탈출" content={user.failCount} />
        </div>
      </div>
    </div>
  );
}
