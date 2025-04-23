import { useRouter } from 'next/navigation';

export const useSocialLogin = () => {
  const router = useRouter();
  const login = (social: string | number) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/${social}`;
    window.open(url, '_blank', 'width=1024,height=768');

    const handleMessage = (e: MessageEvent) => {
      if (e.origin !== window.location.origin) return;

      if (e.data.success) {
        console.log('로그인 성공!');
        router.push('/');
        window.removeEventListener('message', handleMessage);
      }
    };
    window.addEventListener('message', handleMessage);
  };
  return { login };
};
