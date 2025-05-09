'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useUserInfo } from '@/hooks/reactQuery/useUserInfo';

interface FormValues {
  nickname: string;
  comment: string;
  genderMark: boolean;
  emailMark: boolean;
}

export default function usePatchMyPageForm() {
  const { userInfo } = useUserInfo();

  const methods = useForm<FormValues>({
    defaultValues: {
      nickname: '',
      comment: '',
      genderMark: false,
      emailMark: false,
    },
  });

  const { reset } = methods;

  useEffect(() => {
    if (userInfo) {
      reset({
        nickname: userInfo.nickname || '',
        comment: userInfo.comment || '',
        genderMark: userInfo.genderMark ?? false,
        emailMark: userInfo.emailMark ?? false,
      });
    }
  }, [userInfo, reset]);

  return { ...methods, userInfo };
}
