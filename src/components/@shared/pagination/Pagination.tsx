'use client';

import Image from 'next/image';
import PaginationLeftArrow from '@/public/icons/arrow/pagination_left_arrow.svg';
import PaginationRightArrow from '@/public/icons/arrow/pagination_right_arrow.svg';

interface Props {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onChange,
}: Props) {
  const range: (number | string)[] = [];
  const left = Math.max(0, currentPage - 2);
  const right = Math.min(totalPages - 1, currentPage + 2);

  for (let i = 0; i < totalPages; i += 1) {
    if (i === 0 || i === totalPages - 1 || (i >= left && i <= right)) {
      range.push(i);
    } else if (range[range.length - 1] !== '...') {
      range.push('...');
    }
  }

  return range.length !== 0 ? (
    <div className="flex items-center gap-1 justify-center mt-32">
      {/* <button
        type="button"
        onClick={() => {
          onChange(currentPage - 1);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        disabled={currentPage === 0}
        className="disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Image
          src={PaginationLeftArrow}
          alt="이전 목록"
          width={32}
          height={32}
          className="w-8 h-8"
        />
      </button> */}
      {range.map((item, idx) =>
        item === '...' ? (
          <span key={idx} className="px-2 text-xl text-setfont">
            ...
          </span>
        ) : (
          <button
            key={idx}
            type="button"
            onClick={() => {
              onChange(Number(item));
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`font-normal text-base tracking-[-2.5%] w-9 h-9 ${currentPage === item ? 'text-font-baseWhite rounded-full bg-brand-main400' : 'text-font-thirdWhite hover:text-font-baseWhite hover:rounded-full hover:bg-brand-main400'}`}
          >
            {Number(item) + 1}
          </button>
        )
      )}
      {/* <button
        type="button"
        onClick={() => {
          onChange(currentPage + 1);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        disabled={currentPage >= totalPages - 1}
        className="disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Image
          src={PaginationRightArrow}
          alt="다음 목록"
          width={32}
          height={32}
          className="w-8 h-8"
        />
      </button> */}
    </div>
  ) : null;
}
