import { useForm } from 'react-hook-form';

interface FormValues {
  content: string;
  parentId: number | null;
}

export default function usePostCommentForm(mutate: any) {
  const methods = useForm<FormValues>({
    defaultValues: {
      content: '',
      parentId: null,
    },
  });

  const { reset } = methods;

  const onSubmit = (data: FormValues) => {
    mutate(data, {
      onSuccess: () => {
        reset();
      },
    });
  };
  return { ...methods, onSubmit };
}
