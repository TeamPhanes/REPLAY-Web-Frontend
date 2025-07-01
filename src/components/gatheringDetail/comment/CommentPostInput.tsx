'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import MainBlueButton from '@/components/@shared/button/MainBlueButton';
import usePostCommentForm from '@/hooks/form/usePostCommentForm';
import { usePostComment } from '@/hooks/reactQuery/usePostComment';
import { useUserInfo } from '@/hooks/reactQuery/useUserInfo';
import UserDefaultImg from '@/public/icons/user/user_default.svg';

interface CommentPostInputProps {
  parentId?: string;
  onClose?: () => void;
}

export default function CommentPostInput({
  parentId,
  onClose,
}: CommentPostInputProps) {
  const { id } = useParams();
  const { accessToken } = useAuthStore();
  const { userInfo } = useUserInfo({ enabled: !!accessToken });
  const { mutate: PostComment } = usePostComment(id);
  const {
    register,
    handleSubmit,
    onSubmit,
    setValue,
    formState: { errors },
  } = usePostCommentForm(
    PostComment,
    parentId ? Number(parentId) : null,
    onClose
  );

  useEffect(() => {
    if (parentId !== undefined) {
      setValue('parentId', Number(parentId));
    }
  }, [parentId, setValue]);
  return (
    <div className="flex h-[293px] items-center justify-center">
      <div
        className={`${errors.content ? 'border-red-500' : 'border-grayFont'} relative h-[223px] w-[1000px] rounded-[30px] border-[1px]  bg-white p-5`}
      >
        <div className="flex items-center gap-2">
          <Image
            src={userInfo ? userInfo.image : UserDefaultImg}
            alt="유저 이미지"
            width={60}
            height={60}
            className="h-[60px] w-[60px] rounded-full border-2 border-mainBlue shadow-md"
          />
          <p className="text-2xl/[34px] font-semibold tracking-[-2.5%] text-basefont">
            {userInfo ? userInfo.nickname : '로그인 후 이용 부탁드립니다.'}
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            {...register('content', {
              required: '내용은 필수입니다.',
            })}
            className="mt-1 h-[70px] w-[960px] resize-none text-2xl/[34px] font-normal tracking-[-2.5%] text-basefont focus:outline-none"
            placeholder={
              parentId === undefined
                ? '댓글을 남겨보세요.'
                : '답글을 남겨보세요.'
            }
          />
          {errors.content && (
            <p className="text-red-500 text-sm mt-1">
              {errors.content.message}
            </p>
          )}
          <MainBlueButton
            type="submit"
            className="absolute bottom-5 right-5 w-[74px] h-[42px] flex items-center justify-center"
          >
            등록
          </MainBlueButton>
        </form>
      </div>
    </div>
  );
}
