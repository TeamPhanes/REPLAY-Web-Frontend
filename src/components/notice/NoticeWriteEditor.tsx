'use client';

import { useCallback, useMemo, useRef } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '@/styles/reactQuill.css';
import { PostNoticeImage } from '@/axios/notice';

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
  const quillRef = useRef<ReactQuill>(null);

  const imageHandler = useCallback(() => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      try {
        const imageUrl = await PostNoticeImage(file);

        const quill = quillRef.current?.getEditor();
        const range = quill?.getSelection();

        if (quill && range) {
          quill.insertEmbed(range.index, 'image', imageUrl);
        }
      } catch (error) {
        console.error('이미지 업로드에 실패했습니다.');
      }
    };
  }, []);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    [imageHandler]
  );

  return (
    <>
      <input
        type="text"
        placeholder="제목을 입력해주세요."
        className="w-full text-font-baseBlack py-3 px-[15px] rounded-md"
        onChange={(e) => setValue('title', e.target.value)}
      />
      <ReactQuill
        ref={quillRef}
        className="bg-white text-font-baseBlack mt-4"
        modules={modules}
        onChange={(content) => setValue('content', content)}
      />
    </>
  );
}
