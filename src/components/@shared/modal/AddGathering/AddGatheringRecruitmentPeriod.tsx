interface AddGatheringRecruitmentPeriodProps {
  registrationStart: string;
  registrationEnd: string;
}

export default function AddGatheringRecruitmentPeriod({
  registrationStart,
  registrationEnd,
}: AddGatheringRecruitmentPeriodProps) {
  return (
    <div className="flex flex-col mt-11">
      <p className="font-medium text-2xl/[34px] tracking-[-2.5%] text-basefont">
        모집 기간
      </p>
      <div className="flex gap-1 mt-3">
        <div className="rounded-l-full bg-card py-2 px-4 font-normal text-xl tracking-[-2.5%] text-basefont">
          {registrationStart}
        </div>
        <div className="rounded-r-full bg-card py-2 px-4 font-normal text-xl tracking-[-2.5%] text-basefont">
          {registrationEnd}
        </div>
      </div>
    </div>
  );
}
