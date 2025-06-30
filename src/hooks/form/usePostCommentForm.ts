import { useForm } from 'react-hook-form';

interface FormValues {
  content: string;
  parentId: number | null;
}

export default function usePostCommentForm(
  mutate: any,
  commentId: number | null,
  onClose?: () => void
) {
  const methods = useForm<FormValues>({
    defaultValues: {
      content: '',
      parentId: commentId,
    },
  });

  const { reset } = methods;

  const onSubmit = (data: FormValues) => {
    mutate(data, {
      onSuccess: () => {
        onClose?.();
        reset();
      },
    });
  };
  return { ...methods, onSubmit };
}
