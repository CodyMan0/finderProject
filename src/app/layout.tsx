import Header from '@/components/Header';
import Link from 'next/link';
import './global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head />
      <body>
        <Header
          rightElements={[
            <button key="button">복사</button>,
            <Link href="/feedback" key="feedback">
              링크
            </Link>,
          ]}
        />
        {children}
      </body>
    </html>
  );
}
