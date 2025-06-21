import { useEffect } from 'react';
import Modal from '@/components/@shared/modal/Modal';
import PostReviewContent from '@/components/@shared/modal/PostReview/PostReviewContent';
import PostReviewHint from '@/components/@shared/modal/PostReview/PostReviewHint';
import PostReviewImageFile from '@/components/@shared/modal/PostReview/PostReviewImageFile';
import PostReviewPlayerAndSuccess from '@/components/@shared/modal/PostReview/PostReviewPlayerAndSuccess';
import PostReviewRatingThemeLevelStory from '@/components/@shared/modal/PostReview/PostReviewRatingThemeLevelStory';
import PostReviewSubmitButton from '@/components/@shared/modal/PostReview/PostReviewSubmitButton';
import PostReviewTitle from '@/components/@shared/modal/PostReview/PostReviewTitle';
import usePatchReviewForm from '@/hooks/form/usePatchReviewForm';
import { usePatchReview } from '@/hooks/reactQuery/usePatchReview';
import useImagePreview from '@/hooks/useImagePreview';
import { RoomDTO } from '@/types/room/room.types';

interface FormValues {
  id?: number;
  themeId?: number;
  content?: string;
  rating?: number;
  success?: string;
  images?: File | null;
  hint?: number;
  numberOfPlayer?: number;
  themeReview?: string;
  storyReview?: string;
  levelReview?: string;
}

interface PatchReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  room: RoomDTO['get'];
  defaultValues: FormValues;
}
export default function PatchReviewModal({
  isOpen,
  onClose,
  room,
  defaultValues,
}: PatchReviewModalProps) {
  const { imageFile, previewUrl, handleImageChange, handleImageReset } =
    useImagePreview(room.reviewImage);
  const { mutate } = usePatchReview(room.reviewId, previewUrl);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    onSubmit,
    formState: { errors },
  } = usePatchReviewForm(mutate, onClose, defaultValues);

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="bg-white p-5 w-[726px] rounded-[30px]"
    >
      <form onSubmit={handleSubmit((data) => onSubmit(data, imageFile))}>
        <PostReviewTitle
          listImage={room.listImage}
          themeName={room.themeName}
          cafe={room.cafe}
          spot={room.spot}
        />
        <PostReviewPlayerAndSuccess
          numberOfPlayer={watch('numberOfPlayer') ?? 0}
          setNumberOfPlayer={(numberOfPlayer) =>
            setValue('numberOfPlayer', numberOfPlayer)
          }
          selectedSuccess={watch('success') ?? 'true'}
          setSelectedSuccess={(success) => setValue('success', success)}
        />
        <PostReviewHint
          hint={watch('hint') ?? 0}
          setHint={(hint) => setValue('hint', hint)}
        />
        <PostReviewRatingThemeLevelStory
          rating={watch('rating') ?? 0}
          setRating={(rating) => setValue('rating', rating)}
          themeReview={watch('themeReview') ?? 'NORMAL'}
          setThemeReview={(themeReview) => setValue('themeReview', themeReview)}
          levelReview={watch('levelReview') ?? 'NORMAL'}
          setLevelReview={(levelReview) => setValue('levelReview', levelReview)}
          storyReview={watch('storyReview') ?? 'NORMAL'}
          setStoryReview={(storyReview) => setValue('storyReview', storyReview)}
        />
        <PostReviewContent
          content={watch('content') ?? ''}
          contentChange={(content) => setValue('content', content)}
        />
        <PostReviewImageFile
          previewUrl={previewUrl}
          handleImageChange={handleImageChange}
          handleImageReset={handleImageReset}
        />
        <PostReviewSubmitButton onClose={onClose} />
      </form>
    </Modal>
  );
}
