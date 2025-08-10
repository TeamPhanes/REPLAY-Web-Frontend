import { useState } from 'react';
import Image from 'next/image';
import Modal from '@/components/@shared/modal/Modal';
import PostReviewContent from '@/components/@shared/modal/PostReview/PostReviewContent';
import PostReviewHint from '@/components/@shared/modal/PostReview/PostReviewHint';
import PostReviewImageFile from '@/components/@shared/modal/PostReview/PostReviewImageFile';
import PostReviewPlayerAndSuccess from '@/components/@shared/modal/PostReview/PostReviewPlayerAndSuccess';
import PostReviewRatingThemeLevelStory from '@/components/@shared/modal/PostReview/PostReviewRatingThemeLevelStory';
import PostReviewSubmitButton from '@/components/@shared/modal/PostReview/PostReviewSubmitButton';
import PostReviewTitle from '@/components/@shared/modal/PostReview/PostReviewTitle';
import usePostReviewForm from '@/hooks/form/usePostReviewForm';
import { usePostReview } from '@/hooks/reactQuery/usePostReview';
import useImagePreview from '@/hooks/useImagePreview';
import { RoomDTO } from '@/types/room/room.types';
import BlackChevronLeft from '@/public/icons/modal/black_chevron_left.svg';

interface PostReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  room: RoomDTO['get'];
}
export default function PostReviewModal({
  isOpen,
  onClose,
  room,
}: PostReviewModalProps) {
  const [isReview, setIsReview] = useState(true);
  const { imageFile, previewUrl, handleImageChange, handleImageReset } =
    useImagePreview(null);
  const { mutate } = usePostReview();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    onSubmit,
    formState: { errors },
  } = usePostReviewForm(mutate, onClose, room.themeId, handleImageReset);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="bg-white p-5 w-[726px] rounded-[30px]"
    >
      <div className="pb-5 flex justify-center items-center relative">
        <p className="font-semibold text-xl md:text-2xl/[34px] tracking-[-2.5%] text-basefont">
          리뷰 작성
        </p>
        <button
          type="button"
          className={`${isReview ? 'rotate-180 right-5' : 'rotate-0 left-5'} absolute`}
          onClick={() => setIsReview((prev) => !prev)}
        >
          <Image
            src={BlackChevronLeft}
            alt="다음 리뷰"
            width={36}
            height={36}
            className="w-7 h-7 md:w-9 md:h-9"
          />
        </button>
      </div>
      <form onSubmit={handleSubmit((data) => onSubmit(data, imageFile))}>
        <PostReviewTitle
          listImage={room.listImage}
          themeName={room.themeName}
          cafe={room.cafe}
          spot={room.spot}
        />
        <PostReviewPlayerAndSuccess
          numberOfPlayer={watch('numberOfPlayer')}
          setNumberOfPlayer={(numberOfPlayer) =>
            setValue('numberOfPlayer', numberOfPlayer)
          }
          selectedSuccess={watch('success')}
          setSelectedSuccess={(success) => setValue('success', success)}
        />
        <PostReviewHint
          hint={watch('hint')}
          setHint={(hint) => setValue('hint', hint)}
        />
        <div className="relative overflow-hidden w-full h-fit min-h-[350px]">
          <div
            className={`flex transition-transform duration-500 ease-in-out w-[200%] ${
              isReview ? 'translate-x-0' : '-translate-x-1/2'
            }`}
          >
            <div className="pb-12 w-1/2">
              <PostReviewRatingThemeLevelStory
                rating={watch('rating')}
                setRating={(rating) => setValue('rating', rating)}
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
              <PostReviewContent
                content={watch('content')}
                contentChange={(content) => setValue('content', content)}
              />
              <PostReviewImageFile
                previewUrl={previewUrl}
                handleImageChange={handleImageChange}
                handleImageReset={handleImageReset}
              />
              <PostReviewSubmitButton onClose={onClose} />
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
}
