import Image from 'next/image';
import { yearMonthDayHourTime } from '@/utils/dateChange';
import CalendarIcon from '@/public/icons/cardList/calendar_schedule.svg';

interface DateAndPriceProps {
  registrationEnd: string;
  price: number;
}

export default function DateAndPrice({
  registrationEnd,
  price,
}: DateAndPriceProps) {
  return (
    <div className="flex items-center gap-14">
      <div className="flex gap-1">
        <Image src={CalendarIcon} alt="캘린더 아이콘" width={24} height={24} />
        <p className="text-base font-normal tracking-[-2.5%] text-basefont">
          {yearMonthDayHourTime(registrationEnd)}
        </p>
      </div>
      <p className="text-xl font-semibold tracking-[-2.5%] text-basefont">
        {price.toLocaleString()}원
      </p>
    </div>
  );
}
