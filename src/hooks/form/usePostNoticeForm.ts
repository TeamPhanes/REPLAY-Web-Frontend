import { useForm } from 'react-hook-form';

interface FormValues {
  title: string;
  content: string;
}

export default function usePostNoticeForm(mutate: any) {
  const methods = useForm<FormValues>({
    defaultValues: {
      title: '',
      content: '',
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
