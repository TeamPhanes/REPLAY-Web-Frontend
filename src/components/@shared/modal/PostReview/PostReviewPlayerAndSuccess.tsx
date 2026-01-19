import Image from 'next/image';
import ValueDropdown from '@/components/@shared/dropdown/ValueDropdown';
import OrderChanger from '@/components/myPage/comment/OrderChanger';
import { successTypeList } from '@/constants/mypage/typeList';
import { useOpen } from '@/hooks/useOpen';
import TrophyIcon from '@/public/icons/cardList/trophy_gray_icon.svg';
import UsersIcon from '@/public/icons/cardList/users_gray_icon.svg';

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
  const selectedSuccessList = ['성공', '실패'];
  const { isOpen: isSuccess, toggleOpen: toggleSuccess } = useOpen();
  const { isOpen: isNumberOfPlayer, toggleOpen: toggleNumberOfPlayer } =
    useOpen();
  return (
    <>
      <div className="flex items-center gap-[6px]">
        <Image src={TrophyIcon} alt="트로피 아이콘" width={20} height={20} />
        <p className="w-48 text-base font-normal text-font-baseBlack">
          방탈출 성공 여부
        </p>
        <div className="flex items-center justify-center gap-1 border-b-[1px] border-font-baseBlack px-1 py-[6px]">
          <p className="text-sm font-normal text-font-baseBlack">
            {selectedSuccess === 'true' ? '성공' : '실패'}
          </p>
          <ValueDropdown
            list={selectedSuccessList}
            isOpen={isSuccess}
            selected={selectedSuccess}
            onOpenChange={toggleSuccess}
            onClickHandler={(item) => {
              setSelectedSuccess(item === '성공' ? 'true' : 'false');
            }}
            className="absolute left-[-36px] min-w-[60px]"
            marginTop={14}
            align="start"
          >
            <button
              type="button"
              className="flex items-center"
              onClick={toggleSuccess}
            >
              <Image
                src="/icons/modal/black_chevron_down.svg"
                alt="모임 인원 버튼"
                width={18}
                height={18}
                className={`transform transition-transform duration-300 ${isSuccess ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
          </ValueDropdown>
        </div>
      </div>

      <div className="flex items-center gap-[6px]">
        <Image src={UsersIcon} alt="유저 아이콘" width={20} height={20} />
        <p className="w-48 text-base font-normal text-font-baseBlack">
          플레이 인원
        </p>
        <div className="flex items-center justify-center gap-1 border-b-[1px] border-font-baseBlack px-1 py-[6px]">
          <p className="text-sm font-normal text-font-baseBlack">
            {String(numberOfPlayer).padStart(2, '0')}
          </p>
          <ValueDropdown
            list={numberOfPlayerList}
            isOpen={isNumberOfPlayer}
            selected={numberOfPlayer}
            onOpenChange={toggleNumberOfPlayer}
            onClickHandler={setNumberOfPlayer}
            className="absolute left-[-36px] min-w-[60px]"
            marginTop={14}
            align="start"
          >
            <button
              type="button"
              className="flex items-center"
              onClick={toggleNumberOfPlayer}
            >
              <Image
                src="/icons/modal/black_chevron_down.svg"
                alt="모임 인원 버튼"
                width={18}
                height={18}
                className={`transform transition-transform duration-300 ${isNumberOfPlayer ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
          </ValueDropdown>
        </div>
      </div>
    </>
  );
}
