import CardBottomDate from '@/components/myPage/home/CardBottomDate';
import CardContentFont from '@/components/myPage/home/CardContentFont';
import { OtherUserDTO } from '@/types/user/user.types';

interface IdCardBackProps {
  userData: OtherUserDTO['get'];
}

export default function IdCardBack({ userData }: IdCardBackProps) {
  const {
    profileComment,
    createdAt,
    updatedAt,
    createGatheringCount,
    visitGatheringCount,
    visitThemeCount,
    successThemeCount,
  } = userData;

  return (
    <div className="absolute z-10 w-full px-5 backface-hidden rotate-y-180">
      <p className="line-clamp-5 h-[110px] text-base font-normal tracking-[-2.5%] text-white md:h-[140px] md:text-xl">
        &quot;{profileComment}&quot;
      </p>
      <div className="mt-10 flex flex-col gap-6">
        <CardContentFont title="활동 기간" content={createdAt} />
        <CardContentFont
          title="내가 만든 모임"
          content={createGatheringCount}
        />
        <CardContentFont
          title="내가 참여한 모임"
          content={visitGatheringCount}
        />
        <CardContentFont title="플레이한 방탈출" content={visitThemeCount} />
        <CardContentFont title="성공한 방탈출" content={successThemeCount} />
        <div className="flex items-center">
          <p className="w-full text-xl font-semibold tracking-[-2.5%] text-basefont md:w-72 md:text-2xl/[34px]">
            현 분기 랭킹/과거 최고 랭킹
          </p>
          <p className="w-20 text-lg font-normal tracking-[-2.5%] text-basefont md:text-xl">
            -
          </p>
        </div>
      </div>
      <CardBottomDate
        updatedAt={updatedAt}
        createdAt={createdAt}
        type="detail"
      />
    </div>
  );
}
