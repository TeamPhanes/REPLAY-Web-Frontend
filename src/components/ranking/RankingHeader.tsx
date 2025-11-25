export default function RankingHeader() {
  return (
    <div className="bg-card-white rounded-lg py-6 px-24 grid grid-cols-5">
      <p className="text-brand-main500 text-base font-semibold text-center">
        순위
      </p>
      <p className="text-brand-main500 text-base font-semibold text-center border-x-[1px] border-line-lightGray">
        닉네임
      </p>
      <p className="text-brand-main500 text-base font-semibold text-center">
        총점수
      </p>
      <p className="text-brand-main500 text-base font-semibold text-center border-x-[1px] border-line-lightGray">
        선호 테마
      </p>
      <p className="text-brand-main500 text-base font-semibold text-center">
        전 분기 순위
      </p>
    </div>
  );
}
