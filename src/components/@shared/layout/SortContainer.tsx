import { ReactNode } from 'react';

interface SortContainerProps {
  children: ReactNode;
}

export default function SortContainer({ children }: SortContainerProps) {
  return (
    <div className="mt-6 flex items-center justify-between relative">
      {children}
    </div>
  );
}
