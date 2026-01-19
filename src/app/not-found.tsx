import Image from 'next/image';
import image404 from '@/public/images/error/404.png';
import error from '@/public/images/error/error.png';
import human from '@/public/images/error/human.png';
import pageNotFound from '@/public/images/error/page_not_found.png';

export const dynamic = 'force-static';

export default function NotFound() {
  return (
    <div className="mt-80 flex w-full flex-col items-center justify-center">
      <Image
        src={error}
        alt="error"
        width={400}
        height={71}
        quality={100}
        priority
        className="md:h-[71px] md:w-[400px]"
      />
      <Image
        src={image404}
        alt="404"
        width={730}
        height={320}
        quality={100}
        priority
        className="mb-2 mt-10 md:h-[320px] md:w-[730px]"
      />
      <div className="flex items-end">
        <Image
          src={human}
          alt="human"
          width={93}
          height={100}
          quality={100}
          priority
          className="md:h-[100px] md:w-[93px]"
        />
        <Image
          src={pageNotFound}
          alt="Page Not Found"
          width={557}
          height={36}
          quality={100}
          priority
          className="md:h-[36px] md:w-[557px]"
        />
      </div>
    </div>
  );
}
