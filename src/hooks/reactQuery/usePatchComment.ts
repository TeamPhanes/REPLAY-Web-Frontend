import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { PatchComment } from '@/axios/comment';

interface PatchCommentProps {
  CommentId: string | string[];
  GatheringId: string | string[];
}

export const usePatchComment = ({
  CommentId,
  GatheringId,
}: PatchCommentProps) => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: () => PatchComment({ CommentId, GatheringId }),
    onSuccess: () => {
      toast.success(`댓글 수정이 완료되었습니다.`);
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
