'use client';

import MainWhiteButton from '@/components/@shared/button/MainWhiteButton';
import NoticeWriteEditor from '@/components/notice/NoticeWriteEditor';
import usePostNoticeForm from '@/hooks/form/usePostNoticeForm';
import { usePostNotice } from '@/hooks/reactQuery/usePostNotice';

export default function NoticePostSection() {
  const { mutate: PostNotice } = usePostNotice();
  const { handleSubmit, onSubmit, setValue } = usePostNoticeForm(PostNotice);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <NoticeWriteEditor setValue={setValue} />
      <div className="flex justify-end mt-5">
        <MainWhiteButton type="submit">작성하기</MainWhiteButton>
      </div>
    </form>
  );
}
