import Image from 'next/image';
import { periodFullYearMonthDay } from '@/utils/dateChange';
import LightbulbIcon from '@/public/icons/cardList/lightbulb_gray_icon.svg';
import TrophyIcon from '@/public/icons/cardList/trophy_gray_icon.svg';
import UsersIcon from '@/public/icons/cardList/users_gray_icon.svg';
import Modal from '../@shared/modal/Modal';
import Rating from '../@shared/rating/Rating';
import ReviewLikeButton from './ReviewLikeButton';

interface ReviewCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  key: number;
  data: any;
}

export default function ReviewCardModal({
  isOpen,
  onClose,
  key,
  data,
}: ReviewCardModalProps) {
  const themeAndLevelList = {
    LIKE: '적절함',
    NORMAL: '보통',
    DISLIKE: '부적절함',
  };
  const StoryList = {
    LIKE: '좋음',
    NORMAL: '보통',
    DISLIKE: '아쉬움',
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="bg-line-white">
      <div key={key} className="relative p-5 md:p-10">
        <div className="relative flex flex-row items-center">
          <Image
            src={data.profileImage}
            alt="유저 이미지"
            width={60}
            height={60}
            className="h-[60px] w-[60px] rounded-full bg-line-lightGray"
          />
          <div className="ml-2 flex flex-col gap-1 md:ml-5 md:gap-3">
            <Rating rating={data.score} width={120} height={24} type="Review" />
            <div className="flex flex-col md:flex-row md:items-center md:gap-2">
              <p className="text-base font-normal tracking-[-2.5%] text-font-baseBlack">
                {data.nickname}
              </p>
              <span className="hidden h-3 w-[1px] bg-font-baseBlack md:block" />
              <div className="flex items-center gap-2">
                <p className="text-base font-normal tracking-[-2.5%] text-font-baseBlack">
                  {periodFullYearMonthDay(data.createdAt)}
                </p>
                <span className="h-3 w-[1px] bg-font-baseBlack" />
                <button
                  type="button"
                  className="text-base font-normal tracking-[-2.5%] text-font-thirdBlack"
                >
                  신고
                </button>
              </div>
            </div>
          </div>
          <ReviewLikeButton
            totalLikes={data.likeCount}
            isLiked={data.isLiked}
            id={data.id}
          />
        </div>

        <div className="flex flex-col items-center p-1 md:flex-row md:gap-[60px] md:p-4">
          <div className="flex w-full items-center justify-between md:w-auto md:gap-8">
            <div className="flex items-center gap-2">
              <p className="px-2 py-1 text-sm font-semibold tracking-[-2.5%] text-font-disabled">
                테마
              </p>
              <p className="text-base font-semibold tracking-[-2.5%] text-brand-main500">
                {
                  themeAndLevelList[
                    data.themeReview as keyof typeof themeAndLevelList
                  ]
                }
              </p>
            </div>
            <div className="flex items-center">
              <p className="px-2 py-1 text-sm font-semibold tracking-[-2.5%] text-font-disabled">
                난이도
              </p>
              <p className="text-base font-semibold tracking-[-2.5%] text-brand-main500">
                {
                  themeAndLevelList[
                    data.levelReview as keyof typeof themeAndLevelList
                  ]
                }
              </p>
            </div>
            <div className="flex items-center">
              <p className="px-2 py-1 text-sm font-semibold tracking-[-2.5%] text-font-disabled">
                스토리
              </p>
              <p className="text-base font-semibold tracking-[-2.5%] text-brand-main500">
                {StoryList[data.storyReview as keyof typeof StoryList]}
              </p>
            </div>
          </div>
          <div className="flex w-full items-center justify-between gap-8 md:w-auto">
            <div className="flex items-center">
              <Image
                src={LightbulbIcon}
                alt="힌트 아이콘"
                width={24}
                height={24}
              />
              <p className="text-base font-normal tracking-[-2.5%] text-font-baseBlack">
                {data.hint}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={UsersIcon}
                alt="참여 인원 아이콘"
                width={24}
                height={24}
              />
              <p className="text-base font-normal tracking-[-2.5%] text-font-baseBlack">
                {data.numberOfPlayer}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src={TrophyIcon}
                alt="트로피 아이콘"
                width={24}
                height={24}
              />
              <p className="text-base font-normal tracking-[-2.5%] text-font-baseBlack">
                {data.isSuccess ? '성공' : '실패'}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-3 flex items-end justify-between gap-3">
          <p className="text-base font-normal tracking-[-2.5%] text-basefont">
            {data.content}
          </p>
          {data.images.length !== 0 && (
            <Image
              src={data.images[0].image}
              alt="리뷰 이미지"
              width={100}
              height={100}
              quality={100}
              className="h-[100px] w-[100px]"
            />
          )}
        </div>
      </div>
    </Modal>
  );
}
