import { ReactNode } from 'react';

interface FilterContainerProps {
  children: ReactNode;
}

export default function FilterContainer({ children }: FilterContainerProps) {
  return <div className="relative mt-[52px] flex gap-2">{children}</div>;
}
