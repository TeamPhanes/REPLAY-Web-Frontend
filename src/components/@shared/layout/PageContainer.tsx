import { ReactNode } from 'react';
import Footer from '@/components/@shared/footer/Footer';

interface PageContainerProps {
  children: ReactNode;
}

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <>
      <main className="relative mx-auto my-11 mt-32 h-full min-h-screen w-full px-4 xl:mb-[88px] xl:mt-[148px] xl:w-xl">
        {children}
      </main>
      <Footer />
    </>
  );
}
