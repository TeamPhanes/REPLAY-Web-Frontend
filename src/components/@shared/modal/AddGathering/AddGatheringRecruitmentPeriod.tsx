import RegistrationEndDate from '@/components/@shared/modal/AddGathering/RegistrationEndDate';
import RegistrationStartDate from '@/components/@shared/modal/AddGathering/RegistrationStartDate';

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
  return (
    <div className="flex flex-col mt-11">
      <p className="font-medium text-2xl/[34px] tracking-[-2.5%] text-basefont">
        모집 기간
      </p>
      <div className="flex gap-1 mt-3 relative">
        <RegistrationStartDate
          registrationStart={registrationStart}
          registrationStartChange={registrationStartChange}
        />
        <RegistrationEndDate
          registrationEnd={registrationEnd}
          registrationEndChange={registrationEndChange}
        />
      </div>
    </div>
  );
}
