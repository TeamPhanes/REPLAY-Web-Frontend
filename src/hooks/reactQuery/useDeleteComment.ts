import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { DeleteComment } from '@/axios/comment';

interface DeleteCommentProps {
  commentId: string | string[];
  gatheringId: string | string[];
}

export const useDeleteComment = ({
  commentId,
  gatheringId,
}: DeleteCommentProps) => {
  const queryclient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: () => DeleteComment(commentId, gatheringId),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['comment'] });
      toast.success(`댓글 삭제가 완료되었습니다.`);
    },
    onError: (error: AxiosError) => {
      const status = error.response?.status;

      if (status === 401) {
        toast.info('로그인 후 이용해주세요', { toastId: 'auth-required' });
        router.push('/login');
      }
    },
  });

  return mutation;
};
