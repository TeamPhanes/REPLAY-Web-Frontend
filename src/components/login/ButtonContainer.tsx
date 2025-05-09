import { ReactNode } from 'react';

interface ButtonContainerProps {
  children: ReactNode;
}

export default function ButtonContainer({ children }: ButtonContainerProps) {
  return (
    <div className="p-[60px] mt-14 mb-52 flex h-[387px] w-[552px] flex-col items-center rounded-[30px] shadow-xl bg-card">
      {children}
    </div>
  );
}
