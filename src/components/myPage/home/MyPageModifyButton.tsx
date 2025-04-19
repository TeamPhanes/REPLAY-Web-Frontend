import Image from 'next/image';
import BlackPencil from '@/public/icons/mypage/black_pencil.svg';
import WhitePencil from '@/public/icons/mypage/white_pencil.svg';

export default function MyPageModifyButton() {
  return (
    <button
      type="button"
      className="group absolute right-0 top-[-60px] flex items-center gap-2 rounded-full bg-cardActive px-4 py-2 text-xl font-normal tracking-[-2.5%] text-card transition-colors duration-500 ease-in-out hover:bg-cardHover hover:text-basefont"
    >
      <span className="relative h-5 w-5">
        <Image
          src={WhitePencil}
          alt="수정하기"
          fill
          className="transition-opacity duration-500 group-hover:opacity-0"
        />
        <Image
          src={BlackPencil}
          alt="수정하기"
          fill
          className="opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      </span>
      <p>수정하기</p>
    </button>
  );
}
