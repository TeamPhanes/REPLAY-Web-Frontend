import { useState } from 'react';
import Image from 'next/image';
import Modal from '@/components/@shared/modal/Modal';
import PostReviewContent from '@/components/@shared/modal/PostReview/PostReviewContent';
import PostReviewHint from '@/components/@shared/modal/PostReview/PostReviewHint';
import PostReviewImageFile from '@/components/@shared/modal/PostReview/PostReviewImageFile';
import PostReviewPlayerAndSuccess from '@/components/@shared/modal/PostReview/PostReviewPlayerAndSuccess';
import PostReviewRatingThemeLevelStory from '@/components/@shared/modal/PostReview/PostReviewRatingThemeLevelStory';
import usePostReviewForm from '@/hooks/form/usePostReviewForm';
import { usePostReview } from '@/hooks/reactQuery/usePostReview';
import useImagePreview from '@/hooks/useImagePreview';
import { useOpen } from '@/hooks/useOpen';
import { VisitThemeListDTO } from '@/types/theme/theme.types';
import { yearMonthDay } from '@/utils/dateChange';
import CalendarIcon from '@/public/icons/cardList/calendar_icon.svg';
import BlackChevronLeft from '@/public/icons/modal/black_chevron_left.svg';
import MainBlueButton from '../../button/MainBlueButton';
import MainWhiteButton from '../../button/MainWhiteButton';
import CustomCalendar from '../../calendar/CustomCalendar';

interface PostReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  room: VisitThemeListDTO['get'];
}
export default function PostReviewModal({
  isOpen,
  onClose,
  room,
}: PostReviewModalProps) {
  const [isReview, setIsReview] = useState(true);
  const { isOpen: isCalendar, toggleOpen: toggleCalendar } = useOpen();
  const {
    imageFiles,
    previewUrls,
    handleImageChange,
    handleImageReset,
    resetAllImages,
  } = useImagePreview(3);
  const { mutate } = usePostReview(room.id);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    onSubmit,
    formState: { errors },
  } = usePostReviewForm(mutate, onClose, resetAllImages, () =>
    setIsReview(true)
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="bg-card-modal p-8 w-[1064px] rounded-lg relative"
    >
      <div className="flex justify-center items-center relative gap-5">
        <button
          type="button"
          className={`${isReview ? 'hidden' : ''} absolute left-0`}
          onClick={() => setIsReview((prev) => !prev)}
        >
          <Image src={BlackChevronLeft} alt="뒤로가기" width={32} height={32} />
        </button>
        <p className="text-[28px]/[38px] text-font-baseBlack font-semibold">
          리뷰 작성
        </p>
        <p className="text-base text-font-baseBlack font-normal tracking-widest">
          {isReview ? '1' : '2'}/2
        </p>
        <div className="flex items-center gap-[6px] absolute right-0">
          <Image
            src={CalendarIcon}
            alt="캘린더 아이콘"
            width={20}
            height={20}
          />
          <p className="text-base text-font-baseBlack font-normal">탈출일정</p>
          <button
            type="button"
            onClick={toggleCalendar}
            className="rounded-[4px] px-4 py-2 bg-brand-main100 text-base text-font-baseBlack font-normal ml-[10px]"
          >
            {yearMonthDay(String(watch('date')))}
          </button>
          <CustomCalendar
            isOpen={isCalendar}
            selectedDate={watch('date')}
            onClose={toggleCalendar}
            onDateChange={(date) => setValue('date', date)}
            layout="top-[48px] right-0"
          />
        </div>
      </div>

      <form>
        <div className="relative overflow-hidden w-full h-fit min-h-[350px]">
          <div
            className={`flex transition-transform duration-500 ease-in-out w-[200%] ${
              isReview ? 'translate-x-0' : '-translate-x-1/2'
            }`}
          >
            <div className="pb-12 w-1/2">
              <PostReviewRatingThemeLevelStory
                rating={watch('score')}
                setRating={(score) => setValue('score', score)}
                themeReview={watch('themeReview')}
                setThemeReview={(themeReview) =>
                  setValue('themeReview', themeReview)
                }
                levelReview={watch('levelReview')}
                setLevelReview={(levelReview) =>
                  setValue('levelReview', levelReview)
                }
                storyReview={watch('storyReview')}
                setStoryReview={(storyReview) =>
                  setValue('storyReview', storyReview)
                }
              />
            </div>

            <div className={`${isReview ? 'hidden' : ''} w-1/2`}>
              <div className="flex items-center mt-12 justify-center gap-12">
                <PostReviewPlayerAndSuccess
                  numberOfPlayer={watch('numberOfPlayer')}
                  setNumberOfPlayer={(numberOfPlayer) =>
                    setValue('numberOfPlayer', numberOfPlayer)
                  }
                  selectedSuccess={watch('isSuccess')}
                  setSelectedSuccess={(success) =>
                    setValue('isSuccess', success)
                  }
                />
                <PostReviewHint
                  hint={watch('hint')}
                  setHint={(hint) => setValue('hint', hint)}
                />
              </div>
              <div className="mt-6">
                <PostReviewContent
                  content={watch('content')}
                  contentChange={(content) => setValue('content', content)}
                />
              </div>

              <div className="flex gap-2 items-center justify-end">
                {previewUrls.map((url, index) => (
                  <PostReviewImageFile
                    key={index}
                    index={index}
                    previewUrl={url}
                    handleImageChange={(e) => handleImageChange(index, e)}
                    handleImageReset={() => handleImageReset(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[10px] justify-center">
            <MainWhiteButton onClick={onClose} className="min-w-40 h-[52px]">
              취소하기
            </MainWhiteButton>
            {isReview ? (
              <MainBlueButton
                onClick={() => setIsReview((prev) => !prev)}
                className="!text-base min-w-96 h-[52px]"
              >
                다음으로
              </MainBlueButton>
            ) : (
              <MainBlueButton
                type="button"
                onClick={handleSubmit((data) =>
                  onSubmit(
                    data,
                    imageFiles.filter((file): file is File => file !== null)
                  )
                )}
                className="!text-base min-w-96 h-[52px]"
              >
                게시하기
              </MainBlueButton>
            )}
          </div>
        </div>
      </form>
    </Modal>
  );
}
