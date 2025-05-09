'use client';

import { useState } from 'react';
import MyPageContainer from '@/components/@shared/layout/MyPageContainer';
import CommentCardSection from '@/components/myPage/comment/CommentCardSection';
import CommentTitleContainer from '@/components/myPage/comment/CommentTitleContainer';
import OrderChanger from '@/components/myPage/comment/OrderChanger';
import MyPageNav from '@/components/myPage/home/MyPageNav';
import { commentTypeList } from '@/constants/mypage/typeList';

export default function MyCommentPage() {
  const [selectedType, setSelectedType] = useState('new');

  return (
    <MyPageContainer>
      <MyPageNav />
      <CommentTitleContainer />
      <OrderChanger
        options={commentTypeList}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <CommentCardSection type={selectedType} />
    </MyPageContainer>
  );
}
