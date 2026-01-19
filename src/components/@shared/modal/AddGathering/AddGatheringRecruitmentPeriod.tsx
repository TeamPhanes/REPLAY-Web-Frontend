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
    <div className="flex items-center gap-2">
      <div className="relative flex flex-col gap-1">
        <p className="text-base font-normal tracking-[-2.5%] text-font-baseBlack">
          모집 시작일
        </p>
        <button
          type="button"
          className="rounded-[4px] bg-brand-main100 px-4 py-2 text-base font-normal tracking-[-2.5%] text-font-baseBlack"
          onClick={toggleRegistrationStartDate}
        >
          {yearMonthDayHourTime(String(registrationStart))}
        </button>
        <div className="relative md:static">
          <DateTimeCalendar
            isOpen={isRegistrationStartDate}
            selectedDate={registrationStart}
            onClose={toggleRegistrationStartDate}
            onDateChange={registrationStartChange}
          />
        </div>
      </div>
      <div className="relative flex flex-col gap-1">
        <p className="text-end text-base font-normal tracking-[-2.5%] text-font-baseBlack">
          모집 마감일
        </p>
        <button
          type="button"
          className="rounded-[4px] bg-brand-main100 px-4 py-2 text-base font-normal tracking-[-2.5%] text-font-baseBlack"
          onClick={toggleRegistrationEndDate}
        >
          {yearMonthDayHourTime(String(registrationEnd))}
        </button>
        <div className="relative md:static">
          <DateTimeCalendar
            isOpen={isRegistrationEndDate}
            selectedDate={registrationEnd}
            onClose={toggleRegistrationEndDate}
            onDateChange={registrationEndChange}
          />
        </div>
      </div>
    </div>
  );
}
