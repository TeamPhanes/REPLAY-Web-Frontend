interface StatCardProps {
  value: number | string;
  title: string;
  desc?: string;
}

export default function StatCard({ value, title, desc }: StatCardProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-[clamp(28px,10vw,64px)] font-semibold text-font-secondBlack md:text-[64px]/[80px] xl:text-8xl/[120px]">
        {value}
      </p>
      <p className="text-[clamp(8px,2vw,14px)] font-normal text-font-baseBlack md:text-sm xl:text-base">
        {title}
      </p>

      {desc && (
        <p className="text-[clamp(6px,2vw,12px)] font-normal text-font-baseBlack md:text-xs">
          {desc}
        </p>
      )}
    </div>
  );
}
