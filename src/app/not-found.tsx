import Image from 'next/image';
import NotFound404 from '@/public/images/error/404.png';

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Image
        src={NotFound404}
        alt="404 오류"
        width={643}
        height={399}
        quality={100}
        priority
        className="w-[643px] h-[399px]"
      />
    </div>
  );
}
