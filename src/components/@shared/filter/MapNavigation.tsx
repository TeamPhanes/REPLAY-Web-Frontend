import Image from 'next/image';
import Link from 'next/link';
import { mapNavList } from '@/constants/filter/mapNavList';
import MapIcon from '@/public/icons/filter/map.svg';

interface MapNavigationProps {
  target: string;
}

export default function MapNavigation({ target }: MapNavigationProps) {
  return (
    <Link
      href={mapNavList[target].value}
      className="bg-card absolute right-0 top-[-3px] hidden items-center justify-center gap-1 rounded-full px-4 py-2 md:flex"
    >
      <Image src={MapIcon} alt="지도 아이콘" width={20} height={20} />
      <p className="text-base font-medium tracking-[-2.5%] text-basefont">
        지도로 보기
      </p>
    </Link>
  );
}
