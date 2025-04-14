'use client';

import { usePathname } from 'next/navigation';
import MyPageNavContainer from './MyPageNavContainer';
import MyPageNavLink from './MyPageNavLink';

export default function MyPageNav() {
  const pathname = usePathname();

  return (
    <MyPageNavContainer>
      <MyPageNavLink pathname={pathname} />
    </MyPageNavContainer>
  );
}
