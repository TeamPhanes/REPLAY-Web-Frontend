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
      className="absolute bottom-2 right-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-mainBlue p-2"
    >
      <Image
        src={WhitePencil}
        alt="이미지 수정"
        width={24}
        height={24}
        className="h-6 w-6"
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
