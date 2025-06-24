import Image from 'next/image';
import ComingSoonDoor from '@/public/images/comingSoon/comingSoon_door.png';
import ComingSoonShadow from '@/public/images/comingSoon/comingSoon_shadow.png';

export default function ComingSoon() {
  return (
    <div className="flex justify-center items-center flex-col">
      <p className="font-normal text-[64px] tracking-[0.31em] mb-40 max-w-[665px] animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white">
        COMING SOON
      </p>
      <Image
        src={ComingSoonDoor}
        alt="우리"
        width={271}
        height={548}
        priority
        quality={100}
        className=""
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
  );
}
