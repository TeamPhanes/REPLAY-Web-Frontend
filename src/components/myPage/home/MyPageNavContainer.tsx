import { ReactNode } from 'react';

interface MyPageNavContainerProps {
  children: ReactNode;
}

export default function MyPageNavContainer({
  children,
}: MyPageNavContainerProps) {
  return (
    <div className="fixed left-0 top-[100px] flex w-full justify-center md:justify-between bg-brand-black md:px-28 py-2 z-40">
      {children}
    </div>
  );
}
