interface ScrollTimePickerProps {
  selectedHour: number;
  selectedMinute: number;
  onHourChange: (value: number) => void;
  onMinuteChange: (value: number) => void;
}

export default function ScrollTimePicker({
  selectedHour,
  selectedMinute,
  onHourChange,
  onMinuteChange,
}: ScrollTimePickerProps) {
  const hours = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23,
  ];
  const minutes = Array.from({ length: 12 }, (_, i) => i * 5);

  return (
    <div className="flex w-[325px] flex-col rounded-md p-5 text-secondary-5 md:w-auto md:flex-row">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="dateTimeCalendar-custom flex overflow-x-scroll overflew-y-hidden border-y-[1px] border-solid border-grayFont py-4 md:flex-col md:overflow-x-hidden md:overflow-y-scroll md:border-x-[1px] md:border-y-0 md:px-4 md:py-0">
          {hours.map((hour) => (
            <button
              type="button"
              key={hour}
              className={`rounded-md p-3 text-center ${
                selectedHour === hour ? 'bg-mainPurple' : ''
              } hover:bg-mainBlue`}
              onClick={() => onHourChange(hour)}
            >
              {hour.toString().padStart(2, '0')}
            </button>
          ))}
        </div>

        <div className="flex overflow-x-scroll dateTimeCalendar-custom overflew-y-hidden border-b-[1px] border-solid border-grayFont pb-4 md:flex-col md:overflow-x-hidden md:overflow-y-scroll md:border-b-0 md:border-r-[1px] md:pb-0 md:pr-4">
          {minutes.map((minute) => (
            <button
              type="button"
              key={minute}
              className={`rounded-md p-3 text-center ${
                selectedMinute === minute ? 'bg-mainPurple' : ''
              } hover:bg-mainBlue`}
              onClick={() => onMinuteChange(minute)}
            >
              {minute.toString().padStart(2, '0')}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
