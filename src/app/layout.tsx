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
      <body className="w-full h-full">
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
