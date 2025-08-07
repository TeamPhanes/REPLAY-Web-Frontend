import { ReactNode } from 'react';

interface MyPageNavContainerProps {
  children: ReactNode;
}

export default function MyPageNavContainer({
  children,
}: MyPageNavContainerProps) {
  return (
    <div className="absolute top-[-130px] md:top-[-100px] flex w-full px-10 justify-center md:justify-between rounded-full bg-tag md:px-28 py-1">
      {children}
    </div>
  );
}
