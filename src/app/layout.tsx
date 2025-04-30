import type { Metadata } from 'next';
import '@/styles/globals.css';
import GlobalNav from '@/components/@shared/gnb/GlobalNav';
import AccessTokenLoader from '@/components/@shared/provider/AccessTokenLoader';
import QueryProvider from '@/components/@shared/provider/QueryProvider';

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
      <head>
        <link
          rel="preload"
          href="/fonts/PretendardVariable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <QueryProvider>
          <AccessTokenLoader />
          <GlobalNav />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
