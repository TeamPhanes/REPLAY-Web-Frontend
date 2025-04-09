import StorySection from './StorySection';

interface RoomDetailStoryProps {
  story: string;
}

export default function RoomDetailStroy({ story }: RoomDetailStoryProps) {
  return (
    <>
      <StorySection story={story} />
      <div className="mt-4 flex justify-between">
        <button
          type="button"
          className="h-[58px] w-[212px] rounded-2xl bg-detailButton text-center text-2xl/[34px] font-semibold tracking-[-2.5%] text-basefont"
        >
          모임 만들기
        </button>
        <button
          type="button"
          className="h-[58px] w-[212px] rounded-2xl bg-detailButton text-center text-2xl/[34px] font-semibold tracking-[-2.5%] text-basefont"
        >
          예약하기
        </button>
      </div>
    </>
  );
}
