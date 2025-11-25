interface StatCardProps {
  value: number | string;
  title: string;
  desc?: string;
}

export default function StatCard({ value, title, desc }: StatCardProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-8xl/[120px] text-font-secondBlack font-semibold">
        {value}
      </p>
      <p className="text-base text-font-baseBlack font-normal">{title}</p>

      {desc && (
        <p className="text-xs text-font-baseBlack font-normal">{desc}</p>
      )}
    </div>
  );
}
