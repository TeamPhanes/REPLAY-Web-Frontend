import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BookmarkLine from '@/public/icons/cardList/bookmark_line.svg';
import HeartLine from '@/public/icons/cardList/heart_line.svg';

interface EmptyArrayContainerProps {
  type: '찜한' | '참여한' | '작성한';
  kind: '방탈출' | '모임' | '댓글';
}

export default function EmptyArrayContainer({
  type,
  kind,
}: EmptyArrayContainerProps) {
  let kindDisplayElement: ReactNode;

  if (kind === '방탈출') {
    kindDisplayElement = (
      <Link href="/room" className="text-mainBlue underline-offset-4 underline">
        {kind}
      </Link>
    );
  } else if (kind === '모임') {
    kindDisplayElement = (
      <Link
        href="/gathering"
        className="text-mainBlue underline-offset-4 underline"
      >
        {kind}
      </Link>
    );
  } else {
    kindDisplayElement = kind;
  }

  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full h-[346px] rounded-[30px] bg-card mt-6">
      <p className="font-semibold text-2xl/[34px] tracking-[-2.5%] text-basefont">
        {`내가 ${type} `}
        {kindDisplayElement}
        {`${kind === '댓글' || kind === '방탈출' || kind === '모임' ? '이' : '(이/가)'} 아직 없어요.`}
      </p>
      {type === '작성한' ? (
        <p className="font-semibold text-2xl/[34px] tracking-[-2.5%] text-basefont">
          {'참여하고 싶은 '}
          <Link
            href="/gathering"
            className="text-mainBlue underline-offset-4 underline"
          >
            모임
          </Link>
          {' 에 댓글을 작성하고 이 페이지에 기록해 보세요!'}
        </p>
      ) : (
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
      )}
    </div>
  );
}
