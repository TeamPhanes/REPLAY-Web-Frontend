import { ReactNode } from 'react';

interface MainWhiteButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'button';
  className?: string;
}

export default function MainWhiteButton({
  children,
  onClick,
  type = 'button',
  className,
}: MainWhiteButtonProps) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={`rounded-[4px] px-4 py-3 duration-500 ease-in-out border-font-baseBlack border-[1px] font-semibold text-xs md:text-sm tracking-[-2.5%] text-font-baseBlack text-center bg-button-whiteDefault hover:bg-[#F2F2F2] hover:border-line-Gray z-50 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
