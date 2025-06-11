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
        className="w-[99px] h-[99px] rounded-2xl"
      />
      <div className="flex flex-col">
        <p className="font-semibold text-xl tracking-[-2.5%] text-basefont">
          {themeName}
        </p>
        <p className="font-normal text-base tracking-[-2.5%] text-basefont">
          {cafe} {spot}
        </p>
      </div>
    </div>
  );
}
