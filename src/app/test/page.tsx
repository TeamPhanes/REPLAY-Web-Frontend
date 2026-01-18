'use client';

import { useState } from 'react';
import PageContainer from '@/components/@shared/layout/PageContainer';

export default function TestPage() {
  const [isCheck, setIsCheck] = useState(false);

  return (
    <PageContainer>
      <button
        type="button"
        className={`${isCheck ? 'left-full -translate-x-full' : 'left-0 translate-x-0'} bg-white w-20 text-black absolute top-10 transition-all duration-500 ease-in-out`}
        onClick={() => setIsCheck((prev) => !prev)}
      >
        이동 테스트
      </button>
    </PageContainer>
  );
}
