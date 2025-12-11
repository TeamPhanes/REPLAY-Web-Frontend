import { useForm } from 'react-hook-form';

interface FormValues {
  review: {
    score: number;
    themeReview: string;
    levelReview: string;
    storyReview: string;
    isSuccess: string;
    numberOfPlayer: number;
    hint: number;
    content: string;
    date: Date;
  };
  images: File[] | null;
}

export default function usePostReviewForm(
  mutate: any,
  onclose: () => void,
  handleImageReset: () => void,
  setIsReview: () => void
) {
  const now = new Date();
  const methods = useForm<FormValues['review']>({
    defaultValues: {
      score: 0,
      themeReview: 'NORMAL',
      levelReview: 'NORMAL',
      storyReview: 'NORMAL',
      isSuccess: 'true',
      numberOfPlayer: 0,
      hint: 0,
      content: '',
      date: now,
    },
  });

  const { reset } = methods;

  const onSubmit = (
    data: FormValues['review'],
    imageFiles: FormValues['images']
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
