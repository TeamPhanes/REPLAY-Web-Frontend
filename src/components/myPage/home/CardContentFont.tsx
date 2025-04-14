import { koreaYearMonthDay, periodOfActivity } from '@/src/utils/dateChange';

interface CardContentFontProps {
  title: string;
  content: string | number;
}

export default function CardContentFont({
  title,
  content,
}: CardContentFontProps) {
  return (
    <div className="flex items-center">
      <p className="w-72 text-2xl/[34px] font-semibold tracking-[-2.5%] text-basefont">
        {title}
      </p>
      {typeof content === 'number' ? (
        <p className="w-20 text-xl font-normal tracking-[-2.5%] text-basefont">
          {content}개
        </p>
      ) : (
        <div className="relative flex w-20 items-center gap-3">
          <p className="text-nowrap text-xl font-normal tracking-[-2.5%] text-basefont">
            {periodOfActivity(content)}
          </p>
          <p className="absolute left-[108px] text-nowrap text-base font-normal tracking-[-2.5%] text-spot">
            {koreaYearMonthDay(content)}
          </p>
        </div>
      )}
    </div>
  );
}
