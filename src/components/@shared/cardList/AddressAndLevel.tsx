import Image from 'next/image';
import CheckList from '@/components/@shared/cardList/CheckList';
import AddressIcon from '@/public/icons/cardList/address_icon.svg';
import LevelIcon from '@/public/icons/cardList/level_icon.svg';
import UserIcon from '@/public/icons/cardList/user_icon.svg';

interface AddressAndLevelProps {
  address: string;
  level: string;
  minPlayer: number;
  maxPlayer: number;
}

export default function AddressAndLevel({
  address,
  level,
  minPlayer,
  maxPlayer,
}: AddressAndLevelProps) {
  return (
    <>
      <div className="flex items-center gap-1">
        <Image src={AddressIcon} alt="주소 아이콘" width={24} height={24} />
        <p className="truncate text-base font-normal tracking-[-2.5%] text-basefont">
          {address}
        </p>
      </div>
      <div className="flex items-center">
        <Image
          src={LevelIcon}
          alt="난이도 아이콘"
          width={24}
          height={24}
          className="mr-1"
        />
        <CheckList
          title="난이도"
          contentOne="쉬움"
          contentTwo="보통"
          contentThree="어려움"
          check={level}
        />
        <Image
          src={UserIcon}
          alt="유저 아이콘"
          width={24}
          height={24}
          className="ml-4"
        />
        <p className="font-normal text-base tracking-[-2.5%] text-basefont mx-1">
          인원
        </p>
        <p className="font-normal text-base tracking-[-2.5%] text-basefont mx-1">
          {String(minPlayer).padStart(2, '0')} ~{' '}
          {String(maxPlayer).padStart(2, '0')}
        </p>
      </div>
    </>
  );
}
