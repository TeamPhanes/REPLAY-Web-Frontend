import Image from 'next/image';
import LocationFilter from '@/components/@shared/filter/LocationFilter';

export default function AddGatheringLocation() {
  return (
    <div className="mb-6 flex gap-2 md:gap-10">
      <div className="flex items-center gap-[2px]">
        <Image
          src="/icons/modal/location.svg"
          alt="지역 아이콘"
          width={32}
          height={32}
          className="h-6 w-6 md:h-8 md:w-8"
        />
        <p className="text-sm font-semibold tracking-[-2.5%] text-basefont md:text-base">
          지역 설정
        </p>
      </div>
    </div>
  );
}
