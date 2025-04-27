import { useRouter } from 'next/navigation';
import { API_PATH } from '@/axios/path.config';

export const useSocialLogin = () => {
  const router = useRouter();
  const login = (social: string | number) => {
    const url = API_PATH.auth.signUp(social);
    window.open(url, '_blank', 'width=1024,height=768');

    const handleMessage = (e: MessageEvent) => {
      if (e.origin !== window.location.origin) return;

      if (e.data.success) {
        router.push('/');
        window.removeEventListener('message', handleMessage);
      }
    };
    window.addEventListener('message', handleMessage);
  };
  return { login };
};
