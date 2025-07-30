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
      className={`bg-mainBlue rounded-2xl px-[10px] py-3 text-white font-semibold text-xl md:text-2xl/[34px] tracking-[-2.5%] text-center duration-500 ease-in-out hover:bg-mainBlueHover ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
