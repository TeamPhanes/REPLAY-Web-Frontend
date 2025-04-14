import { periodFullYearMonthDay } from '@/src/utils/dateChange';

interface CardBottomDateProps {
  updatedAt: string;
  createdAt: string;
}

export default function CardBottomDate({
  updatedAt,
  createdAt,
}: CardBottomDateProps) {
  return (
    <div className="absolute bottom-12 left-[120px]">
      <div className="flex gap-6">
        <p className="text-2xl/[34px] font-normal tracking-[-2.5%] text-white">
          수정 날짜
        </p>
        <p className="text-2xl/[34px] font-normal tracking-[-2.5%] text-white">
          {periodFullYearMonthDay(updatedAt)}
        </p>
      </div>
      <div className="flex gap-6">
        <p className="text-2xl/[34px] font-normal tracking-[-2.5%] text-white">
          생성 날짜
        </p>
        <p className="text-2xl/[34px] font-normal tracking-[-2.5%] text-white">
          {periodFullYearMonthDay(createdAt)}
        </p>
      </div>
    </div>
  );
}
