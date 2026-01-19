import { periodFullYearMonthDay } from '@/utils/dateChange';

interface CardBottomDateProps {
  updatedAt: string;
  createdAt: string;
  type?: 'mypage' | 'detail';
}

export default function CardBottomDate({
  updatedAt,
  createdAt,
  type = 'mypage',
}: CardBottomDateProps) {
  return (
    <div
      className={`${type === 'mypage' ? 'bottom-44 right-10' : 'right-0 mt-32 md:mt-[110px]'} absolute`}
    >
      <div className="flex gap-6">
        <p
          className={`text-base font-normal tracking-[-2.5%] ${type === 'mypage' ? 'text-font-disabled' : 'text-basefont'}`}
        >
          수정 날짜
        </p>
        <p
          className={`text-base font-normal tracking-[-2.5%] ${type === 'mypage' ? 'text-font-disabled' : 'text-basefont'}`}
        >
          {periodFullYearMonthDay(updatedAt)}
        </p>
      </div>
      <div className="flex gap-6">
        <p
          className={`text-base font-normal tracking-[-2.5%] ${type === 'mypage' ? 'text-font-disabled' : 'text-basefont'}`}
        >
          생성 날짜
        </p>
        <p
          className={`text-base font-normal tracking-[-2.5%] ${type === 'mypage' ? 'text-font-disabled' : 'text-basefont'}`}
        >
          {periodFullYearMonthDay(createdAt)}
        </p>
      </div>
    </div>
  );
}
