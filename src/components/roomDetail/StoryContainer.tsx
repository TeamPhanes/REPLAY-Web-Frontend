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
      <p className="mx-auto line-clamp-[8] text-[13px]/[18px] font-normal tracking-[-2.5%] text-font-baseBlack mt-3 px-5">
        {story}
      </p>
      <button
        type="button"
        className="flex items-center justify-center w-full mt-3"
        onClick={openModal}
      >
        <p className="text-sm text-font-baseBlack font-normal">더보기</p>
        <Image
          src={ChevronDown}
          alt="스토리 더보기"
          width={18}
          height={18}
          className={`h-[18px] w-[18px] transition-transform transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
    </div>
  );
}
