import Image from 'next/image';
import ComingSoonDoor from '@/public/images/comingSoon/comingSoon_door.png';
import ComingSoonShadow from '@/public/images/comingSoon/comingSoon_shadow.png';

export default function ComingSoon() {
  return (
    <div className="flex h-[667px] flex-col items-center justify-between md:h-[796px]">
      <p className="max-w-[250px] animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-2xl font-normal tracking-[0.31em] md:my-20 md:max-w-[665px] md:text-6xl">
        COMING SOON
      </p>
      <div className="absolute -bottom-9 flex flex-col items-center md:-bottom-32">
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
