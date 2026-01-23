import { ReactNode } from 'react';

interface MyPageNavContainerProps {
  children: ReactNode;
}

export default function MyPageNavContainer({
  children,
}: MyPageNavContainerProps) {
  return (
    <div className="fixed left-0 top-[100px] z-40 flex w-full justify-between bg-brand-black p-1 md:p-2">
      {children}
    </div>
  );
}
