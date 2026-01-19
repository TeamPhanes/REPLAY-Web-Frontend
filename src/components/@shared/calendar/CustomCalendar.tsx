'use client';

import { useRef, useState } from 'react';
import Calendar from 'react-calendar';
import '@/styles/dateTimeCalendar.css';

type CalendarValue = Date | null | [Date | null, Date | null];

interface CustomCalendarProps {
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

export default function CustomCalendar({
  isOpen,
  selectedDate,
  onClose,
  onDateChange,
  layout,
}: CustomCalendarProps) {
  const now = new Date();
  now.setMinutes(0);
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const initialSelectedDateRef = useRef(new Date(selectedDate));

  const [date, setDate] = useState(selectedDate);

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
    return updatedDate;
  };

  const handleReset = () => {
    const resetDate = initialSelectedDateRef.current;
    setDate(resetDate);
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
      className={`${isOpen ? 'animate-dropdownIn' : 'hidden'} ${layout} absolute z-[80] flex flex-col rounded-[10px] border-2 border-grayFont bg-grayFont px-2 py-5 shadow-xl md:pl-6 md:pr-0`}
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
      </div>

      <div className="mx-auto flex w-[250px] items-center justify-between">
        <button
          type="button"
          className="w-[122px] rounded-2xl border-2 border-cardActive bg-white px-[10px] py-3 font-semibold text-buttonColor200 hover:bg-buttonColor200Hover"
          onClick={handleReset}
        >
          초기화
        </button>
        <button
          type="button"
          className="w-[122px] rounded-2xl bg-mainBlue px-[10px] py-3 font-semibold hover:bg-mainBlueHover"
          onClick={handleSubmit}
        >
          적용
        </button>
      </div>
    </div>
  );
}
