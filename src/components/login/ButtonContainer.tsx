import { ReactNode } from 'react';

interface ButtonContainerProps {
  children: ReactNode;
}

export default function ButtonContainer({ children }: ButtonContainerProps) {
  return (
    <div className="p-[60px] -translate-x-1/2 left-1/2 flex h-[387px] w-[552px] top-[366px] absolute flex-col items-center rounded-[30px] shadow-xl bg-card">
      {children}
    </div>
  );
}
