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
      className={`rounded-2xl px-[10px] py-3 duration-500 ease-in-out border-cardActive border-2 font-semibold text-2xl/[34px] tracking-[-2.5%] text-buttonColor200 text-center hover:bg-buttonColor200Hover ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
