import { ReactNode } from 'react';

interface MyPageContainerProps {
  children: ReactNode;
}

export default function MyPageContainer({ children }: MyPageContainerProps) {
  return (
    <main className="relative mx-2 md:mx-auto mt-44 mb-10 md:my-32 h-full md:w-xl">
      {children}
    </main>
  );
}
