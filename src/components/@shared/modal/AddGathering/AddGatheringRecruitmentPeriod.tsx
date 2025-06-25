import DateTimeCalendar from '@/components/@shared/calendar/DateTimeCalendar';
import { useOpen } from '@/hooks/useOpen';
import { yearMonthDayHourTime } from '@/utils/dateChange';

interface AddGatheringRecruitmentPeriodProps {
  registrationStart: Date;
  registrationStartChange: (value: Date) => void;
  registrationEnd: Date;
  registrationEndChange: (value: Date) => void;
}

export default function AddGatheringRecruitmentPeriod({
  registrationStart,
  registrationStartChange,
  registrationEnd,
  registrationEndChange,
}: AddGatheringRecruitmentPeriodProps) {
  const {
    isOpen: isRegistrationStartDate,
    toggleOpen: toggleRegistrationStartDate,
  } = useOpen();
  const {
    isOpen: isRegistrationEndDate,
    toggleOpen: toggleRegistrationEndDate,
  } = useOpen();
  return (
    <div className="flex flex-col mt-11">
      <p className="font-medium text-2xl/[34px] tracking-[-2.5%] text-basefont">
        모집 기간
      </p>
      <div className="flex gap-1 mt-3 relative">
        <div
          className="rounded-l-full bg-card py-2 px-4 font-normal text-xl tracking-[-2.5%] text-basefont cursor-pointer"
          onClick={toggleRegistrationStartDate}
        >
          {yearMonthDayHourTime(String(registrationStart))}
        </div>
        <DateTimeCalendar
          isOpen={isRegistrationStartDate}
          selectedDate={registrationStart}
          onClose={toggleRegistrationStartDate}
          onDateChange={registrationStartChange}
          layout="top-[52px] left-0"
        />
        <div
          className="rounded-r-full bg-card py-2 px-4 font-normal text-xl tracking-[-2.5%] text-basefont cursor-pointer"
          onClick={toggleRegistrationEndDate}
        >
          {yearMonthDayHourTime(String(registrationEnd))}
        </div>
        <DateTimeCalendar
          isOpen={isRegistrationEndDate}
          selectedDate={registrationEnd}
          onClose={toggleRegistrationEndDate}
          onDateChange={registrationEndChange}
          layout="top-[52px] left-0"
        />
      </div>
    </div>
  );
}
