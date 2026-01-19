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
      <Link
        href="/theme"
        className="text-mainBlue underline underline-offset-4"
      >
        {kind}
      </Link>
    );
  } else if (kind === '모임') {
    kindDisplayElement = (
      <Link
        href="/gathering"
        className="text-mainBlue underline underline-offset-4"
      >
        {kind}
      </Link>
    );
  } else {
    kindDisplayElement = kind;
  }

  return (
    <div className="mt-6 flex h-[346px] w-full flex-col items-center justify-center gap-4 rounded-[30px] bg-card-white">
      <p className="text-xl font-semibold tracking-[-2.5%] text-basefont md:text-2xl/[34px]">
        {`내가 ${type} `}
        {kindDisplayElement}
        {`${kind === '댓글' || kind === '방탈출' || kind === '모임' ? '이' : '(이/가)'} 아직 없어요.`}
      </p>
      {type === '작성한' ? (
        <p className="max-w-60 text-xl font-semibold tracking-[-2.5%] text-basefont md:max-w-none md:text-2xl/[34px]">
          {'참여하고 싶은 '}
          <Link
            href="/gathering"
            className="text-mainBlue underline underline-offset-4"
          >
            모임
          </Link>
          에 댓글을 작성하고 이 페이지에 기록해 보세요!
        </p>
      ) : (
        <div className="flex flex-col items-center gap-1 md:flex-row">
          <Image
            src={type === '찜한' ? HeartLine : BookmarkLine}
            alt="아이콘"
            width={32}
            height={32}
            className="h-7 w-7 md:h-8 md:w-8"
          />
          <p className="max-w-60 text-xl font-semibold tracking-[-2.5%] text-basefont md:max-w-none md:text-2xl/[34px]">
            {`${type === '찜한' ? '하트' : '북마크'} 버튼을 눌러 이 페이지에 기록해 보세요!`}
          </p>
        </div>
      )}
    </div>
  );
}
