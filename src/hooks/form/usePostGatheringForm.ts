import { useForm } from 'react-hook-form';

interface FormValues {
  name: string;
  themeId: number;
  content: string;
  isIndividual: string;
  price: number;
  dateTime: Date;
  registrationStart: Date;
  registrationEnd: Date;
  capacity: number;
}

export default function usePostGatheringForm(mutate: any, onclose: () => void) {
  const now = new Date();
  now.setMinutes(0, 0, 0);
  const after23Hours = new Date(now);
  after23Hours.setHours(after23Hours.getHours() + 23);
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const methods = useForm<FormValues>({
    defaultValues: {
      name: '',
      themeId: 0,
      content: '',
      isIndividual: '인당',
      price: 0,
      dateTime: tomorrow,
      registrationStart: now,
      registrationEnd: after23Hours,
      capacity: 4,
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
