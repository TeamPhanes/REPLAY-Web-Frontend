import Image from 'next/image';
import ComingSoonDoor from '@/public/images/comingSoon/comingSoon_door.png';
import ComingSoonShadow from '@/public/images/comingSoon/comingSoon_shadow.png';

export default function ComingSoon() {
  return (
    <div className="flex justify-between items-center flex-col h-[796px]">
      <p className="font-normal text-[64px] tracking-[0.31em] mt-20 mb-20 max-w-[665px] animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white">
        COMING SOON
      </p>
      <div className="flex flex-col items-center absolute -bottom-32">
        <Image
          src={ComingSoonDoor}
          alt="우리"
          width={271}
          height={548}
          priority
          quality={100}
        />
        <Image
          src={ComingSoonShadow}
          alt="곧 만나요!"
          width={747}
          height={128}
          priority
          quality={100}
          className="ml-6"
        />
      </div>
    </div>
  );
}
