import DateTimeCalendar from '@/components/@shared/calendar/DateTimeCalendar';
import { useOpen } from '@/hooks/useOpen';
import { yearMonthDayHourTime } from '@/utils/dateChange';

interface RegistrationStartDateProps {
  registrationStart: Date;
  registrationStartChange: (value: Date) => void;
}

export default function RegistrationStartDate({
  registrationStart,
  registrationStartChange,
}: RegistrationStartDateProps) {
  const { isOpen, toggleOpen } = useOpen();
  return (
    <>
      <div
        className="rounded-l-full bg-card py-2 px-4 font-normal text-xl tracking-[-2.5%] text-basefont cursor-pointer"
        onClick={toggleOpen}
      >
        {yearMonthDayHourTime(String(registrationStart))}
      </div>
      <DateTimeCalendar
        isOpen={isOpen}
        selectedDate={registrationStart}
        onClose={toggleOpen}
        onDateChange={registrationStartChange}
        layout="top-[100px] left-0"
      />
    </>
  );
}
