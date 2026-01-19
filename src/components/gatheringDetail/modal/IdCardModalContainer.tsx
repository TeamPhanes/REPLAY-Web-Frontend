import { ReactNode } from 'react';
import { useOpen } from '@/hooks/useOpen';

interface IdCardModalContainerProps {
  children: ReactNode;
}

export default function IdCardModalContainer({
  children,
}: IdCardModalContainerProps) {
  const { isOpen, toggleOpen } = useOpen();

  return (
    <div
      className={`${isOpen ? 'rotate-y-180' : ''} scrollbar-y-hidden flex h-[918px] w-[360px] flex-col items-center rounded-[30px] bg-brand-main500 p-5 duration-500 preserve-3d md:w-[640px]`}
      onClick={toggleOpen}
    >
      <div className="absolute left-0 top-[180px] -z-10 h-[558px] w-full bg-white" />
      <div className="absolute left-0 top-[716px] h-3 w-full bg-brand-sub300" />
      {children}
    </div>
  );
}
