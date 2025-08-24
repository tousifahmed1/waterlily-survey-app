'use client';

import { useAuth } from '@/contexts/auth';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

export const Header = () => {
  const { user, logout } = useAuth();

  return (
    <div className='flex p-4 justify-between items-center'>
      <Link href='/survey' className='text-foreground text-2xl font-semibold'>
        Waterlily
      </Link>

      {user && (
        <div className='flex items-center gap-4'>
          <span className='text-foreground text-sm font-semibold'>
            Hi, {user.name}
          </span>
          <Button onClick={logout}>Logout</Button>
        </div>
      )}
    </div>
  );
};
