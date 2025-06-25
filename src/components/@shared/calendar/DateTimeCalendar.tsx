'use client';

import { useRef, useState } from 'react';
import Calendar from 'react-calendar';
import '@/styles/dateTimeCalendar.css';
import ScrollTimePicker from '@/components/@shared/calendar/ScrollTimePicker';

type CalendarValue = Date | null | [Date | null, Date | null];

interface DateTimeCalendarProps {
  isOpen: boolean;
  selectedDate: Date;
  onClose(): void;
  onDateChange(date: Date): void;
  layout?: string;
}

/**
 * 공통 DateTime Calendar 컴포넌트
 * @param isOpen 캘린더의 열린 상태 (true), 닫힌 상태 (false)를 가지는 boolean state
 * @param onClose 캘린더의 닫는 기능을 실행하는 함수
 * @param onDateChange 캘린더의 값을 교환하는 함수
 * @param layout 캘린더의 레이아웃을 수정하기 위한 tailwind css className
 */

export default function DateTimeCalendar({
  isOpen,
  selectedDate,
  onClose,
  onDateChange,
  layout,
}: DateTimeCalendarProps) {
  const now = new Date();
  now.setMinutes(0);
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const initialSelectedDateRef = useRef(new Date(selectedDate));

  const [date, setDate] = useState(selectedDate);
  const [selectedHour, setSelectedHour] = useState(date.getHours());
  const [selectedMinute, setSelectedMinute] = useState(0);

  const handleDateChange = (newDate: CalendarValue) => {
    if (Array.isArray(newDate)) {
      if (newDate[0] instanceof Date) {
        setDate(newDate[0]);
      }
    } else if (newDate instanceof Date) {
      setDate(newDate);
    }
  };

  const getFinalDate = () => {
    const updatedDate = new Date(date);
    updatedDate.setHours(selectedHour);
    updatedDate.setMinutes(selectedMinute);
    return updatedDate;
  };

  const handleReset = () => {
    const resetDate = initialSelectedDateRef.current;
    setDate(resetDate);
    setSelectedHour(resetDate.getHours());
    setSelectedMinute(resetDate.getMinutes());
    onDateChange(resetDate);
    onClose();
  };

  const handleSubmit = () => {
    const finalDate = getFinalDate();
    onDateChange(finalDate);
    onClose();
  };

  return (
    <div
      className={`${isOpen ? 'animate-dropdownIn' : 'hidden'} ${layout} border-2 absolute z-[80] flex flex-col rounded-[10px] border-grayFont bg-grayFont py-5 pl-6 pr-6 shadow-xl md:pr-0`}
    >
      <div className="flex flex-col md:h-[332px] md:flex-row">
        <Calendar
          onChange={handleDateChange}
          value={date}
          calendarType="gregory"
          locale="en-us"
          next2Label={null}
          prev2Label={null}
          minDetail="year"
          className="date-time-calendar"
        />
        <ScrollTimePicker
          selectedHour={selectedHour}
          selectedMinute={selectedMinute}
          onHourChange={setSelectedHour}
          onMinuteChange={setSelectedMinute}
        />
      </div>

      <div className="mx-auto flex w-[250px] items-center justify-between">
        <button
          type="button"
          className="w-[122px] border-cardActive border-2 py-3 px-[10px] text-buttonColor200 rounded-2xl bg-white font-semibold hover:bg-buttonColor200Hover"
          onClick={handleReset}
        >
          초기화
        </button>
        <button
          type="button"
          className="w-[122px] bg-mainBlue rounded-2xl font-semibold py-3 px-[10px] hover:bg-mainBlueHover"
          onClick={handleSubmit}
        >
          적용
        </button>
      </div>
    </div>
  );
}
