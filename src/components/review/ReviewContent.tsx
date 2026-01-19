import Image from 'next/image';

interface ReviewContentProps {
  content: string;
  images: { id: number; image: string }[];
}

export default function ReviewContent({ content, images }: ReviewContentProps) {
  return (
    <div className="mt-3 flex items-end justify-between gap-3">
      <p className="line-clamp-3 text-base font-normal tracking-[-2.5%] text-basefont">
        {content}
      </p>
      {images.length !== 0 && (
        <Image
          src={images[0].image}
          alt="리뷰 이미지"
          width={100}
          height={100}
          quality={100}
          className="h-[100px] w-[100px]"
        />
      )}
    </div>
  );
}
