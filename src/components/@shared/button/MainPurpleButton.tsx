import { ReactNode } from 'react';

interface MainPurpleButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'button';
  className?: string;
}

export default function MainPurpleButton({
  children,
  onClick,
  type = 'button',
  className,
}: MainPurpleButtonProps) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={`bg-mainPurple rounded-2xl px-[10px] py-3 text-white font-semibold text-xl md:text-2xl/[34px] tracking-[-2.5%] text-center duration-500 ease-in-out hover:bg-mainPurpleHover ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
