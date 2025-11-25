interface RankingMyCardProps {
  rank: number;
  nickname: string;
  score: number;
  theme: string;
  prevRank: string;
}

export default function RankingMyCard({
  rank,
  nickname,
  score,
  theme,
  prevRank,
}: RankingMyCardProps) {
  return (
    <div className="py-6 px-24 my-8">
      <p className="w-full text-base text-font-baseWhite font-semibold">
        내 순위
      </p>

      <div className="grid grid-cols-5 mt-6">
        <p className="text-4xl/[48px] text-font-baseWhite font-semibold">
          {rank}
        </p>
        <p className="text-4xl/[48px] text-font-baseWhite font-semibold text-center">
          {nickname}
        </p>
        <p className="text-4xl/[48px] text-font-baseWhite font-semibold text-center">
          {score}
        </p>
        <p className="text-4xl/[48px] text-font-baseWhite font-semibold text-center">
          {theme}
        </p>
        <p className="text-4xl/[48px] text-font-baseWhite font-semibold text-center">
          {prevRank}
        </p>
      </div>
    </div>
  );
}
