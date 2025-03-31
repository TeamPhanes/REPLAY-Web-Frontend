import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <main className="relative mx-auto my-[88px] h-full w-xl">{children}</main>
  );
}
