import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from 'next';
import '@/styles/globals.css';
import GlobalNav from '@/components/@shared/gnb/GlobalNav';
import AuthSessionLoader from '@/components/@shared/provider/AuthSessionLoader';
import QueryProvider from '@/components/@shared/provider/QueryProvider';

export const metadata: Metadata = {
  title: 'RE:PLAY',
  description: '방탈출 정보와 리뷰, 모임까지 한 번에 즐기는 놀이터',
  icons: {
    icon: '/favicon.svg',
  },
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
        <link
          rel="preload"
          href="/images/loading/loading.gif"
          as="image"
          type="image/gif"
        />
        <link
          rel="preload"
          href="/images/loading/finish_loading.gif"
          as="image"
          type="image/gif"
        />
      </head>
      <body>
        <QueryProvider>
          <AuthSessionLoader />
          <GlobalNav />
          {children}
          <ToastContainer
            position="top-center"
            closeOnClick={false}
            pauseOnHover
            draggable
            autoClose={4000}
            theme="dark"
            transition={Slide}
            hideProgressBar={false}
          />
        </QueryProvider>
      </body>
    </html>
  );
}
