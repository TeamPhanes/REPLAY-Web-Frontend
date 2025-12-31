export default function EmptySearchResult({ text }: { text: string }) {
  return (
    <div className="flex justify-center items-center flex-col px-32 py-16 bg-card-white rounded-lg">
      <p className="text-center hidden md:block font-normal text-[64px] tracking-[0.31em] text-font-baseBlack">
        NOT FOUND
      </p>
      <p className="font-normal text-2xl/[34px] tracking-[-2.5%] text-font-baseBlack">
        {text}
      </p>
    </div>
  );
}
