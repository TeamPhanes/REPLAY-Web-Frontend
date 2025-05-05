interface TitleAndSpotProps {
  themeName: string;
  cafe: string;
  spot: string;
}

export default function TitleAndSpot({
  themeName,
  cafe,
  spot,
}: TitleAndSpotProps) {
  return (
    <div className="flex flex-col gap-[2px]">
      <h2 className="truncate text-2xl/[34px] font-semibold tracking-[-2.5%] text-basefont">
        {themeName}
      </h2>
      <p className="text-xs/[18px] font-normal tracking-[-2.5%] text-spot">
        {cafe}
        <span className="pr-1" />
        {spot}
      </p>
    </div>
  );
}
