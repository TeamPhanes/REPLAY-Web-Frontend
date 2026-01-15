import Image from 'next/image';
import Link from 'next/link';
import defaultUserImage from '@/public/icons/user/user_default.svg';

export default function LoginButton({ className }: { className?: string }) {
  return (
    <Link href="/login" className={`${className} shrink-0`}>
      <button type="button" className="items-center gap-[6px] shrink-0 flex">
        <Image
          src={defaultUserImage}
          alt="유저 기본 이미지"
          width={24}
          height={24}
        />
        <p className="hidden xl:block">로그인</p>
      </button>
    </Link>
  );
}
