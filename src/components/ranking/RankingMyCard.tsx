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
    <div className="my-2 px-5 py-6 md:my-8 md:px-10 xl:px-24">
      <p className="w-full text-sm font-semibold text-font-baseWhite md:text-base">
        내 순위
      </p>

      <div className="mt-6 grid grid-cols-5">
        <p className="text-sm font-semibold text-font-baseWhite md:text-xl xl:text-4xl/[48px]">
          {rank}
        </p>
        <p className="text-center text-sm font-semibold text-font-baseWhite md:text-xl xl:text-4xl/[48px]">
          {nickname}
        </p>
        <p className="text-center text-sm font-semibold text-font-baseWhite md:text-xl xl:text-4xl/[48px]">
          {score}
        </p>
        <p className="text-center text-sm font-semibold text-font-baseWhite md:text-xl xl:text-4xl/[48px]">
          {theme}
        </p>
        <p className="text-center text-sm font-semibold text-font-baseWhite md:text-xl xl:text-4xl/[48px]">
          {prevRank}
        </p>
      </div>
    </div>
  );
}
