import { useForm } from 'react-hook-form';
import { ReviewDTO } from '@/types/review/review.type';

export default function usePostReviewForm(
  mutate: any,
  onclose: () => void,
  handleImageReset: () => void,
  setIsReview: () => void
) {
  const now = new Date();
  const methods = useForm<ReviewDTO['post']['review']>({
    defaultValues: {
      score: 0,
      themeReview: 'NORMAL',
      levelReview: 'NORMAL',
      storyReview: 'NORMAL',
      isSuccess: 'true',
      numberOfPlayer: 0,
      hint: 0,
      content: '',
      representativeId: 'image0',
      date: now,
    },
  });

  const { reset } = methods;

  const onSubmit = (
    data: ReviewDTO['post']['review'],
    imageFiles: ReviewDTO['post']['images']
  ) => {
    mutate(
      { review: data, images: imageFiles },
      {
        onSuccess: () => {
          onclose();
          reset();
          handleImageReset();
          setIsReview();
        },
      }
    );
  };
  return { ...methods, onSubmit };
}
