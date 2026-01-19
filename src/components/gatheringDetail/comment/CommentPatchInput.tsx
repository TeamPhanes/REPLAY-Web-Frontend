'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import MainBlueButton from '@/components/@shared/button/MainBlueButton';
import usePatchCommentForm from '@/hooks/form/usePatchCommentForm';
import { usePatchComment } from '@/hooks/reactQuery/usePatchComment';
import { useUserInfo } from '@/hooks/reactQuery/useUserInfo';
import UserDefaultImg from '@/public/icons/user/user_default.svg';

interface FormValues {
  content: string;
  parentId: number | null;
}

interface CommentPatchInputProps {
  reCommentId?: string;
  parentId: string;
  defaultValues: FormValues;
  onClose?: () => void;
}

export default function CommentPatchInput({
  reCommentId,
  parentId,
  defaultValues,
  onClose,
}: CommentPatchInputProps) {
  const { id } = useParams();
  const { accessToken } = useAuthStore();
  const { userInfo } = useUserInfo({ enabled: !!accessToken });

  const { mutate: PatchComment } = usePatchComment({
    parentId: reCommentId ?? parentId,
    gatheringId: id,
  });
  const {
    register,
    handleSubmit,
    onSubmit,
    setValue,
    formState: { errors },
  } = usePatchCommentForm(PatchComment, defaultValues, onClose);

  useEffect(() => {
    if (parentId !== undefined) {
      setValue('parentId', Number(parentId));
    }
  }, [parentId, setValue]);
  return (
    <div className="flex h-[293px] items-center justify-center">
      <div
        className={`${errors.content ? 'border-red-500' : 'border-grayFont'} relative h-[223px] rounded-[30px] border-[1px] bg-white  p-5 md:w-[1000px]`}
      >
        <div className="flex max-w-[330px] items-center gap-2 md:max-w-full">
          <Image
            src={userInfo ? userInfo.image : UserDefaultImg}
            alt="유저 이미지"
            width={60}
            height={60}
            className="h-8 w-8 rounded-full border-2 border-mainBlue shadow-md md:h-[60px] md:w-[60px]"
          />
          <p className="text-xl font-semibold tracking-[-2.5%] text-basefont md:text-2xl/[34px]">
            {userInfo ? userInfo.nickname : '로그인 후 이용 부탁드립니다.'}
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            {...register('content', { required: '내용 입력은 필수입니다.' })}
            className="mt-2 h-[88px] resize-none text-xl font-normal tracking-[-2.5%] text-basefont focus:outline-none md:mt-1 md:h-[70px] md:w-[960px] md:text-2xl/[34px]"
            placeholder="수정 내용을 입력해주세요."
            onChange={(e) => setValue('content', e.target.value)}
          />
          {errors.content && (
            <p className="mt-1 text-sm text-red-500">
              {errors.content.message}
            </p>
          )}
          <MainBlueButton
            type="submit"
            className="absolute bottom-5 right-5 flex h-[42px] w-[74px] items-center justify-center"
          >
            등록
          </MainBlueButton>
        </form>
      </div>
    </div>
  );
}
