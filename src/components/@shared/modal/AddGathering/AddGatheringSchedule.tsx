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
    <div>
      <p className="text-base font-normal tracking-[-2.5%] text-font-baseBlack">
        모임 일정
      </p>
      <button
        type="button"
        className="mt-1 rounded-[4px] bg-brand-main100 px-4 py-2 text-base font-normal tracking-[-2.5%] text-font-baseBlack"
        onClick={toggleOpen}
      >
        {yearMonthDayHourTime(String(dateTime))}
      </button>
      <DateTimeCalendar
        isOpen={isOpen}
        selectedDate={dateTime}
        onClose={toggleOpen}
        onDateChange={dateTimeChange}
      />
    </div>
  );
}
