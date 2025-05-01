interface AddGatheringScheduleProps {
  dateTime: string;
}

export default function AddGatheringSchedule({
  dateTime,
}: AddGatheringScheduleProps) {
  return (
    <div className="flex flex-col">
      <p className="font-medium text-2xl/[34px] tracking-[-2.5%] text-basefont">
        모임 일정
      </p>
      <div className="rounded-full bg-card py-2 px-4 font-normal text-xl tracking-[-2.5%] text-basefont mt-3">
        {dateTime}
      </div>
    </div>
  );
}
