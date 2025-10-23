import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <main className="relative mx-auto mt-[188px] px-2 md:px-0 my-11 md:mb-[88px] h-full w-full md:w-xl">
      {children}
    </main>
  );
}
