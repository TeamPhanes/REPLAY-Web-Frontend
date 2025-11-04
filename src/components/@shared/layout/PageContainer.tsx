import { ReactNode } from 'react';
import Footer from '@/components/@shared/footer/Footer';

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <>
      <main className="relative mx-auto mt-[148px] px-2 md:px-0 my-11 md:mb-[88px] min-h-screen h-full w-full md:w-xl">
        {children}
      </main>
      <Footer />
    </>
  );
}
