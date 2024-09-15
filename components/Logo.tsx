import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Logo() {
  return (
    <Link href="/">
      <div className="flex items-start">
        <Image src="/assets/logo.png" alt="logo" width={32} height={32} />
        <p className="font-extrabold items-center text-2xl text-amber-500 ml-2">
          My Finances
        </p>
      </div>
    </Link>
  );
}

export default Logo;
