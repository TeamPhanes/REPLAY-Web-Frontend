import { ReactNode } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';

interface ValueDropdownProps {
  list: string[] | number[];
  children: ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onClickHandler: (value: any) => void;
  selected: string | number;
  marginTop?: number;
  className?: string;
  align?: 'start' | 'center' | 'end';
  flexType?: 'flex-col' | 'flex-row';
}

/**
 * 공통 ValueDropdown 컴포넌트
 * @param list Dropdown에 표현할 List 배열 Ex) const Example = [1,2,3]
 * @param children Dropdown의 메뉴 Ex) <DropdownMenuItem asChild><div>아이템1</div></DropdownMenuItem>
 * @param isOpen useOpen() Hook의 isOpen<boolean>
 * @param onOpenChange useOpen() Hook의 toggleOpen<function>
 * @param onClickHandler value 값을 변경 할 Event Handler
 * @param marginTop? Dropdown의 trigger 대비 수직 위치
 * @param className? Dropdown의 부모 요소 Tailwind-CSS Ex) className='min-w-[120px]'
 * @param align? Dropdown의 trigger 대비 수평 위치 'start' | 'center' | 'end' 기본값 = 'end'
 * @param flexType? Dropdown의 시작 위치 'flex-col' | 'flex-row' 기본값 = 'flex-col'
 */
export default function ValueDropdown({
  list,
  children,
  isOpen,
  onOpenChange,
  onClickHandler,
  selected,
  marginTop,
  className,
  align = 'end',
  flexType = 'flex-col',
}: ValueDropdownProps) {
  return (
    <DropdownMenu open={isOpen} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild className="outline-none">
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        sideOffset={marginTop}
        align={align}
        className={`${className} ${flexType === 'flex-col' ? 'flex-col' : 'flex-row'} z-50 flex bg-white shadow-md data-[state=open]:animate-dropdownIn data-[state=closed]:animate-dropdownOut`}
      >
        {list.map((value) => (
          <DropdownMenuItem
            asChild
            key={value}
            onClick={() => onClickHandler(value)}
            className={`${flexType === 'flex-col' ? 'flex-col py-1 px-5' : 'flex-row'} cursor-pointer outline-none flex items-center duration-500 ease-in-out hover:bg-brand-main100`}
          >
            <div
              className={`${selected === value ? '!text-brand-main500 !font-semibold' : ''} whitespace-nowrap flex items-center justify-center text-sm text-font-baseBlack font-normal tracking-[-2.5%] transition-colors`}
            >
              {value}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
