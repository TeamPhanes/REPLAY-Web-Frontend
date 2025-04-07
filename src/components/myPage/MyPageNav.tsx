'use client';

import { usePathname } from 'next/navigation';
import MyPageNavContainer from './MyPageNavContainer';
import MyPageNavProfile from './MyPageNavProfile';
import MyPageNavLink from './MyPageNavLink';
import MyPageNavLogout from './MyPageNavLogout';

export default function MyPageNav() {
  const pathname = usePathname();

  return (
    <MyPageNavContainer>
      <MyPageNavProfile />
      <MyPageNavLink pathname={pathname} />
      <MyPageNavLogout />
    </MyPageNavContainer>
  );
}
