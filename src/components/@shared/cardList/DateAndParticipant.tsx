import Image from 'next/image';
import CalendarIcon from '@/public/icons/cardList/calendar_schedule.svg';
import { yearMonthDayHourTime } from '@/src/utils/dateChange';
import Rating from '@/components/@shared/rating/Rating';

interface DateAndParticipantProps {
  registrationEnd: string;
  capacity: number;
  participantCount: number;
}

export default function DateAndParticipant({
  registrationEnd,
  capacity,
  participantCount,
}: DateAndParticipantProps) {
  return (
    <div className="flex items-center">
      <div className="flex gap-1">
        <Image src={CalendarIcon} alt="캘린더 아이콘" width={24} height={24} />
        <p className="text-base font-normal tracking-[-2.5%] text-basefont">
          {yearMonthDayHourTime(registrationEnd)}
        </p>
      </div>
      <div className="absolute right-8 ml-5 flex gap-3">
        <Rating
          rating={participantCount}
          width={120}
          height={24}
          maxRating={6}
          type="User"
        />
        <p className="text-base font-normal tracking-[-2.5%] text-grayFont">
          {participantCount}/{capacity}
        </p>
      </div>
    </div>
  );
}
