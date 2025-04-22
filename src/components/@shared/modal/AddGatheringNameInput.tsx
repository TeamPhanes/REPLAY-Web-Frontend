import Image from 'next/image';

export default function AddGatheringNameInput() {
  return (
    <div className="flex gap-2 border-b-[1px] border-tag items-center mt-[30px]">
      <Image
        src="/icons/mypage/gray_pencil.svg"
        alt="연필 아이콘"
        width={32}
        height={32}
        className="w-8 h-8"
      />
      <input
        type="text"
        placeholder="모임명을 입력해 주세요."
        className="w-full py-1 font-normal text-2xl/[34px] tracking-[-2.5%] text-basefont"
      />
    </div>
  );
}
