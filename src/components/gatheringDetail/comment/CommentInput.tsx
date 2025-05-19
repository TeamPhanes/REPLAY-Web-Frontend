'use client';

import { useParams } from 'next/navigation';
import usePatchCommentForm from '@/hooks/form/usePostCommentForm';
import { usePostComment } from '@/hooks/reactQuery/usePostComment';

export default function CommentInput() {
  const { id } = useParams();
  const { mutate } = usePostComment(id);
  const {
    register,
    handleSubmit,
    onSubmit,
    formState: { errors },
  } = usePatchCommentForm(mutate);
  return (
    <div className="flex h-[293px] items-center justify-center">
      <div
        className={`${errors.content ? 'border-red-500' : 'border-grayFont'} relative h-[189px] w-[1000px] rounded-[30px] border-[1px]  bg-white p-5`}
      >
        <p className="text-2xl/[34px] font-semibold tracking-[-2.5%] text-basefont">
          닉네임
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            {...register('content', {
              required: '내용은 필수입니다.',
            })}
            className="mt-1 h-[70px] w-[960px] resize-none text-2xl/[34px] font-normal tracking-[-2.5%] text-basefont focus:outline-none"
            placeholder="댓글을 남겨보세요."
          />
          {errors.content && (
            <p className="text-red-500 text-sm mt-1">
              {errors.content.message}
            </p>
          )}
          <button
            type="submit"
            className="absolute bottom-5 right-5 rounded-2xl bg-commentButton px-4 py-1 text-2xl/[34px] font-semibold tracking-[-2.5%] text-white"
          >
            등록
          </button>
        </form>
      </div>
    </div>
  );
}
