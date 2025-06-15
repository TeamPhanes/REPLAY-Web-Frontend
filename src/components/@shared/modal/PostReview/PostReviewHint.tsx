import Image from 'next/image';
import ValueDropdown from '@/components/@shared/dropdown/ValueDropdown';
import { useOpen } from '@/hooks/useOpen';

interface PostReviewHintProps {
  hint: number;
  setHint: (value: number) => void;
}
export default function PostReviewHint({ hint, setHint }: PostReviewHintProps) {
  const hintList = [0, 1, 2, 3, 4, 5];
  const { isOpen, toggleOpen } = useOpen();
  return (
    <div className="flex items-center mt-2">
      <p className="font-normal text-2xl/[34px] tracking-[-2.5%] text-basefont w-44">
        힌트 사용 횟수
      </p>
      <div className="rounded-full bg-card py-2 px-4 flex items-center justify-center gap-1">
        <p className="font-normal text-base tracking-[-2.5%] text-basefont">
          {String(hint).padStart(2, '0')}
        </p>
        <ValueDropdown
          list={hintList}
          isOpen={isOpen}
          onOpenChange={toggleOpen}
          onClickHandler={setHint}
          className="min-w-[88px] absolute left-[-48px]"
          marginTop={14}
          align="start"
        >
          <button
            type="button"
            className="flex items-center"
            onClick={toggleOpen}
          >
            <Image
              src="/icons/modal/black_chevron_down.svg"
              alt="모임 인원 버튼"
              width={20}
              height={20}
              className={`transition-transform transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            />
          </button>
        </ValueDropdown>
      </div>
    </div>
  );
}
