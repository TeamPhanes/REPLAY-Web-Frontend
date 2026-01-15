import { ReactNode } from 'react';
import Footer from '@/components/@shared/footer/Footer';

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <>
      <main className="relative mx-auto mt-32 xl:mt-[148px] px-4 my-11 xl:mb-[88px] min-h-screen h-full w-full xl:w-xl">
        {children}
      </main>
      <Footer />
    </>
  );
}
