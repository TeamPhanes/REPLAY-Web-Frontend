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
      className={`rounded-2xl bg-mainPurple px-[10px] py-3 text-center text-xl font-semibold tracking-[-2.5%] text-white duration-500 ease-in-out hover:bg-mainPurpleHover md:text-2xl/[34px] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
