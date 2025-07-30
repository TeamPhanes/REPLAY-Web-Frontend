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
      <p className="font-medium text-xl md:text-2xl/[34px] tracking-[-2.5%] text-basefont">
        모집 기간
      </p>
      <div className="flex flex-col md:flex-row gap-1 mt-3 md:relative">
        <div
          className="rounded-t-full md:rounded-r-none md:rounded-l-full bg-card py-2 px-4 font-normal text-xl tracking-[-2.5%] text-basefont cursor-pointer text-center"
          onClick={toggleRegistrationStartDate}
        >
          {yearMonthDayHourTime(String(registrationStart))}
        </div>
        <div className="relative md:static">
          <DateTimeCalendar
            isOpen={isRegistrationStartDate}
            selectedDate={registrationStart}
            onClose={toggleRegistrationStartDate}
            onDateChange={registrationStartChange}
            layout="md:top-[52px] md:left-0"
          />
        </div>
        <div
          className="rounded-b-full md:rounded-l-none md:rounded-r-full bg-card py-2 px-4 font-normal text-xl tracking-[-2.5%] text-basefont cursor-pointer text-center"
          onClick={toggleRegistrationEndDate}
        >
          {yearMonthDayHourTime(String(registrationEnd))}
        </div>
        <div className="relative md:static">
          <DateTimeCalendar
            isOpen={isRegistrationEndDate}
            selectedDate={registrationEnd}
            onClose={toggleRegistrationEndDate}
            onDateChange={registrationEndChange}
            layout="md:top-[52px] md:left-0"
          />
        </div>
      </div>
    </div>
  );
}
