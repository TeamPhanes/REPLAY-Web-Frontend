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
        <PostReviewRatingThemeLevelStory
          rating={watch('rating')}
          setRating={(rating) => setValue('rating', rating)}
          themeReview={watch('themeReview')}
          setThemeReview={(themeReview) => setValue('themeReview', themeReview)}
          levelReview={watch('levelReview')}
          setLevelReview={(levelReview) => setValue('levelReview', levelReview)}
          storyReview={watch('storyReview')}
          setStoryReview={(storyReview) => setValue('storyReview', storyReview)}
        />
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
      </form>
    </Modal>
  );
}
