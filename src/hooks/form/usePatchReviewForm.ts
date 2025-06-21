import { useForm } from 'react-hook-form';

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

export default function usePatchReviewForm(
  mutate: any,
  onclose: () => void,
  defaultValues: FormValues
) {
  const methods = useForm<FormValues>({
    defaultValues,
  });

  const { reset } = methods;

  const onSubmit = (data: FormValues, imageFile: File | null) => {
    mutate(
      { ...data, image: imageFile },
      {
        onSuccess: () => {
          onclose();
          reset();
        },
      }
    );
  };
  return { ...methods, onSubmit };
}
