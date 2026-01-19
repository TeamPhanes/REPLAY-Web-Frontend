import Image from 'next/image';
import ValueDropdown from '@/components/@shared/dropdown/ValueDropdown';
import { useOpen } from '@/hooks/useOpen';
import LightbulbIcon from '@/public/icons/cardList/lightbulb_gray_icon.svg';

interface PostReviewHintProps {
  hint: number;
  setHint: (value: number) => void;
}
export default function PostReviewHint({ hint, setHint }: PostReviewHintProps) {
  const hintList = [0, 1, 2, 3, 4, 5];
  const { isOpen, toggleOpen } = useOpen();
  return (
    <div className="flex items-center gap-[6px]">
      <Image src={LightbulbIcon} alt="전구 아이콘" width={20} height={20} />
      <p className="w-48 text-base font-normal text-font-baseBlack">
        힌트 사용 횟수
      </p>
      <div className="flex items-center justify-center gap-1 border-b-[1px] border-font-baseBlack px-1 py-[6px]">
        <p className="text-sm font-normal text-font-baseBlack">
          {String(hint).padStart(2, '0')}
        </p>
        <ValueDropdown
          list={hintList}
          isOpen={isOpen}
          selected={hint}
          onOpenChange={toggleOpen}
          onClickHandler={setHint}
          className="absolute left-[-48px] min-w-[88px]"
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
              width={18}
              height={18}
              className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            />
          </button>
        </ValueDropdown>
      </div>
    </div>
  );
}
