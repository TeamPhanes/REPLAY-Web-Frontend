import Image from 'next/image';

interface PostReviewTitleProps {
  listImage: string;
  themeName: string;
  cafe: string;
  spot: string;
}
export default function PostReviewTitle({
  listImage,
  themeName,
  cafe,
  spot,
}: PostReviewTitleProps) {
  return (
    <div className="flex items-center gap-5">
      <Image
        src={listImage}
        alt="방탈출 이미지"
        width={99}
        height={99}
        className="h-[99px] w-[99px] rounded-2xl"
      />
      <div className="flex flex-col">
        <p className="text-base font-semibold tracking-[-2.5%] text-basefont md:text-xl">
          {themeName}
        </p>
        <p className="text-sm font-normal tracking-[-2.5%] text-basefont md:text-base">
          {cafe} {spot}
        </p>
      </div>
    </div>
  );
}
