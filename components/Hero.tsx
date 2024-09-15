'use client'; // Must be at the top

import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { Facebook, MailIcon, XIcon, Youtube } from 'lucide-react';

function Hero() {
  const { user, isSignedIn } = useUser();
  
  return (
    <section className="bg-slate-900 h-screen text-white flex items-center flex-col">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-full lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Manage Your Finances
            <span className="sm:block"> Control your Money. </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Start managing your finances with our simple and easy to use app.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {isSignedIn ? (
              <Link href="/dashboard">
                <Button size={'lg'} className="text-xl">
                  Continue
                </Button>
              </Link>
            ) : (
              <Link href="/sign-in">
                <Button size={'lg'} className="text-xl">
                  Get Started
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <Image
        src="/assets/banner.jpg"
        alt="background"
        width={950}
        height={800}
        className="mt-5 rounded-xl border-2 border-slate-800"
      />
      <div className="flex items-center space-x-2 py-4 mt-4">
        <MailIcon className="h-6 w-6 text-amber-400" />
        <p className="font-medium text-cyan-400">papaioannoudev@gmail.com</p>
        <XIcon className="h-6 w-6 text-amber-400" />
        <p className="font-medium text-cyan-400">@papdev</p>
        <Youtube className="h-6 w-6 text-amber-400" />
        <p className="font-medium text-cyan-400">papdev</p>
        <Facebook className="h-6 w-6 text-amber-400" />
        <p className="font-medium text-cyan-400">papaioannou antonis</p>
      </div>
      <footer className="w-full bg-slate-900 text-center py-6 mt-5">
        <p className="text-gray-400 text-md">
          © 2024  All rights reserved
        </p>
      </footer>
    </section>
  );
}

export default Hero;
