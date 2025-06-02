import DateTimeCalendar from '@/components/@shared/calendar/DateTimeCalendar';
import { useOpen } from '@/hooks/useOpen';
import { yearMonthDayHourTime } from '@/utils/dateChange';

interface RegistrationEndDateProps {
  registrationEnd: Date;
  registrationEndChange: (value: Date) => void;
}

export default function RegistrationEndDate({
  registrationEnd,
  registrationEndChange,
}: RegistrationEndDateProps) {
  const { isOpen, toggleOpen } = useOpen();
  return (
    <>
      <div
        className="rounded-r-full bg-card py-2 px-4 font-normal text-xl tracking-[-2.5%] text-basefont cursor-pointer"
        onClick={toggleOpen}
      >
        {yearMonthDayHourTime(String(registrationEnd))}
      </div>
      <DateTimeCalendar
        isOpen={isOpen}
        selectedDate={registrationEnd}
        onClose={toggleOpen}
        onDateChange={registrationEndChange}
        layout="top-[100px] left-0"
      />
    </>
  );
}
