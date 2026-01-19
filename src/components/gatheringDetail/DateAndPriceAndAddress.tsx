import Image from 'next/image';
import { yearMonthDayHourTime } from '@/utils/dateChange';
import AddressIcon from '@/public/icons/cardList/address_gray_icon.svg';
import CalendarIcon from '@/public/icons/cardList/calendar_gray_icon.svg';
import CoinIcon from '@/public/icons/cardList/coin_gray_icon.svg';
import InformationIcon from '@/public/icons/cardList/info_gray_icon.svg';

interface DateAndPriceProps {
  dateTime: string;
  price: number;
  address: string;
}

export default function DateAndPriceAndAddress({
  dateTime,
  price,
  address,
}: DateAndPriceProps) {
  return (
    <>
      <div className="flex items-center gap-4 md:gap-14">
        <div className="flex items-center gap-2">
          <Image
            src={CalendarIcon}
            alt="캘린더 아이콘"
            width={24}
            height={24}
          />
          <p className="text-base font-normal tracking-[-2.5%] text-font-baseBlack">
            {yearMonthDayHourTime(dateTime)}
          </p>
        </div>
        <div className="group flex items-center gap-2">
          <Image src={CoinIcon} alt="금액 아이콘" width={24} height={24} />
          <p className="text-base font-normal tracking-[-2.5%] text-font-baseBlack">
            {price.toLocaleString()}원
          </p>
          <div className="relative">
            <p className="absolute -left-16 -top-12 min-w-[134px] bg-white p-[10px] text-xs/[18px] font-normal tracking-[-2.5%] text-font-disabled opacity-0 duration-300 group-hover:opacity-100">
              일인당 결제금액 입니다.
            </p>
            <Image
              src={InformationIcon}
              alt="안내 아이콘"
              width={16}
              height={16}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Image
          src={AddressIcon}
          alt="매장 위치 아이콘"
          width={24}
          height={24}
        />
        <p className="text-base font-normal tracking-[-2.5%] text-font-baseBlack">
          {address}
        </p>
      </div>
    </>
  );
}
