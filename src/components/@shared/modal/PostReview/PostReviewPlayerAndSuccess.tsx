import Image from 'next/image';
import ValueDropdown from '@/components/@shared/dropdown/ValueDropdown';
import OrderChanger from '@/components/myPage/comment/OrderChanger';
import { successTypeList } from '@/constants/mypage/typeList';
import { useOpen } from '@/hooks/useOpen';

interface PostReviewPlayerAndSuccessProps {
  numberOfPlayer: number;
  setNumberOfPlayer: (value: number) => void;
  selectedSuccess: string;
  setSelectedSuccess: (value: string) => void;
}
export default function PostReviewPlayerAndSuccess({
  numberOfPlayer,
  setNumberOfPlayer,
  selectedSuccess,
  setSelectedSuccess,
}: PostReviewPlayerAndSuccessProps) {
  const numberOfPlayerList = [2, 3, 4, 5, 6];
  const { isOpen, toggleOpen } = useOpen();
  return (
    <div className="flex items-center mt-5">
      <p className="font-normal text-2xl/[34px] tracking-[-2.5%] text-basefont w-48">
        플레이 인원
      </p>
      <div className="rounded-full bg-card py-2 px-4 flex items-center justify-center gap-1">
        <p className="font-normal text-base tracking-[-2.5%] text-basefont">
          {String(numberOfPlayer).padStart(2, '0')}
        </p>
        <ValueDropdown
          list={numberOfPlayerList}
          isOpen={isOpen}
          onOpenChange={toggleOpen}
          onClickHandler={setNumberOfPlayer}
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
      <div className="ml-16 flex items-center">
        <p className="font-normal text-2xl/[34px] tracking-[-2.5%] text-basefont w-48">
          방탈출 성공 여부
        </p>
        <OrderChanger
          options={successTypeList}
          selectedType={selectedSuccess}
          setSelectedType={setSelectedSuccess}
          gap="gap-2"
        />
      </div>
    </div>
  );
}
