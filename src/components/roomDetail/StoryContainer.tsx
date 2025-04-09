interface StoryContainerProps {
  openModal: () => void;
  story: string;
}

export default function StoryContainer({
  openModal,
  story,
}: StoryContainerProps) {
  return (
    <div className="cursor-pointer" onClick={openModal}>
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
    </div>
  );
}
