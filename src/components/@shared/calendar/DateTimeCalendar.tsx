'use client';

import { useRef, useState } from 'react';
import Calendar from 'react-calendar';
import '@/styles/dateTimeCalendar.css';
import ScrollTimePicker from '@/components/@shared/calendar/ScrollTimePicker';
import { HourTime, koreaYearMonthDay } from '@/utils/dateChange';
import MainBlueButton from '../button/MainBlueButton';

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

  if (!isOpen) return null;

  return (
    <div
      className={`${layout} shrink-0 absolute z-[60] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-[60px] py-8 rounded-lg`}
    >
      <p className="text-[32px]/[42px] text-font-baseBlack font-semibold text-center">
        모임 일정을 설정해 주세요
      </p>
      <div className="flex h-[527px] flex-row mt-5 border-b-[1px] border-line-lightGray pb-8">
        <div className="flex flex-col gap-7">
          <p className="text-2xl/[34px] text-font-baseBlack font-semibold">
            날짜 선택
          </p>
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
        <div className="flex flex-col gap-7 pl-5">
          <p className="text-2xl/[34px] text-font-baseBlack font-semibold">
            시간 선택
          </p>
          <p className="text-base text-font-baseBlack font-semibold">
            {koreaYearMonthDay(date)}
          </p>
          <ScrollTimePicker
            selectedHour={selectedHour}
            selectedMinute={selectedMinute}
            onHourChange={setSelectedHour}
            onMinuteChange={setSelectedMinute}
          />
        </div>
      </div>

      <div className="mt-8 flex justify-between items-center">
        {/* <button
          type="button"
          className="w-[122px] border-cardActive border-2 py-3 px-[10px] text-buttonColor200 rounded-2xl bg-white font-semibold hover:bg-buttonColor200Hover"
          onClick={handleReset}
        >
          초기화
        </button> */}
        <p className="text-[32px]/[42px] text-font-baseBlack font-semibold">
          {koreaYearMonthDay(date)} {selectedHour.toString().padStart(2, '0')}:
          {selectedMinute.toString().padStart(2, '0')}시
        </p>
        <MainBlueButton
          type="button"
          className="!text-base w-40 h-[52px]"
          onClick={handleSubmit}
        >
          확정 하기
        </MainBlueButton>
      </div>
    </div>
  );
}
