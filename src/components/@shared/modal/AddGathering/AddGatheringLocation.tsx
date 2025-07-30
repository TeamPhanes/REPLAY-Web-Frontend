import Image from 'next/image';
import LocationFilter from '@/components/@shared/filter/LocationFilter';

export default function AddGatheringLocation() {
  return (
    <div className="flex gap-2 md:gap-10 mb-6">
      <div className="flex gap-[2px] items-center">
        <Image
          src="/icons/modal/location.svg"
          alt="지역 아이콘"
          width={32}
          height={32}
          className="w-6 h-6 md:w-8 md:h-8"
        />
        <p className="font-semibold text-sm md:text-base tracking-[-2.5%] text-basefont">
          지역 설정
        </p>
      </div>
      <LocationFilter />
    </div>
  );
}
