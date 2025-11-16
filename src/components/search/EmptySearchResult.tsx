export default function EmptySearchResult() {
  return (
    <div className="flex justify-center items-center flex-col px-32 py-16">
      <p className="text-center hidden md:block font-normal text-[64px] tracking-[0.31em]">
        NOT FOUND
      </p>
      <p className="font-normal text-2xl/[34px] tracking-[-2.5%]">
        열쇠를 찾지 못했어요.
      </p>
    </div>
  );
}
