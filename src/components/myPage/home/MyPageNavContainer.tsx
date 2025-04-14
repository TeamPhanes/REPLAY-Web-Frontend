import { ReactNode } from 'react';

interface MyPageNavContainerProps {
  children: ReactNode;
}

export default function MyPageNavContainer({
  children,
}: MyPageNavContainerProps) {
  return (
    <div className="absolute top-[-100px] flex w-full justify-between rounded-full bg-tag px-28 py-1">
      {children}
    </div>
  );
}
