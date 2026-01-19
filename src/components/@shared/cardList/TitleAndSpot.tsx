interface TitleAndSpotProps {
  themeName: string;
  cafe: string;
  spot?: string;
  isDetail?: boolean;
}

export default function TitleAndSpot({
  themeName,
  cafe,
  spot,
  isDetail,
}: TitleAndSpotProps) {
  return (
    <div className={`${isDetail ? 'gap-1' : 'gap-[2px]'} flex flex-col`}>
      <h2
        className={`${isDetail ? 'text-3xl xl:text-4xl/[48px]' : 'text-2xl/[34px]'} truncate  font-semibold tracking-[-2.5%] text-font-baseBlack`}
      >
        {themeName}
      </h2>
      <p
        className={`${isDetail ? 'text-lg/[26px]' : 'text-xs/[18px]'} font-normal tracking-[-2.5%] text-font-disabled`}
      >
        {cafe}
        <span className="pr-1" />
        {spot}
      </p>
    </div>
  );
}
