'use client';

import MyPageContainer from '@/src/components/@shared/layout/MyPageContainer';
import CommentCardSection from '@/src/components/myPage/comment/CommentCardSection';
import CommentTitleContainer from '@/src/components/myPage/comment/CommentTitleContainer';
import OrderChanger from '@/src/components/myPage/comment/OrderChanger';
import MyPageNav from '@/src/components/myPage/home/MyPageNav';
import { commentTypeList } from '@/src/constants/mypage/typeList';

import { useState } from 'react';

export default function MyCommentPage() {
  const [selectedType, setSelectedType] = useState('newestOrder');

  return (
    <MyPageContainer>
      <MyPageNav />
      <CommentTitleContainer />
      <OrderChanger
        options={commentTypeList}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <CommentCardSection />
    </MyPageContainer>
  );
}
