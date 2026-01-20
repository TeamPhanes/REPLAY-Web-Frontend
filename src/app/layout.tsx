import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/styles/globals.css';
import '@/styles/scrollbar.css';
import GlobalNav from '@/components/@shared/gnb/GlobalNav';
import AuthSessionLoader from '@/components/@shared/provider/AuthSessionLoader';
import QueryProvider from '@/components/@shared/provider/QueryProvider';

export const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
});

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
          rel="prefetch"
          href="/images/loading/loading.gif"
          as="image"
          type="image/gif"
        />
        <link
          rel="prefetch"
          href="/images/loading/finish_loading.gif"
          as="image"
          type="image/gif"
        />
      </head>
      <body className={`${pretendard.className} antialiased`}>
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
