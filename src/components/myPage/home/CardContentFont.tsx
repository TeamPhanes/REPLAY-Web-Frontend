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
      <p className="w-72 text-2xl/[34px] font-semibold tracking-[-2.5%] text-white">
        {title}
      </p>
      {typeof content === 'number' ? (
        <p className="w-20 text-xl font-normal tracking-[-2.5%] text-white">
          {content}개
        </p>
      ) : (
        <div className="relative flex w-20 items-center gap-3">
          <p className="text-nowrap text-xl font-normal tracking-[-2.5%] text-white">
            {periodOfActivity(content)}
          </p>
          <p className="absolute left-[92px] text-nowrap text-base font-normal tracking-[-2.5%] text-tag">
            {koreaYearMonthDay(content)}
          </p>
        </div>
      )}
    </div>
  );
}
