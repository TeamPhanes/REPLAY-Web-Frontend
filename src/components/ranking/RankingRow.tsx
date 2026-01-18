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
    <div className="md:px-10 px-0 grid grid-cols-5 items-center mt-3">
      <p
        className={`${rankSize} text-font-baseWhite font-semibold text-center`}
      >
        {rank}
      </p>

      <p
        className={`${textSize} text-font-baseWhite font-semibold text-center`}
      >
        {nickname}
      </p>

      <p
        className={`${textSize} text-font-baseWhite font-semibold text-center`}
      >
        {score}
      </p>

      <p
        className={`${textSize} text-font-baseWhite font-semibold text-center`}
      >
        {theme}
      </p>

      <p
        className={`${textSize} text-font-baseWhite font-semibold text-center`}
      >
        {prevRank}
      </p>
    </div>
  );
}
