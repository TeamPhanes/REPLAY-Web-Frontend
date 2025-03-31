import Image from 'next/image';
import AddressIcon from '@/public/icons/cardList/address_icon.svg';
import LevelIcon from '@/public/icons/cardList/level_icon.svg';

interface AddressAndLevelProps {
  address: string;
  level: string;
}

export default function AddressAndLevel({
  address,
  level,
}: AddressAndLevelProps) {
  return (
    <>
      <div className="flex items-center">
        <Image src={AddressIcon} alt="주소 아이콘" width={24} height={24} />
        <p className="truncate text-base font-normal tracking-[-2.5%] text-basefont">
          {address}
        </p>
      </div>
      <div className="flex items-center">
        <Image src={LevelIcon} alt="난이도 아이콘" width={24} height={24} />
        <p className="mr-2 truncate text-base font-normal tracking-[-2.5%] text-basefont">
          난이도
        </p>
        <ul className="flex gap-2">
          <li
            className={`${level === '쉬움' ? 'font-semibold text-mainBlue' : 'font-light text-spot'} text-base font-light tracking-[-2.5%]`}
          >
            쉬움
          </li>
          <li
            className={`${level === '보통' ? 'font-semibold text-mainBlue' : 'font-light text-spot'} text-base font-light tracking-[-2.5%]`}
          >
            보통
          </li>
          <li
            className={`${level === '어려움' ? 'font-semibold text-mainBlue' : 'font-light text-spot'} text-base font-light tracking-[-2.5%]`}
          >
            어려움
          </li>
        </ul>
      </div>
    </>
  );
}
