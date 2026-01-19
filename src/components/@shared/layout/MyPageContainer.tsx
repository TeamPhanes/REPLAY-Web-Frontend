import { ReactNode } from 'react';

interface MyPageContainerProps {
  children: ReactNode;
}

export default function MyPageContainer({ children }: MyPageContainerProps) {
  return (
    <main className="relative mx-2 mb-10 mt-44 h-full md:mx-auto md:my-32 md:w-xl">
      {children}
    </main>
  );
}
