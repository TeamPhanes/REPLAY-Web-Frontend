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

interface UsePatchGatheringFormProps {
  mutate: any;
  onClose: () => void;
  defaultValues: FormValues;
}

export default function usePatchGatheringForm({
  mutate,
  onClose,
  defaultValues,
}: UsePatchGatheringFormProps) {
  const methods = useForm<FormValues>({
    defaultValues,
  });

  const { reset } = methods;

  const onSubmit = (data: FormValues) => {
    mutate(data, {
      onSuccess: () => {
        onClose();
        reset();
      },
    });
  };

  return { ...methods, onSubmit };
}
