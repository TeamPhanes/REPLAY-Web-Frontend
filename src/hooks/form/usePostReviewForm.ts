import { useForm } from 'react-hook-form';

interface FormValues {
  themeId: number;
  content: string;
  rating: number;
  success: string;
  images: File | null;
  hint: number;
  numberOfPlayer: number;
  themeReview: string;
  storyReview: string;
  levelReview: string;
}

export default function usePostReviewForm(
  mutate: any,
  onclose: () => void,
  themeId: number
) {
  const methods = useForm<FormValues>({
    defaultValues: {
      themeId,
      content: '',
      rating: 0,
      success: 'true',
      images: null,
      hint: 0,
      numberOfPlayer: 0,
      themeReview: 'NORMAL',
      storyReview: 'NORMAL',
      levelReview: 'NORMAL',
    },
  });

  const { reset } = methods;

  const onSubmit = (data: FormValues) => {
    mutate(data, {
      onSuccess: () => {
        onclose();
        reset();
      },
    });
  };
  return { ...methods, onSubmit };
}
