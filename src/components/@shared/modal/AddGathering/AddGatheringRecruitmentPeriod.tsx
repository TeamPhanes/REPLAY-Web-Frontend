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
      <div className="flex flex-col relative gap-1">
        <p className="text-base text-font-baseBlack font-normal tracking-[-2.5%]">
          모집 시작일
        </p>
        <button
          type="button"
          className="px-4 py-2 bg-brand-main100 rounded-[4px] text-base text-font-baseBlack font-normal tracking-[-2.5%]"
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
      <div className="flex flex-col relative gap-1">
        <p className="text-base text-font-baseBlack font-normal tracking-[-2.5%] text-end">
          모집 마감일
        </p>
        <button
          type="button"
          className="px-4 py-2 bg-brand-main100 rounded-[4px] text-base text-font-baseBlack font-normal tracking-[-2.5%]"
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
