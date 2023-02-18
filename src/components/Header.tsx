import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import inflearn from '/public/inflearn.png';

interface props {
  rightElements?: React.ReactElement[];
}

const Header = ({ rightElements }: props) => {
  return (
    <header className="absolute top-0 left-0 flex justify-between items-center z-50 pointer-events-none p-3 w-full">
      <div className="flex pointer-events-auto">
        <Link href="/">
          <Image
            src={inflearn}
            alt="logo"
            width="100"
            height="30"
            placeholder="blur"
            style={{ objectFit: 'cover' }}
          />
        </Link>
      </div>
      {rightElements && (
        <div className="flex gap-4 pointer-events-auto">{rightElements}</div>
      )}
    </header>
  );
};

export default Header;
