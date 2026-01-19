import { ReactNode } from 'react';

interface MyPageNavContainerProps {
  children: ReactNode;
}

export default function MyPageNavContainer({
  children,
}: MyPageNavContainerProps) {
  return (
    <div className="fixed left-0 top-[100px] z-40 flex w-full justify-center bg-brand-black py-2 md:justify-between md:px-28">
      {children}
    </div>
  );
}
