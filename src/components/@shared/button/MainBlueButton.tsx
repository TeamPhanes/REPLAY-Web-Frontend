import { ReactNode } from 'react';

interface MainBlueButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'submit' | 'button';
  className?: string;
}

export default function MainBlueButton({
  children,
  onClick,
  type = 'button',
  className,
}: MainBlueButtonProps) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={`rounded-[4px] bg-brand-main500 px-[10px] py-3 text-center text-xl font-semibold tracking-[-2.5%] text-font-baseWhite duration-500 ease-in-out hover:bg-mainBlueHover md:text-2xl/[34px] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
