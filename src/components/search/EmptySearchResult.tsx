export default function EmptySearchResult({ text }: { text: string }) {
  return (
    <div className="flex justify-center items-center flex-col py-16 bg-card-white rounded-lg gap-2">
      <p className="text-center font-normal text-3xl md:text-7xl tracking-[0.31em] text-font-baseBlack">
        NOT FOUND
      </p>
      <p className="font-normal text-xl md:text-3xl tracking-[-2.5%] text-font-baseBlack">
        {text}
      </p>
    </div>
  );
}
