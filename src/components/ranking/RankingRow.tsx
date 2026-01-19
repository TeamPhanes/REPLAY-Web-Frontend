'use client';

interface RankingRowProps {
  rank: number;
  nickname: string;
  score: number;
  theme: string;
  prevRank: string;
}

export default function RankingRow({
  rank,
  nickname,
  score,
  theme,
  prevRank,
}: RankingRowProps) {
  const isTop3 = rank <= 3;

  const rankSize = isTop3
    ? 'text-xl md:text-[48px]/[62px] xl:text-[64px]/[80px]'
    : 'text-xs md:text-[28px]/[38px] xl:text-[36px]/[48px]';
  const textSize = isTop3
    ? 'text-sm md:text-[32px]/[42px] xl:text-[32px]/[42px]'
    : 'text-xs md:text-[28px]/[38px] xl:text-[32px]/[42px]';

  return (
    <div className="mt-3 grid grid-cols-5 items-center px-0 md:px-10">
      <p
        className={`${rankSize} text-center font-semibold text-font-baseWhite`}
      >
        {rank}
      </p>

      <p
        className={`${textSize} text-center font-semibold text-font-baseWhite`}
      >
        {nickname}
      </p>

      <p
        className={`${textSize} text-center font-semibold text-font-baseWhite`}
      >
        {score}
      </p>

      <p
        className={`${textSize} text-center font-semibold text-font-baseWhite`}
      >
        {theme}
      </p>

      <p
        className={`${textSize} text-center font-semibold text-font-baseWhite`}
      >
        {prevRank}
      </p>
    </div>
  );
}
