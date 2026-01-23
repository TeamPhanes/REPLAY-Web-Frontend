import { koreaYearMonthDay, periodOfActivity } from '@/utils/dateChange';

interface CardContentFontProps {
  title: string;
  content: string | number;
}

export default function CardContentFont({
  title,
  content,
}: CardContentFontProps) {
  return (
    <div className="flex w-full items-center">
      <p className="w-full text-xl font-semibold tracking-[-2.5%] text-basefont md:w-72 md:text-2xl/[34px]">
        {title}
      </p>
      {typeof content === 'number' ? (
        <p className="w-20 text-lg font-normal tracking-[-2.5%] text-basefont md:text-xl">
          {content}개
        </p>
      ) : (
        <div className="relative flex w-20 items-center gap-3">
          <p className="text-nowrap text-lg font-normal tracking-[-2.5%] text-basefont md:text-xl">
            {periodOfActivity(content)}
          </p>
          <p className="absolute left-[108px] hidden text-nowrap text-base font-normal tracking-[-2.5%] text-spot md:block">
            {koreaYearMonthDay(content)}
          </p>
        </div>
      )}
    </div>
  );
}
