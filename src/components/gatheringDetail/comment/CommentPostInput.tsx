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
    <div className="md: justify-center px-2 py-5 md:flex md:h-[293px] md:items-center">
      <div
        className={`${errors.content ? 'border-red-500' : 'border-line-secondLightGray'} relative h-[223px] rounded-lg border-[1px] bg-white p-5 md:w-[1200px]`}
      >
        {/* <div className="max-w-[330px] md:max-w-full flex items-center gap-2">
          <Image
            src={userInfo ? userInfo.image : UserDefaultImg}
            alt="유저 이미지"
            width={60}
            height={60}
            className="w-8 h-8 md:h-[60px] md:w-[60px] rounded-full border-2 border-mainBlue shadow-md"
          />
          <p className="text-xl md:text-2xl/[34px] font-semibold tracking-[-2.5%] text-basefont">
            {userInfo ? userInfo.nickname : '로그인 후 이용 부탁드립니다.'}
          </p>
        </div> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            {...register('content', {
              required: '내용은 필수입니다.',
            })}
            className="mt-2 h-[88px] w-full resize-none text-xl font-normal tracking-[-2.5%] text-basefont focus:outline-none md:mt-1 md:h-[95px] md:text-2xl/[34px]"
            placeholder={
              parentId === undefined
                ? '댓글을 달아보세요.'
                : '답글을 달아보세요.'
            }
          />
          {errors.content && (
            <p className="mt-1 text-sm text-red-500">
              {errors.content.message}
            </p>
          )}
          <MainBlueButton
            type="submit"
            className="absolute bottom-5 right-5 flex h-[44px] w-[100px] items-center justify-center !text-sm tracking-[-2.5%]"
          >
            등록
          </MainBlueButton>
        </form>
      </div>
    </div>
  );
}
