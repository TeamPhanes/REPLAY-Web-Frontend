import Image from 'next/image';
import { yearMonthDayHourTime } from '@/utils/dateChange';
import CalendarIcon from '@/public/icons/cardList/calendar_schedule.svg';
import CalendarTime from '@/public/icons/cardList/calendar_time.svg';

interface DateAndPriceProps {
  registrationStart: string;
  registrationEnd: string;
  dateTime: string;
  isIndividual: boolean;
  price: number;
}

export default function DateAndPrice({
  registrationStart,
  registrationEnd,
  dateTime,
  isIndividual,
  price,
}: DateAndPriceProps) {
  return (
    <>
      <div className="flex items-center gap-14">
        <div className="flex gap-1">
          <Image
            src={CalendarIcon}
            alt="캘린더 아이콘"
            width={24}
            height={24}
          />
          <p className="text-base font-normal tracking-[-2.5%] text-basefont">
            {yearMonthDayHourTime(dateTime)}
          </p>
        </div>
        <p className="text-xl font-semibold tracking-[-2.5%] text-basefont">
          {isIndividual ? '인당 ' : '총액 '}
          {price.toLocaleString()}원
        </p>
      </div>
      <div className="flex gap-1 items-center">
        <Image
          src={CalendarTime}
          alt="모집기간 아이콘"
          width={24}
          height={24}
          className="w-6 h-6"
        />
        <p className="text-base font-normal tracking-[-2.5%] text-basefont">
          {yearMonthDayHourTime(registrationStart)} ~{' '}
          {yearMonthDayHourTime(registrationEnd)}
        </p>
      </div>
    </>
  );
}
