import Link from 'next/link';
import Image from 'next/image';
import userDefault from '@/public/icons/user/user_default.svg';
import { mockUser } from '@/src/data/mockUser';

export default function MyPageNavProfile() {
  return (
    <div className="flex items-center justify-center pb-6 pt-3">
      <Image
        src={mockUser.image === '' ? userDefault : mockUser.image}
        alt="유저 프로필"
        width={48}
        height={48}
        quality={100}
        className="absolute left-5 h-12 w-12 rounded-full shadow-md"
      />
      <Link href="/mypage">
        <p className="text-2xl/[34px] font-semibold tracking-[-2.5%] text-white">
          내 프로필
        </p>
      </Link>
    </div>
  );
}
