import DateTimeCalendar from '@/components/@shared/calendar/DateTimeCalendar';
import { useOpen } from '@/hooks/useOpen';
import { yearMonthDayHourTime } from '@/utils/dateChange';

interface AddGatheringScheduleProps {
  dateTime: Date;
  dateTimeChange: (value: Date) => void;
}

export default function AddGatheringSchedule({
  dateTime,
  dateTimeChange,
}: AddGatheringScheduleProps) {
  const { isOpen, toggleOpen } = useOpen();
  return (
    <div className="flex flex-col relative">
      <p className="font-medium text-2xl/[34px] tracking-[-2.5%] text-basefont">
        모임 일정
      </p>
      <div
        className="rounded-full bg-card py-2 px-4 font-normal text-xl tracking-[-2.5%] text-basefont mt-3 cursor-pointer"
        onClick={toggleOpen}
      >
        {yearMonthDayHourTime(String(dateTime))}
      </div>
      <DateTimeCalendar
        isOpen={isOpen}
        selectedDate={dateTime}
        onClose={toggleOpen}
        onDateChange={dateTimeChange}
        layout="top-[100px] left-0"
      />
    </div>
  );
}
