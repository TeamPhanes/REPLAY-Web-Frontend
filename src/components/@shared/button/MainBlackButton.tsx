import { ReactNode } from 'react';

interface MainBlackButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'button';
  className?: string;
}

export default function MainBlackButton({
  children,
  onClick,
  type = 'button',
  className,
}: MainBlackButtonProps) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={`rounded-[4px] px-4 py-2 duration-500 ease-in-out border-font-baseBlack border-[1px] font-semibold text-xs md:text-sm tracking-[-2.5%] text-font-baseWhite text-center bg-[#111111] hover:bg-[#505050] hover:border-[#505050] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
