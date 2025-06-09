import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { DeleteComment } from '@/axios/comment';

interface DeleteCommentProps {
  CommentId: string | string[];
  GatheringId: string | string[];
}

export const useDeleteComment = ({
  CommentId,
  GatheringId,
}: DeleteCommentProps) => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: () => DeleteComment({ CommentId, GatheringId }),
    onSuccess: () => {
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
