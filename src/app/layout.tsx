import type { Metadata } from 'next';
import '@/styles/globals.css';
import GlobalNav from '@/components/@shared/gnb/GlobalNav';

export const metadata: Metadata = {
  title: 'RE:PLAY',
  description: '방탈출 정보와 리뷰, 모임까지 한 번에 즐기는 놀이터',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <GlobalNav />
        {children}
      </body>
    </html>
  );
}
