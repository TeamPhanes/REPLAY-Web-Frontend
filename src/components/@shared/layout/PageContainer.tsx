import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <main className="relative mx-4 mb-5 mt-32 h-screen md:mx-6 xl:mx-auto xl:w-xl">
      {children}
    </main>
  );
}
