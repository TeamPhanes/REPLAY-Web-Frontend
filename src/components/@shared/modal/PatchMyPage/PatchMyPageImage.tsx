import { ChangeEvent } from 'react';
import Image from 'next/image';
import WhitePencil from '@/public/icons/mypage/white_pencil.svg';

interface PatchMyPageImageProps {
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function PatchMyPageImage({
  onImageChange,
}: PatchMyPageImageProps) {
  return (
    <label
      htmlFor="image"
      className="rounded-full bg-mainBlue w-10 h-10 p-2 flex items-center justify-center absolute cursor-pointer bottom-2 right-2"
    >
      <Image
        src={WhitePencil}
        alt="이미지 수정"
        width={24}
        height={24}
        className="w-6 h-6"
      />
      <input
        id="image"
        type="file"
        accept="image/*"
        onChange={onImageChange}
        className="sr-only"
      />
    </label>
  );
}
