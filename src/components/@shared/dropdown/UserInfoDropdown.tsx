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
import { useLogout } from '@/hooks/reactQuery/useLogout';

interface UserInfoDropdownProps {
  children: ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function UserInfoDropdown({
  children,
  isOpen,
  onOpenChange,
}: UserInfoDropdownProps) {
  const { mutate: logout } = useLogout();

  return (
    <DropdownMenu open={isOpen} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild className="outline-none">
        {children}
      </DropdownMenuTrigger>

      <DropdownMenuContent
        sideOffset={30}
        align="end"
        className="z-50 flex flex-col rounded-lg bg-white data-[state=closed]:animate-dropdownOut data-[state=open]:animate-dropdownIn shadow-md"
      >
        {navLoginDropdownList.map((list) => (
          <DropdownMenuItem key={list.value} asChild className="outline-none">
            <div className="flex flex-col items-center duration-500 ease-in-out hover:bg-brand-main100 rounded-lg">
              <Link
                href={list.value}
                className="border-setfont py-2 px-4"
                onClick={() => onOpenChange(false)}
              >
                <p className="flex items-center justify-center text-base font-semibold tracking-[-2.5%] text-font-baseBlack transition-colors">
                  {list.label}
                </p>
              </Link>
              <span className="bg-line-lightGray h-[1px] w-20" />
            </div>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem asChild className="outline-none">
          <button
            type="button"
            className="p-[10px] duration-500 ease-in-out hover:bg-brand-main100 rounded-lg"
            onClick={() => logout()}
          >
            <p className="flex items-center justify-center rounded-full text-base font-semibold tracking-[-2.5%] text-font-baseBlack transition-colors">
              로그아웃
            </p>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
