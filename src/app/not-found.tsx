import Image from 'next/image';
import image404 from '@/public/images/error/404.png';
import error from '@/public/images/error/error.png';
import human from '@/public/images/error/human.png';
import pageNotFound from '@/public/images/error/page_not_found.png';

export const dynamic = 'force-static';

export default function NotFound() {
  return (
    <div className="w-full mt-40 flex items-center flex-col justify-center">
      <Image
        src={error}
        alt="error"
        width={400}
        height={71}
        quality={100}
        priority
        className="md:w-[400px] md:h-[71px]"
      />
      <Image
        src={image404}
        alt="404"
        width={730}
        height={320}
        quality={100}
        priority
        className="mt-10 mb-2 md:w-[730px] md:h-[320px]"
      />
      <div className="flex items-end">
        <Image
          src={human}
          alt="human"
          width={93}
          height={100}
          quality={100}
          priority
          className="md:w-[93px] md:h-[100px]"
        />
        <Image
          src={pageNotFound}
          alt="Page Not Found"
          width={557}
          height={36}
          quality={100}
          priority
          className="md:w-[557px] md:h-[36px]"
        />
      </div>
    </div>
  );
}
