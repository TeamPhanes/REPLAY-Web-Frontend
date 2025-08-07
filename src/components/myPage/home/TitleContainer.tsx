import { ReactNode } from 'react';

interface TitleContainerProps {
  children: ReactNode;
}

export default function TitleContainer({ children }: TitleContainerProps) {
  return (
    <h1 className="hidden md:block text-4xl font-semibold tracking-[-2.5%] text-white">
      {children}
    </h1>
  );
}
