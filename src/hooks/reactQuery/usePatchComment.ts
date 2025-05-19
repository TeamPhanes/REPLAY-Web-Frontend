import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { PatchComment } from '@/axios/comment';

interface PatchCommentProps {
  CommentId: string | string[];
  GatheringId: string | string[];
}

export const usePatchComment = ({
  CommentId,
  GatheringId,
}: PatchCommentProps) => {
  const mutation = useMutation({
    mutationFn: () => PatchComment({ CommentId, GatheringId }),
    onSuccess: () => {
      toast.success(`댓글 수정이 완료되었습니다.`);
    },
  });

  return mutation;
};
