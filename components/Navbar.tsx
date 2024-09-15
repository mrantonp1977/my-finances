'use client';

import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

import { UserButton, useUser } from '@clerk/nextjs';
import Logo from './Logo';
import { ChevronRight } from 'lucide-react';

function Navbar() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-between items-center border-b border-slate-800 shadow-sm bg-slate-900/90">
      <Logo />
      <div className="flex items-center space-x-4">
        {isSignedIn ? (
          <>
            <Link href="/dashboard">
              <Button variant={'secondary'}>
                Dashboard
                <ChevronRight className="h-4 w-4 ml-2"/>
              </Button>
            </Link>
            <UserButton />
          </>
        ) : (
          <>
            <Link href="/sign-in">
              <Button>Sign In</Button>
            </Link>
            <Link href="/sign-in">
              <Button variant={'outline'}>Sign Up</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
