import Image from 'next/image';

interface ReviewContentProps {
  content: string;
  images: string[];
}

export default function ReviewContent({ content, images }: ReviewContentProps) {
  return (
    <div className="mt-3 flex items-center gap-3 justify-between">
      <p className="line-clamp-6 h-[144px] text-base font-normal tracking-[-2.5%] text-basefont">
        {content}
      </p>
      {images.length !== 0 && (
        <Image
          src={images[0]}
          alt="리뷰 대표이미지"
          width={162}
          height={162}
          quality={100}
          className="h-[162px] w-[162px] rounded-[10px]"
        />
      )}
    </div>
  );
}
