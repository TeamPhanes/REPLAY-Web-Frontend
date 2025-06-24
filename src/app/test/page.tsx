'use client';

import PageContainer from '@/components/@shared/layout/PageContainer';
import MyPageCommentSkeleton from '@/components/@shared/skeleton/MyPageCommentSkeleton';

export default function TestPage() {
  return (
    <PageContainer>
      <MyPageCommentSkeleton />
    </PageContainer>
  );
}
