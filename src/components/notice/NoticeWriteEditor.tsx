'use client';

import { UseFormSetValue } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '@/styles/reactQuill.css';

interface FormValues {
  title: string;
  content: string;
}

interface NoticeWriteEditorProps {
  setValue: UseFormSetValue<FormValues>;
}

export default function NoticeWriteEditor({
  setValue,
}: NoticeWriteEditorProps) {
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image'],
      ],
    },
  };
  return (
    <>
      <input
        type="text"
        placeholder="제목을 입력해주세요."
        className="w-full text-font-baseBlack py-3 px-[15px] rounded-md"
        onChange={(e) => setValue('title', e.target.value)}
      />
      <ReactQuill
        className="bg-white text-font-baseBlack mt-4"
        modules={modules}
        onChange={(content) => setValue('content', content)}
      />
    </>
  );
}
