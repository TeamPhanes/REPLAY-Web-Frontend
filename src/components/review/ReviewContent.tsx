import Image from 'next/image';

interface ReviewContentProps {
  content: string;
  image: string | null;
}

export default function ReviewContent({ content, image }: ReviewContentProps) {
  return (
    <div className="mt-3 flex items-end gap-3 justify-between">
      <p className="line-clamp-3 text-base font-normal tracking-[-2.5%] text-basefont">
        {content}
      </p>
      {image !== null && (
        <Image
          src={image}
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
