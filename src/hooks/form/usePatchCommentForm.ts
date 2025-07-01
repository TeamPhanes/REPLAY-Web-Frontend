import { useForm } from 'react-hook-form';

interface FormValues {
  content: string;
  parentId: number | null;
}

export default function usePatchCommentForm(
  mutate: any,
  defaultValues: FormValues,
  onClose?: () => void
) {
  const methods = useForm<FormValues>({
    defaultValues,
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
