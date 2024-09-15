'use client';

import React from 'react';
import Logo from './Logo';

import { UserButton, useUser } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Loader } from 'lucide-react';
import { routes } from '@/constants';

function Sidebar() {
  const { user, isLoaded } = useUser();
  const pathname = usePathname();



  return (
    <div className="h-screen p-8 border border-slate-950 shadow-sm bg-slate-900">
      <Logo />
      <div className="mt-16">
        {routes.map((route) => (
          <Link href={route.href} key={route.href}>
            <h2
              className={`flex gap-4 items-center font-semibold p-5 cursor-pointer rounded-md hover:text-white hover:bg-slate-700 mb-2 transition ${
                pathname === route.href ? 'text-cyan-500 bg-slate-700' : 'text-gray-300'
              }`}
            >
              <route.icon className={route.color}/>
              {route.label}
            </h2>
          </Link>
        ))}
      </div>
      <div className="fixed bottom-10 p-5 flex gap-4 items-center">
        <UserButton afterSwitchSessionUrl="/" />
        <p className="text-lg font-semibold">
          {isLoaded && user
            ? `${user.firstName}`
            : <Loader className="h-6 w-6 animate-spin"/> }
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
