import { ReactNode } from 'react';

interface MyPageNavContainerProps {
  children: ReactNode;
}

export default function MyPageNavContainer({
  children,
}: MyPageNavContainerProps) {
  return (
    <div className="absolute left-[-260px] top-0 w-60 justify-center rounded-[20px] bg-grayFont p-5">
      {children}
    </div>
  );
}
