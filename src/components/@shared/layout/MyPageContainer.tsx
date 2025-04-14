import { ReactNode } from 'react';

interface MyPageContainerProps {
  children: ReactNode;
}

export default function MyPageContainer({ children }: MyPageContainerProps) {
  return <main className="relative mx-auto my-32 h-full w-xl">{children}</main>;
}
