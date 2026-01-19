'use client';

import Image from 'next/image';
import UserInfoDropdown from '@/components/@shared/dropdown/UserInfoDropdown';
import { useOpen } from '@/hooks/useOpen';
import { GnvMeDTO } from '@/types/user/user.types';
import chevronDown from '@/public/icons/user/chevron_down.svg';
import userDefault from '@/public/icons/user/user_default.svg';

interface UserInfoProps {
  user: GnvMeDTO['get'];
}

export default function UserInfo({ user }: UserInfoProps) {
  const { isOpen, toggleOpen } = useOpen();

  return (
    <UserInfoDropdown isOpen={isOpen} onOpenChange={toggleOpen}>
      <div className="hidden shrink-0 items-center justify-center gap-[6px] md:flex">
        <Image
          src={user.image || userDefault}
          alt="유저 프로필 이미지"
          width={24}
          height={24}
          className="h-6 w-6 rounded-full bg-line-Gray shadow-md"
        />
        <p className="hidden max-w-[130px] truncate xl:block">
          {user.nickname} 님
        </p>
        <button
          type="button"
          className="hidden shrink-0 items-center xl:block"
          onClick={toggleOpen}
        >
          <Image
            src={chevronDown}
            alt="유저 정보 더보기"
            width={18}
            height={18}
            className={`block shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
      </div>
    </UserInfoDropdown>
  );
}
