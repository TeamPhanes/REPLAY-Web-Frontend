import Image from 'next/image';
import { locationList } from '@/constants/filter/locationList';
import BlackChevronDown from '@/public/icons/filter/black_chevron_down.svg';

export default function LocationFilter() {
  return (
    <div className="flex gap-2">
      {Object.keys(locationList).map((key) => {
        const list = locationList[key];
        return (
          <button
            key={key}
            type="button"
            className="flex items-center justify-center gap-1 rounded-full bg-card px-4 py-2"
          >
            <p className="text-base font-medium tracking-[-2.5%] text-basefont">
              {list.label}
            </p>
            <Image
              src={BlackChevronDown}
              alt="더보기"
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </button>
        );
      })}
    </div>
  );
}
