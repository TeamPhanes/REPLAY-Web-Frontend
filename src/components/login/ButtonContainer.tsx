import { ReactNode } from 'react';

interface ButtonContainerProps {
  children: ReactNode;
}

export default function ButtonContainer({ children }: ButtonContainerProps) {
  return (
    <div className="mb-14 mt-14 flex w-full flex-col items-center rounded-[30px] bg-card-white p-10 shadow-xl md:mb-52 md:h-[387px] md:w-[552px] md:p-[60px]">
      {children}
    </div>
  );
}
