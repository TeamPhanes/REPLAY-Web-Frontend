'use client';

import { useState } from 'react';
import Image from 'next/image';
import UserInfoDropdown from '@/components/@shared/dropdown/UserInfoDropdown';
import { UserDTO } from '@/types/user/user.types';
import chevronDown from '@/public/icons/user/chevron_down.svg';
import userDefault from '@/public/icons/user/user_default.svg';

interface UserInfoProps {
  user: UserDTO['get'];
}

export default function UserInfo({ user }: UserInfoProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <div className="flex items-center justify-center gap-1">
      <Image
        src={user.image || userDefault}
        alt="유저 프로필 이미지"
        width={32}
        height={32}
        className="h-8 w-8 rounded-full border-2 border-mainBlue shadow-md"
      />
      <p className="text-xl font-semibold tracking-[-2.5%]">
        {user.nickname} 님
      </p>
      <UserInfoDropdown
        userImage={user.image}
        nickname={user.nickname}
        isOpen={isDropdownOpen}
        onOpenChange={setIsDropdownOpen}
      >
        <button
          type="button"
          className="flex items-center"
          onClick={toggleDropdown}
        >
          <Image
            src={chevronDown}
            alt="유저 정보 더보기"
            width={24}
            height={24}
            className={`transition-transform transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>
      </UserInfoDropdown>
    </div>
  );
}
