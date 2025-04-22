import Image from 'next/image';

export default function AddGatheringValues() {
  return (
    <div className="flex justify-between mt-8">
      <div className="flex flex-col">
        <p className="font-medium text-2xl/[34px] tracking-[-2.5%] text-basefont">
          모임 일정
        </p>
        <div className="rounded-full bg-card py-2 px-4 font-normal text-xl tracking-[-2.5%] text-basefont mt-3">
          2025-04-15 13:00
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-medium text-2xl/[34px] tracking-[-2.5%] text-basefont">
          모임 인원
        </p>
        <div className="rounded-full bg-card py-2 px-4 mt-3 flex items-center justify-center gap-1">
          <p className="font-normal text-xl tracking-[-2.5%] text-basefont">
            00
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
            24,000원
          </div>
        </div>
      </div>
    </div>
  );
}
