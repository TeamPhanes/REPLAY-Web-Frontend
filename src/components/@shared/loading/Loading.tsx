import Image from 'next/image';
import FinishLoading from '@/public/images/loading/finish_loading.gif';
import LoadingGif from '@/public/images/loading/loading.gif';

interface LoadingProps {
  isLoading: boolean;
}

export default function Loading({ isLoading }: LoadingProps) {
  const currentImage = isLoading ? LoadingGif : FinishLoading;
  const message = isLoading ? `열쇠를 찾는 중...` : '열쇠를 찾았습니다!';

  return (
    <div className="bg-brand fixed inset-0 flex h-full w-full flex-col items-center justify-center">
      <Image
        src={currentImage}
        alt={message}
        width={306}
        height={306}
        quality={100}
        priority
      />
      <p className="text-[32px]/[42px] font-normal tracking-[-2.5%] text-white">
        {message}
      </p>
    </div>
  );
}
