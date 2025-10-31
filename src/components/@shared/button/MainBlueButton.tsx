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
      className={`bg-brand-main500 rounded-[4px] px-[10px] py-3 text-font-baseWhite font-semibold text-xl md:text-2xl/[34px] tracking-[-2.5%] text-center duration-500 ease-in-out hover:bg-mainBlueHover ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
