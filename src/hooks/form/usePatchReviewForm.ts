import { useForm } from 'react-hook-form';
import { ReviewDTO } from '@/types/review/review.type';

export default function usePatchReviewForm(
  mutate: any,
  onclose: () => void,
  defaultValues: ReviewDTO['patch']['review'],
  handleImageReset: () => void
) {
  const methods = useForm<ReviewDTO['patch']['review']>({
    defaultValues,
  });

  const { reset } = methods;

  const onSubmit = (
    data: ReviewDTO['patch']['review'],
    imageFile: ReviewDTO['patch']['images']
  ) => {
    mutate(
      { review: data, images: imageFile },
      {
        onSuccess: () => {
          onclose();
          reset();
          handleImageReset();
        },
      }
    );
  };
  return { ...methods, onSubmit };
}
