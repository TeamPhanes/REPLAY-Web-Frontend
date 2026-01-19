export default function RankingHeader() {
  return (
    <div className="grid grid-cols-5 rounded-lg bg-card-white px-2 py-4 md:px-10 md:py-6 xl:px-24">
      <p className="text-center text-xs font-semibold text-brand-main500 md:text-base">
        순위
      </p>
      <p className="border-line-lightGray text-center text-xs font-semibold text-brand-main500 md:text-base xl:border-x-[1px]">
        닉네임
      </p>
      <p className="text-center text-xs font-semibold text-brand-main500 md:text-base">
        총점수
      </p>
      <p className="border-line-lightGray text-center text-xs font-semibold text-brand-main500 md:text-base xl:border-x-[1px]">
        선호 테마
      </p>
      <p className="text-center text-xs font-semibold text-brand-main500 md:text-base">
        전 분기 순위
      </p>
    </div>
  );
}
