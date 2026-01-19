export default function EmptySearchResult({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-card-white py-16">
      <p className="text-center text-3xl font-normal tracking-[0.31em] text-font-baseBlack md:text-7xl">
        NOT FOUND
      </p>
      <p className="text-xl font-normal tracking-[-2.5%] text-font-baseBlack md:text-3xl">
        {text}
      </p>
    </div>
  );
}
