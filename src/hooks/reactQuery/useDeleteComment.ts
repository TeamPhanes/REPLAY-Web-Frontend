import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { DeleteComment } from '@/axios/comment';

interface DeleteCommentProps {
  CommentId: string | string[];
  GatheringId: string | string[];
}

export const useDeleteComment = ({
  CommentId,
  GatheringId,
}: DeleteCommentProps) => {
  const mutation = useMutation({
    mutationFn: () => DeleteComment({ CommentId, GatheringId }),
    onSuccess: () => {
      toast.success(`댓글 삭제가 완료되었습니다.`);
    },
  });

  return mutation;
};
