import { ReactNode } from 'react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';

interface LinkDropdownProps {
  list: { value: string; label: string }[];
  children: ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  marginTop?: number;
  className?: string;
  align?: 'start' | 'center' | 'end';
  flexType?: 'flex-col' | 'flex-row';
}

export default function LinkDropdown({
  list,
  children,
  isOpen,
  onOpenChange,
  marginTop,
  className,
  align = 'end',
  flexType = 'flex-col',
}: LinkDropdownProps) {
  return (
    <DropdownMenu open={isOpen} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild className="outline-none">
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={marginTop}
        align={align}
        className={`${className} ${flexType === 'flex-col' ? 'flex-col' : 'flex-row'} z-50 flex rounded-[20px] bg-grayFont data-[state=open]:animate-dropdownIn data-[state=closed]:animate-dropdownOut`}
      >
        {list.map((data) => (
          <div
            className={`${flexType === 'flex-col' ? 'flex-col' : 'flex-row'} flex items-center`}
            key={data.value}
          >
            <DropdownMenuItem asChild className="outline-none">
              <Link
                href={data.value}
                className={`${flexType === 'flex-col' ? 'w-[80%] my-2 px-5' : 'h-[80%] mx-2 px-2'} whitespace-nowrap flex items-center justify-center rounded-full text-2xl/[34px] font-normal tracking-[-2.5%] transition-colors duration-500 ease-in-out hover:bg-mainBlue`}
              >
                {data.label}
              </Link>
            </DropdownMenuItem>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
