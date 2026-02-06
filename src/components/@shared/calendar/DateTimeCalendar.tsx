'use client';

import { useRef, useState } from 'react';
import Calendar from 'react-calendar';
import Image from 'next/image';
import '@/styles/dateTimeCalendar.css';
import ScrollTimePicker from '@/components/@shared/calendar/ScrollTimePicker';
import { koreaYearMonthDay } from '@/utils/dateChange';
import BlackRefreshIcon from '@/public/icons/date/black_refresh.svg';
import MainBlueButton from '../button/MainBlueButton';
import MainWhiteButton from '../button/MainWhiteButton';

type CalendarValue = Date | null | [Date | null, Date | null];

interface DateTimeCalendarProps {
  isOpen: boolean;
  selectedDate: Date;
  onClose(): void;
  onDateChange(date: Date): void;
}

/**
 * 공통 DateTime Calendar 컴포넌트
 * @param isOpen 캘린더의 열린 상태 (true), 닫힌 상태 (false)를 가지는 boolean state
 * @param onClose 캘린더의 닫는 기능을 실행하는 함수
 * @param onDateChange 캘린더의 값을 교환하는 함수
 */

export default function DateTimeCalendar({
  isOpen,
  selectedDate,
  onClose,
  onDateChange,
}: DateTimeCalendarProps) {
  const now = new Date();
  now.setMinutes(0);
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const initialSelectedDateRef = useRef(new Date(selectedDate));

  const [activeStartDate, setActiveStartDate] = useState<Date>(
    new Date(selectedDate)
  );
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
    setActiveStartDate(new Date(resetDate));
    onDateChange(resetDate);
  };

  const handleGoToToday = () => {
    setDate(now);
    setActiveStartDate(now);
  };

  const handleNextYear = () => {
    const nextYearDate = new Date(date);
    nextYearDate.setFullYear(nextYearDate.getFullYear() + 1);
    setDate(nextYearDate);
    setActiveStartDate(nextYearDate);
  };

  const handleSubmit = () => {
    const finalDate = getFinalDate();
    onDateChange(finalDate);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex animate-modalIn items-center justify-center bg-[#505050]/60">
      <div className="scrollbar-x-hidden z-[60] max-h-[calc(100vh-120px)] max-w-[calc(100vw-20px)] overflow-auto rounded-lg bg-white px-5 py-8 md:max-h-[calc(100vh-40px)] md:px-[60px]">
        <p className="text-center text-2xl font-semibold text-font-baseBlack md:text-[32px]/[42px]">
          모임 일정을 설정해 주세요
        </p>
        <div className="mt-5 flex flex-col border-b-[1px] border-line-lightGray pb-8 xl:flex-row">
          <div className="flex flex-col items-center justify-center gap-4 md:gap-7">
            <p className="text-xl font-semibold text-font-baseBlack md:text-2xl/[34px]">
              날짜 선택
            </p>
            <Calendar
              onChange={handleDateChange}
              value={date}
              activeStartDate={activeStartDate}
              onActiveStartDateChange={({
                activeStartDate: nextActiveStartDate,
              }) => {
                if (nextActiveStartDate)
                  setActiveStartDate(nextActiveStartDate);
              }}
              calendarType="gregory"
              locale="ko-kr"
              formatDay={(locale, data) => String(data.getDate())}
              next2Label={null}
              prev2Label={null}
              minDetail="year"
              className="date-time-calendar"
            />
            <div className="relative flex w-full items-center gap-4 xl:gap-6">
              <MainWhiteButton onClick={handleGoToToday}>TODAY</MainWhiteButton>
              <MainWhiteButton onClick={handleNextYear}>
                NEXT YEAR
              </MainWhiteButton>
              <button
                type="button"
                onClick={handleReset}
                className="absolute right-0 flex h-10 w-10 items-center justify-center rounded-[4px] border-[1px] border-font-baseBlack duration-500 ease-in-out hover:border-line-Gray hover:bg-[#F2F2F2]"
              >
                <Image
                  src={BlackRefreshIcon}
                  alt="초기화"
                  width={24}
                  height={24}
                  className="hover:animate-pulse"
                />
              </button>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4 md:gap-7 xl:mt-0 xl:pl-5">
            <p className="text-xl font-semibold text-font-baseBlack md:text-2xl/[34px]">
              시간 선택
            </p>
            <p className="text-base font-semibold text-font-baseBlack">
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

        <div className="mt-4 flex flex-col items-center justify-between md:mt-8 md:flex-row">
          <p className="text-xl font-semibold text-font-baseBlack md:text-[32px]/[42px]">
            {koreaYearMonthDay(date)} {selectedHour.toString().padStart(2, '0')}
            :{selectedMinute.toString().padStart(2, '0')}시
          </p>
          <MainBlueButton
            type="button"
            className="mt-4 h-[52px] w-40 !text-base md:mt-0"
            onClick={handleSubmit}
          >
            확정 하기
          </MainBlueButton>
        </div>
      </div>
    </div>
  );
}
