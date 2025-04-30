import { ReactNode } from 'react';

interface MainBlueButtonProps {
  children: ReactNode;
  className: string;
}

export default function MainBlueButton({
  children,
  className,
}: MainBlueButtonProps) {
  return (
    <button
      type="button"
      className={`bg-mainBlue rounded-2xl px-[10px] py-3 text-white font-semibold text-2xl/[34px] tracking-[-2.5%] text-center hover:bg-mainBlueHover ${className}`}
    >
      {children}
    </button>
  );
}
