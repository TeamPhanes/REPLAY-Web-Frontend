import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { PostComment } from '@/axios/comment';

interface PostCommentData {
  content: string;
  parentId: number | null;
}
export const usePostComment = (id: string | string[]) => {
  const queryclient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (data: PostCommentData) => PostComment(id, data),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['comment'] });
      toast.success(`댓글 작성이 완료되었습니다.`);
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
