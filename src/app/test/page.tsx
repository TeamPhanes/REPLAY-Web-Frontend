'use client';

import { useState } from 'react';
import { PostNoticeImage } from '@/axios/notice';
import PageContainer from '@/components/@shared/layout/PageContainer';

export default function TestPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedFile) {
      alert('파일을 선택해주세요.');
      return;
    }

    try {
      await PostNoticeImage(selectedFile);
      alert('이미지 전송 성공!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PageContainer>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit">파일 전송</button>
      </form>
    </PageContainer>
  );
}
