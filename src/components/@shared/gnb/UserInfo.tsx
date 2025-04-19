'use client';

import { useState } from 'react';
import Image from 'next/image';
import { mockUser } from '@/data/mockUser';
import UserInfoDropdown from '@/components/@shared/dropdown/UserInfoDropdown';
import chevronDown from '@/public/icons/user/chevron_down.svg';
import userDefault from '@/public/icons/user/user_default.svg';

export default function UserInfo() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <div className="flex items-center justify-center gap-1">
      <Image
        src={mockUser.image || userDefault}
        alt="유저 프로필 이미지"
        width={32}
        height={32}
        className="h-8 w-8 rounded-full border-2 border-mainBlue shadow-md"
      />
      <p className="text-xl font-semibold tracking-[-2.5%]">
        {mockUser.nickname} 님
      </p>
      <UserInfoDropdown
        userImage={mockUser.image}
        nickname={mockUser.nickname}
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
