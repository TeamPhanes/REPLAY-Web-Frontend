import { stringToNumber } from '@/utils/numberUtils';

interface ProgressBarProps {
  value: string | number;
  max: number;
  bgColor?: string;
  progressColor?: string;
}

export default function ProgressBar({
  value,
  max,
  bgColor = 'bg-line-lightGray',
  progressColor = 'bg-brand-main500',
}: ProgressBarProps) {
  const numericValue = stringToNumber(value);
  const numericMax = stringToNumber(max);

  const percentage = numericValue === 0 ? 0 : (numericValue / numericMax) * 100;

  return (
    <div
      className={`h-20 w-[7px] overflow-hidden rounded-full flex justify-end flex-col ${bgColor}`}
    >
      <div
        className={`rounded-full transition-all duration-300 ${progressColor}`}
        style={{ height: `${percentage}%` }}
      />
    </div>
  );
}
