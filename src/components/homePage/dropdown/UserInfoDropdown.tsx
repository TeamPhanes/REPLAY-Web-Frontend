'use client';

import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { navLoginDropdownList } from '@/constants/gnb/navLabelList';
import userDefault from '@/public/icons/user/user_default.svg';

interface UserInfoDropdownProps {
  children: ReactNode;
  userImage: string;
  nickname: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function UserInfoDropdown({
  children,
  userImage,
  nickname,
  isOpen,
  onOpenChange,
}: UserInfoDropdownProps) {
  return (
    <DropdownMenu open={isOpen} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild className="outline-none">
        {children}
      </DropdownMenuTrigger>

      <DropdownMenuContent
        sideOffset={44}
        align="end"
        className="z-50 flex flex-col rounded-[20px] bg-card data-[state=closed]:animate-fadeOut data-[state=open]:animate-fadeIn"
      >
        <DropdownMenuItem asChild className="outline-none">
          <div className="flex items-center gap-4 border-b-[1px] border-setfont p-5">
            <Image
              src={userImage || userDefault}
              alt={nickname}
              width={68}
              height={68}
              className="h-[68px] w-[68px] rounded-full border-[3px] border-mainBlue"
            />
            <p className="text-2xl/[34px] font-semibold tracking-[-2.5%] text-basefont">
              {nickname}
            </p>
          </div>
        </DropdownMenuItem>

        {navLoginDropdownList.map((list) => (
          <DropdownMenuItem key={list.value} asChild className="outline-none">
            <Link
              href={list.value}
              className="border-b-[1px] border-setfont p-[10px]"
            >
              <p className="flex h-[54px] w-[194px] items-center justify-center rounded-full text-2xl/[34px] font-semibold tracking-[-2.5%] text-basefont transition-colors duration-500 ease-in-out hover:bg-cardHover">
                {list.label}
              </p>
            </Link>
          </DropdownMenuItem>
        ))}

        <DropdownMenuItem asChild className="outline-none">
          <button type="button" className="p-[10px]">
            <p className="flex h-[54px] w-[194px] items-center justify-center rounded-full text-2xl/[34px] font-semibold tracking-[-2.5%] text-spot transition-colors duration-500 ease-in-out hover:bg-cardHover">
              로그아웃
            </p>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
