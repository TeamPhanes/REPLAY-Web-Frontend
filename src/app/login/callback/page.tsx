import { useEffect } from 'react';
import PageContainer from '@/components/@shared/layout/PageContainer';

export default function LoginCallbackPage() {
  useEffect(() => {
    const fetchAuthorization = async () => {
      const url = new URL(window.location.href);
      const social = url.searchParams.get('social');
    };
  });
  return (
    <PageContainer>
      <p>로그인 시도 중</p>
    </PageContainer>
  );
}
