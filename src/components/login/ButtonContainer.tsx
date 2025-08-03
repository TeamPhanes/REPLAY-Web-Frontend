import { ReactNode } from 'react';

interface ButtonContainerProps {
  children: ReactNode;
}

export default function ButtonContainer({ children }: ButtonContainerProps) {
  return (
    <div className="p-10 w-full md:p-[60px] mt-14 mb-14 md:mb-52 flex md:h-[387px] md:w-[552px] flex-col items-center rounded-[30px] shadow-xl bg-card">
      {children}
    </div>
  );
}
