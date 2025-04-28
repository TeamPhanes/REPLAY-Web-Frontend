const parseDate = (dateString: string) => {
  const date = new Date(dateString);

  const fullYear = date.getFullYear();
  const shortYear = String(fullYear).slice(2);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return { fullYear, shortYear, month, day, hours, minutes };
};

// Ex) 2025-04-01 13:00
export const yearMonthDayHourTime = (dateString: string) => {
  const { fullYear, month, day, hours } = parseDate(dateString);
  return `${fullYear}-${month}-${day} ${hours}:00`;
};

// Ex) 25.04.01
export const periodYearMonthDay = (dateString: string) => {
  const { shortYear, month, day } = parseDate(dateString);
  return `${shortYear}.${month}.${day}`;
};

// Ex) 2025.04.01
export const periodFullYearMonthDay = (dateString: string) => {
  const { fullYear, month, day } = parseDate(dateString);
  return `${fullYear}.${month}.${day}`;
};

// Ex) 25.04.01 12:50
export const periodYearMonthDayHourTime = (dateString: string) => {
  const { shortYear, month, day, hours, minutes } = parseDate(dateString);
  return `${shortYear}.${month}.${day} ${hours}:${minutes}`;
};

// Ex) 2025년 04월 01일
export const koreaYearMonthDay = (dateString: string) => {
  const { fullYear, month, day } = parseDate(dateString);
  return `${fullYear}년 ${month}월 ${day}일`;
};

// Ex) 12:30
export const HourTime = (dateString: string) => {
  const { hours, minutes } = parseDate(dateString);
  return `${hours} : ${minutes}`;
};

// Ex) 1년 2개월, 2개월 10일, 10일 (활동 기간을 체크하는 함수)
export const periodOfActivity = (dateString: string) => {
  if (!dateString) {
    return '알 수 없음';
  }

  const today = new Date();
  const createdAt = new Date(dateString);

  let years = today.getFullYear() - createdAt.getFullYear();
  let months = today.getMonth() - createdAt.getMonth();
  let days = today.getDate() - createdAt.getDate();

  if (days < 0) {
    months -= 1;

    const previewMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += previewMonth.getDate();
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  if (years > 0) {
    return `${years}년${months > 0 ? ` ${months}개월` : ''}`;
  }

  if (months > 0) {
    return `${months}개월${days > 0 ? ` ${days}일` : ''}`;
  }

  return `${days}일`;
};
