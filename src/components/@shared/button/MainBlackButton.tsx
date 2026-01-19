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
      className={`rounded-[4px] border-[1px] border-font-baseBlack bg-[#111111] px-4 py-2 text-center text-xs font-semibold tracking-[-2.5%] text-font-baseWhite duration-500 ease-in-out hover:border-[#505050] hover:bg-[#505050] md:text-sm ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
