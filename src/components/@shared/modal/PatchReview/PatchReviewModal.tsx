import { useEffect, useState } from 'react';
import Image from 'next/image';
import Modal from '@/components/@shared/modal/Modal';
import PostReviewContent from '@/components/@shared/modal/PostReview/PostReviewContent';
import PostReviewHint from '@/components/@shared/modal/PostReview/PostReviewHint';
import PostReviewImageFile from '@/components/@shared/modal/PostReview/PostReviewImageFile';
import PostReviewPlayerAndSuccess from '@/components/@shared/modal/PostReview/PostReviewPlayerAndSuccess';
import PostReviewRatingThemeLevelStory from '@/components/@shared/modal/PostReview/PostReviewRatingThemeLevelStory';
import usePatchReviewForm from '@/hooks/form/usePatchReviewForm';
import { usePatchReview } from '@/hooks/reactQuery/usePatchReview';
import useImagePreview from '@/hooks/useImagePreview';
import { useOpen } from '@/hooks/useOpen';
import { ReviewDTO } from '@/types/review/review.type';
import { VisitThemeListDTO } from '@/types/theme/theme.types';
import { yearMonthDay } from '@/utils/dateChange';
import CalendarIcon from '@/public/icons/cardList/calendar_icon.svg';
import BlackChevronLeft from '@/public/icons/modal/black_chevron_left.svg';
import MainBlueButton from '../../button/MainBlueButton';
import MainWhiteButton from '../../button/MainWhiteButton';
import CustomCalendar from '../../calendar/CustomCalendar';

interface PatchReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  room: VisitThemeListDTO['get'];
  reviewImages: { id: number; image: string | null }[];
  defaultValues: ReviewDTO['patch']['review'];
}
export default function PatchReviewModal({
  isOpen,
  onClose,
  room,
  reviewImages,
  defaultValues,
}: PatchReviewModalProps) {
  const [isReview, setIsReview] = useState(true);
  const { isOpen: isCalendar, toggleOpen: toggleCalendar } = useOpen();
  const {
    imageFiles,
    previewUrls,
    handleImageChange,
    handleImageReset,
    resetAllImages,
  } = useImagePreview(3, reviewImages);
  const { mutate } = usePatchReview(room.reviewId);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    onSubmit,
    formState: { errors },
  } = usePatchReviewForm(mutate, onClose, defaultValues, resetAllImages);

  const handleAddDeleteImageIds = (deleteImageId: number[]) => {
    const currentIds = watch('deleteImageIds');
    const merged = Array.from(new Set([...currentIds, ...deleteImageId]));
    setValue('deleteImageIds', merged);
  };

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  useEffect(() => {
    setIsReview(true);
  }, [onClose]);
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="relative w-[1064px] rounded-lg bg-card-modal p-8"
    >
      <div className="relative flex items-center justify-center gap-5">
        <button
          type="button"
          className={`${isReview ? 'hidden' : ''} absolute left-0`}
          onClick={() => setIsReview(true)}
        >
          <Image src={BlackChevronLeft} alt="뒤로가기" width={32} height={32} />
        </button>
        <p className="text-[28px]/[38px] font-semibold text-font-baseBlack">
          리뷰 수정
        </p>
        <p className="text-base font-normal tracking-widest text-font-baseBlack">
          {isReview ? '1' : '2'}/2
        </p>
        <div className="absolute right-0 flex items-center gap-[6px]">
          <Image
            src={CalendarIcon}
            alt="캘린더 아이콘"
            width={20}
            height={20}
          />
          <p className="text-base font-normal text-font-baseBlack">탈출일정</p>
          <button
            type="button"
            onClick={toggleCalendar}
            className="ml-[10px] rounded-[4px] bg-brand-main100 px-4 py-2 text-base font-normal text-font-baseBlack"
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
        <div className="relative h-fit min-h-[350px] w-full overflow-hidden">
          <div
            className={`flex w-[200%] transition-transform duration-500 ease-in-out ${
              isReview ? 'translate-x-0' : '-translate-x-1/2'
            }`}
          >
            <div className="w-1/2 pb-12">
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
              <div className="mt-12 flex items-center justify-center gap-12">
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

              <div className="flex items-center justify-end gap-2">
                {previewUrls.map((url, index) => (
                  <PostReviewImageFile
                    key={index}
                    index={index}
                    previewUrl={url}
                    handleImageChange={(e) => handleImageChange(index, e)}
                    handleImageReset={() => handleImageReset(index)}
                    handleAddDeleteImageIds={handleAddDeleteImageIds}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-[10px]">
            <MainWhiteButton onClick={onClose} className="h-[52px] min-w-40">
              취소하기
            </MainWhiteButton>
            {isReview ? (
              <MainBlueButton
                onClick={() => setIsReview(false)}
                className="h-[52px] min-w-96 !text-base"
              >
                다음으로
              </MainBlueButton>
            ) : (
              <MainBlueButton
                type="button"
                onClick={handleSubmit((data) => onSubmit(data, imageFiles))}
                className="h-[52px] min-w-96 !text-base"
              >
                수정하기
              </MainBlueButton>
            )}
          </div>
        </div>
      </form>
    </Modal>
  );
}
