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
      className={`${type === 'mypage' ? 'absolute bottom-14 left-[120px]' : 'absolute right-0 mt-[110px]'}`}
    >
      <div className="flex gap-6">
        <p
          className={`text-2xl/[34px] font-normal tracking-[-2.5%] ${type === 'mypage' ? 'text-white' : 'text-basefont'}`}
        >
          수정 날짜
        </p>
        <p
          className={`text-2xl/[34px] font-normal tracking-[-2.5%] ${type === 'mypage' ? 'text-white' : 'text-basefont'}`}
        >
          {periodFullYearMonthDay(updatedAt)}
        </p>
      </div>
      <div className="flex gap-6">
        <p
          className={`text-2xl/[34px] font-normal tracking-[-2.5%] ${type === 'mypage' ? 'text-white' : 'text-basefont'}`}
        >
          생성 날짜
        </p>
        <p
          className={`text-2xl/[34px] font-normal tracking-[-2.5%] ${type === 'mypage' ? 'text-white' : 'text-basefont'}`}
        >
          {periodFullYearMonthDay(createdAt)}
        </p>
      </div>
    </div>
  );
}
