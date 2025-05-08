import Image from 'next/image';
import BookmarkLine from '@/public/icons/cardList/bookmark_line.svg';
import HeartLine from '@/public/icons/cardList/heart_line.svg';

interface EmptyArrayContainerProps {
  type: '찜한' | '참여한';
  kind: '방탈출' | '모임';
}

export default function EmptyArrayContainer({
  type,
  kind,
}: EmptyArrayContainerProps) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full h-[346px] rounded-[30px] bg-card mt-6">
      <p className="font-semibold text-2xl/[34px] tracking-[-2.5%] text-basefont">
        {`내가 ${type} ${kind}이 아직 없어요.`}
      </p>
      <div className="flex gap-1 items-center">
        <Image
          src={type === '찜한' ? HeartLine : BookmarkLine}
          alt="아이콘"
          width={32}
          height={32}
          className="w-8 h-8"
        />
        <p className="font-semibold text-2xl/[34px] tracking-[-2.5%] text-basefont">
          {`${type === '찜한' ? '하트' : '북마크'} 버튼을 눌러 이 페이지에 기록해 보세요!`}
        </p>
      </div>
    </div>
  );
}
