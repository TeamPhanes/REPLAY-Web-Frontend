const formatDate = (dateString: string) => {
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
  const { fullYear, month, day, hours, minutes } = formatDate(dateString);
  return `${fullYear}-${month}-${day} ${hours}:${minutes}`;
};

// Ex) 25.04.01
export const periodYearMonthDay = (dateString: string) => {
  const { shortYear, month, day } = formatDate(dateString);
  return `${shortYear}.${month}.${day}`;
};

// Ex) 25.04.01 12:50
export const periodYearMonthDayHourTime = (dateString: string) => {
  const { shortYear, month, day, hours, minutes } = formatDate(dateString);
  return `${shortYear}.${month}.${day} ${hours}:${minutes}`;
};
