interface RoomDetailStoryProps {
  story: string;
}

export default function RoomDetailStroy({ story }: RoomDetailStoryProps) {
  return (
    <>
      <div className="relative mt-6 flex items-center justify-center">
        <div className="w-full border-t border-black" />
        <p className="min-w-[90px] text-center text-2xl/[34px] font-semibold tracking-[-2.5%] text-basefont">
          스토리
        </p>
        <div className="w-full border-t border-black" />
      </div>
      <p className="mx-auto line-clamp-3 w-[391px] text-base font-normal tracking-[-2.5%] text-basefont">
        {story}
      </p>
      <div className="mt-4 flex justify-between">
        <button
          type="button"
          className="bg-detailButton h-[58px] w-[212px] rounded-2xl text-center text-2xl/[34px] font-semibold tracking-[-2.5%] text-basefont"
        >
          모임 만들기
        </button>
        <button
          type="button"
          className="bg-detailButton h-[58px] w-[212px] rounded-2xl text-center text-2xl/[34px] font-semibold tracking-[-2.5%] text-basefont"
        >
          예약하기
        </button>
      </div>
    </>
  );
}
