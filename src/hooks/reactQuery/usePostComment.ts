import { toast } from 'react-toastify';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PostComment } from '@/axios/comment';

interface PostCommentData {
  content: string;
  parentId: number | null;
}
export const usePostComment = (id: string | string[]) => {
  const queryclient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: PostCommentData) => PostComment(id, data),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['comment'] });
      toast.success(`댓글 작성이 완료되었습니다.`);
    },
  });

  return mutation;
};
