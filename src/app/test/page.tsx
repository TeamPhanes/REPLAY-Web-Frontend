'use client';

import { GetUser } from '@/axios/user';
import PageContainer from '@/components/@shared/layout/PageContainer';

export default function TestPage() {
  GetUser();
  return (
    <PageContainer>
      <p>내용</p>
    </PageContainer>
  );
}
