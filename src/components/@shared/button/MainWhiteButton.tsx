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
      className={`rounded-[4px] border-[1px] border-font-baseBlack bg-button-whiteDefault px-4 py-2 text-center text-xs font-semibold tracking-[-2.5%] text-font-baseBlack duration-500 ease-in-out hover:border-line-Gray hover:bg-[#F2F2F2] md:text-sm ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
