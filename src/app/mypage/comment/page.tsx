'use client';

import PageContainer from '@/src/components/@shared/layout/PageContainer';
import CommentCardSection from '@/src/components/myPage/comment/CommentCardSection';
import CommentTitleContainer from '@/src/components/myPage/comment/CommentTitleContainer';
import OrderChanger from '@/src/components/myPage/comment/OrderChanger';
import MyPageNav from '@/src/components/myPage/home/MyPageNav';
import { commentTypeList } from '@/src/constants/mypage/typeList';

import { useState } from 'react';

export default function MyCommentPage() {
  const [selectedType, setSelectedType] = useState('newestOrder');

  return (
    <PageContainer>
      <MyPageNav />
      <CommentTitleContainer />
      <OrderChanger
        options={commentTypeList}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <CommentCardSection />
    </PageContainer>
  );
}
