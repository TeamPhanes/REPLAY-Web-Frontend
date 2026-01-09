import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { PostNotice } from '@/axios/notice';

interface PostNoticeData {
  title: string;
  content: string;
}
export const usePostNotice = () => {
  const queryclient = useQueryClient();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (data: PostNoticeData) => PostNotice(data),
    onSuccess: () => {
      queryclient.invalidateQueries({ queryKey: ['notice'] });
      toast.success(`게시물 작성이 완료되었습니다.`);
      router.push('/notice');
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
