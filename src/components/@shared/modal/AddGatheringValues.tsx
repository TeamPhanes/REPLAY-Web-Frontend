import Image from 'next/image';

interface AddGatheringValuesProps {
  dateTime: string;
  capacity: number;
  price: number;
}

export default function AddGatheringValues({
  dateTime,
  capacity,
  price,
}: AddGatheringValuesProps) {
  return (
    <div className="flex justify-between mt-8">
      <div className="flex flex-col">
        <p className="font-medium text-2xl/[34px] tracking-[-2.5%] text-basefont">
          모임 일정
        </p>
        <div className="rounded-full bg-card py-2 px-4 font-normal text-xl tracking-[-2.5%] text-basefont mt-3">
          {dateTime}
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-medium text-2xl/[34px] tracking-[-2.5%] text-basefont">
          모임 인원
        </p>
        <div className="rounded-full bg-card py-2 px-4 mt-3 flex items-center justify-center gap-1">
          <p className="font-normal text-xl tracking-[-2.5%] text-basefont">
            {String(capacity).padStart(2, '0')}
          </p>
          <Image
            src="/icons/modal/black_chevron_down.svg"
            alt="모임 인원 버튼"
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-medium text-2xl/[34px] tracking-[-2.5%] text-basefont">
          가격
        </p>
        <div className="flex items-centers gap-2">
          <div className="rounded-full bg-card py-2 px-4 mt-3 flex items-center justify-center gap-1">
            <p className="font-normal text-xl tracking-[-2.5%] text-basefont">
              선택
            </p>
            <Image
              src="/icons/modal/black_chevron_down.svg"
              alt="가격 버튼"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </div>
          <div className="rounded-full bg-card py-2 px-4 font-normal text-xl tracking-[-2.5%] text-basefont mt-3">
            {price.toLocaleString()}원
          </div>
        </div>
      </div>
    </div>
  );
}
