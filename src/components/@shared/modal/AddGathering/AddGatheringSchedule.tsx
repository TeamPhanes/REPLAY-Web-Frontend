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
      <p className="text-base text-font-baseBlack font-normal tracking-[-2.5%]">
        모임 일정
      </p>
      <button
        type="button"
        className="px-4 py-2 bg-brand-main100 rounded-[4px] text-base text-font-baseBlack font-normal tracking-[-2.5%] mt-1"
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
