import { stringToNumber } from '@/utils/numberUtils';

interface ProgressBarProps {
  value: string | number;
  max?: string | number;
  bgColor?: string;
  progressColor?: string;
}

export default function ProgressBar({
  value,
  max = 100,
  bgColor = 'bg-progressBar',
  progressColor = 'bg-mainBlue',
}: ProgressBarProps) {
  const numericValue = stringToNumber(value);
  const numericMax = stringToNumber(max);

  const percentage = numericValue === 0 ? 0 : (numericValue / numericMax) * 100;

  return (
    <div className={`h-[10px] w-full overflow-hidden rounded-full ${bgColor}`}>
      <div
        className={`h-full rounded-full transition-all duration-300 ${progressColor}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
