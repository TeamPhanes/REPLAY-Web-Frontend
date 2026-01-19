import Image from 'next/image';
import ChevronDown from '@/public/icons/arrow/chevron_black_down.svg';

interface StoryContainerProps {
  isOpen: boolean;
  openModal: () => void;
  story: string;
}

export default function StoryContainer({
  isOpen,
  openModal,
  story,
}: StoryContainerProps) {
  return (
    <div className="md:mb-0">
      <p className="min-w-[90px] text-center text-xl font-normal tracking-[-2.5%] text-font-baseBlack">
        스토리
      </p>
      <p className="mx-auto mt-3 line-clamp-[8] px-5 text-[13px]/[18px] font-normal tracking-[-2.5%] text-font-baseBlack">
        {story}
      </p>
      <button
        type="button"
        className="mt-3 flex w-full items-center justify-center"
        onClick={openModal}
      >
        <p className="text-sm font-normal text-font-baseBlack">더보기</p>
        <Image
          src={ChevronDown}
          alt="스토리 더보기"
          width={18}
          height={18}
          className={`h-[18px] w-[18px] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
    </div>
  );
}
